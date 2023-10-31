<script>
import FooterComponent from '../components/footerComponent.vue';
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  name: 'CommissionForm',
  data() {
    return {
      recentEvents: [],
      labels: [],
      zLabels: [],
      loading: false,
      error: null
    }
  },
  methods: {
    async sendEmail(e) {
      try {
        await emailjs.sendForm('form_service', 'form_template', e.target,
        'x15gAetF1SfxBhF7x', {
          name: this.name,
          email: this.email,
          message: this.message,
          commtype1: this.commtype1,
          wip: this.wip,
      });

        this.showConfirmation = true;
      } catch(error) {
          console.log({error})
      }
      this.name = '';
      this.email = '';
      this.message = '';
      this.commtype1 = '';
      this.wip = '';
    },
    async searchClientID(argID) {
      let endpoint = ''
      endpoint = `clients/:${argID}`

    },
    async getAttendanceData() {
      try {
        this.error = null
        this.loading = true
        //fetch the attendence data
        const response = await axios.get(`${apiURL}/events/attendance`)
        this.recentEvents = response.data
        //create labels for the attendance data
        this.labels = response.data.map(
          (item) => `${item.name} (${this.formattedDate(item.date)})`
        )

        //filter out empty (0) values from the result sets
        //0's from both label array and barChartData set for bar chart 
        let tempbarChartData = this.recentEvents.map((event) => [event.attendees.length])
        let i = 0;
        tempbarChartData.forEach(item => {
          console.log(item)
          if (item > 0) {
            this.barChartData.push(item)
          } else {
            this.labels.splice(i, 1)
          }
          i++;
        })

        //Create a stripped down linear array to filter
        let preProcZipData = this.recentEvents.map((event) => [event.attendees])
        let unfilteredAttendees = []
        preProcZipData.forEach(element => {
          element.forEach(element2 => {
            element2.forEach(element3 => {
              unfilteredAttendees.push(element3)
            })
          })
        })

        //filter out duplicate attendees
        let uniqueAttendee = [];
        unfilteredAttendees.forEach(attendee => {
          let addAttendee = true
          uniqueAttendee.forEach(fAttendee => {
            if (fAttendee === attendee) {
              addAttendee = false
            }
          })
          if (addAttendee) {
            uniqueAttendee.push(attendee)
          }

        })

        //create a unique list of zipcodes from the reponse set
        const zipCodeData = [];
        const cResponse = []
        uniqueAttendee.forEach(element => {
          cResponse.push(axios.get(`${apiURL}/clients/id/${element}`).then(
            element => element.data
          ))
        })

        //We will go through the array we created and count duplicate zip codes
        //resulting array should have sub arrays that look like
        //[zipCode: 7777777, count: 1]
        const wait = await Promise.all(cResponse).then(Attendees => {
          Attendees.forEach(attendee => {
            let addAttendee = true
            zipCodeData.forEach(zip => {
              let i = 0;
              if (zip.zipCode === attendee.address.zip) {
                addAttendee = false
                zipCodeData[i].count++
              }
              i = i + 1
            })
            if (addAttendee && attendee.address.zip.length > 0) {
              zipCodeData.push({ zipCode: '' + attendee.address.zip, count: 1 })
            }
          })

          //pass the zipcode data to the pie chart
          this.pieChartData = zipCodeData
        })
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: 'Server Response',
            message: err.message
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: 'Unable to Reach Server',
            message: err.message
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: 'Application Error',
            message: err.message
          }
        }
      }
      this.loading = false
    },
    formattedDate(datetimeDB) {
      const dt = DateTime.fromISO(datetimeDB, {
        zone: 'utc'
      })
      return dt
        .setZone(DateTime.now().zoneName, { keepLocalTime: true })
        .toLocaleString()
    },
    // method to allow click through table to event details
    editEvent(eventID) {
      this.$router.push({ name: 'eventdetails', params: { id: eventID } })
    }
  },
  name: 'FormView',
  components: {
    FooterComponent
  }
}
</script>

<template>
  <div class="page-container">
    <div class="contentpage">
      <form @submit.prevent="sendEmail">
        <h2>Welcome to the Orders page.</h2>
          <p>Click on a logo to track an order.</p>
            
            <!--Tracking Logos-->
            <div class="tracking_logos">
                <a href="https://www.ups.com/track" style="padding: 10px;">
                  <img src="src/assets/ups_logo.png" alt="Link Image" style="width: 50px; height: 50px;">
                </a>
                <a href="https://tools.usps.com/go/TrackConfirmAction_input" style="padding: 10px;">
                  <img src="src/assets/usps_logo2.png" alt="Link Image" style="width: 77px; height: 50px;">
                </a>  
                <a href="https://www.fedex.com/en-us/tracking.html" style="padding: 10px;">
                  <img src="src/assets/fedex_logo.png" alt="Link Image" style="width: 168px; height: 50px;">
                </a><br><br>
            </div>
            <br>
            <!---->

          <p>Fill out the form below with the order details to log the order in the database.</p>
          <!--Form Entries Start Here-->
              <label for="name">Tracking Number:</label>
                <input type="text" name="name" id="name" required><br><br>

              <div class="center-dropdown">
                <label for="commtype1">Delivery Service</label><br>
                <select name="commtype1" id="commtype1" class="custom-select">
                    <option value="volvo">UPS</option>
                    <option value="saab">FedEx</option>
                    <option value="opel">USPS</option>
                </select><br><br>        
              </div>

              <label for="Expected_Date">Expected Delivery Date:</label>
                <input type="date" name="date" placeholder="Hiring Date" id="date" required>

              <label for="empid">Driver ID</label>
                <input type="number" name="empid" placeholder="Employee ID" id="empid" required>

              <label for="money">Estimated Total Cost:</label>
                <input type="text" id="money" name="money" placeholder="$0.00" />

              <div class="center-radio">
              <h2>Were there extra fees?</h2>
              <input type="radio" id="yes" name="wip" value="yes">
                <label for="yes" class="radio">yes</label>
              <input type="radio" id="no" name="wip" value="no">
                <label for="no" class="radio">no</label><br>
              </div>

              <label for="message">Message:</label>
                <textarea id="message" name="message" rows="8" required></textarea>

              <button type="submit">Submit</button>
              <div v-if="showConfirmation" class="confirmation-message">
                <p>Message recieved.</p>
              </div>
      </form>
          <!--Form Entries Ends Here-->
    </div><!--contentpage div-->

    <div class="dblist">
        <main>
          <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              <div class="ml-10"></div>
              <div class="flex flex-col col-span-2">
                <table class="min-w-full shadow-md rounded">
                  <thead style="background-color: #6aa9e5;" class="text-xl">
                    <tr class="p-4 text-left" style="background-color: #c0d9f0;">
                      <th class="p-4 text-left">Tracking Number</th>
                      <th class="p-4 text-left">Expected Delivery Date</th>
                      <th class="p-4 text-left">Driver ID</th>
                      <th class="p-4 text-left">Estimated Total Cost</th>
                      <th class="p-4 text-left">Extra Fees</th>
                      <th class="p-4 text-left">Message</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-300" >
                    <!--<tr @click="editEvent(event._id)" v-for="event in recentEvents" :key="event._id">
                      <td class="p-2 text-left">{{ event.}}</td>
                      <td class="p-2 text-left">{{ formattedDate(event.date) }}</td>
                      <td class="p-2 text-left">{{ event.}}</td>
                      <td class="p-2 text-left">{{ event.}}</td>
                      <td class="p-2 text-left">{{ event.}}</td>
                      <td class="p-2 text-left">{{ event.}}</td>
                    </tr>-->
                  </tbody>
                </table>
                <div>
                  <!--add &&!error back-->
                  <!-- Start of loading animation -->
                  <div class="mt-40" v-if="loading">
                    <p class="text-6xl font-bold text-center text-gray-500 animate-pulse">
                      Loading...
                    </p>
                  </div>
                  <!-- End of loading animation -->

                  <!-- Start of error alert -->
                  <div class="mt-12 bg-red-50" v-if="error">
                    <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
                      {{ error.title }}
                    </h3>
                    <p class="p-4 text-lg font-bold text-red-900">
                      {{ error.message }}
                    </p>
                  </div>
                  <!-- End of error alert -->
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  </div>
    <footer>
      <FooterComponent />
    </footer>
</template>

<style>
  html, body {
    background-color: #ECF4FC;
    } 
    body {
      color: #002385;
      font-size: 14px;
      font-weight: bold;
    }
    h1, h2, h3 {
      color: #002385;
      font-size: 16px;
      font-family: 'Courier New', Courier, monospace;
      margin-top: 25px;
      font-weight: bold;
    }
    .page-container {
      display: flex;
    }
    .contentpage {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50vh;
      flex: 1;
    }
    .dblist {
      display: flex;
      min-height: 50vh;
      flex: 1;
    }
    .form-container {
      width: 640px;
      height: 1435px;
    }
    label {
      font-family: 'Courier New', Courier, monospace;
      font-size: 16px;
    }
    form {
      width: 500px;
      padding-bottom: 100px;
      padding-top: 5px;
    }
    .tracking_logos{
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .center-dropdown {
    text-align: center; /* Horizontally center the content */
    }
    .center-radio{
    text-align: center; /* Horizontally center the content */
    }
    input[type="text"],
    input[type="email"],
    input[type="date"],
    input[type="number"],
    textarea {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      padding: 10px;
      border: 2px solid #6aa9e5;
      background-color: #c0d9f0;
      color: #002385;
      border-radius: 2%;
      color: #002385;
    }
    input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background-clip: content-box;
    border: 2px solid #6aa9e5;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;
    }
    input[type="checkbox"]:checked {
    background-color: #6aa9e5;
    }
    label.checkbox-label {
    font-family: "Courier New", Courier, monospace;
    color: #002385;
    }
    .confirmation-message {
    margin-top: 10px;
    padding: 10px;
    background-color: #61af67;
    color: #ffffff;
    border-radius: 4px;
    text-align: center;
    width: 500px;
    height: 30;
    }
    button[type="submit"],
    button[type="menu"] {
    background-color: #6aa9e5;
    color: #002385;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    }
    button[type="submit"]:hover {
      background-color: #4187c9;
    }
    .custom-select {
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    color: #002385;
    font-weight: bold;
    background-color: #c0d9f0;
    border: 2px solid #6aa9e5;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    width: 230px;
    }
    option:disabled {
    color: #212121;
    }
    .radio {
      margin-right: 10px;
      padding-left: 5px;
      font-size: 16px;
      color: rgb(255, 255, 255);
    }
    label.radio {
      font-family: "Courier New", Courier, monospace;
      color: #002385; 
      font-weight: bold;
    }
    .form-container {
      display: flex;
      height: 50px;
      padding-right: 100px;
    }
    .form-group {
      margin-right: 5px;
    }



</style>