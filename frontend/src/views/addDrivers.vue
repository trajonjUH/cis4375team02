<script>
import FooterComponent from '../components/footerComponent.vue';
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  data() {
    return {
    DriversArray: [],
      driver: {
        fname: '',
        lname: '',
        emp_id: '',
        phone: '',
        hiring_date: '',
        loading: false,
        error: null
      }
    }
  },

  methods: {
    async handleSubmitForm() {
      try {
        // Send form data to the backend API
        const response = await this.$axios.post('/api/drivers', this.driver);

        // Handle the response (you can update the UI accordingly)
        console.log('API response:', response.data);
        this.showConfirmation = true;
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, show error message, etc.
      }
    },
  },
  validations() {
    return {
      event: {
        name: { required },
        date: { required }
      }
    }
  },
  name: 'Drivers',
  components: {
    FooterComponent
  }
}
</script>

<template>
  <div class="page-container">
    <div class="contentpage">
      <form @submit.prevent="handleSubmitForm">
        <h2>Welcome to the Driver's page.</h2>
          <p>Here is where you enter driver information records.</p>
              <label for="fname">Enter Driver information using the form below.</label>
                <input type="text" name="fname" placeholder="First Name" id="fname" required v-model="driver.fname">

              <label for="lname"> </label>
                <input type="text" name="lname" placeholder="Last Name" id="lname" required v-model="driver.lname">

              <label for="emp_id"> </label>
                <input type="number" name="emp_id" placeholder="Employee ID" id="emp_id" required v-model="driver.emp_id">

              <label for="phone"> </label>
                <input type="tel" name="phone" placeholder="Phone Number" id="phone" required v-model="driver.phone">

              <label for="Hiring_Date">Hiring Date:</label>
                <input type="date" name="date" placeholder="Hiring Date" id="date" required v-model="driver.hiring_date">

              <label for="message">Comments:</label>
                <textarea id="message" name="message" placeholder="Comments" rows="4" required v-model="driver.comments"></textarea>
              
              <button type="submit">Submit</button>
                <div v-if="showConfirmation" class="confirmation-message">
                  <p>Message recieved.</p>
                </div>
      </form>
    </div>

    <div class="dblist">
          <main>
            <div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                <div class="ml-10"></div>
                <div class="flex flex-col col-span-2">
                  <table class="min-w-full shadow-md rounded">
                    <thead style="background-color: #6aa9e5;" class="text-xl">
                      <tr class="p-4 text-left" style="background-color: #c0d9f0;">
                        <th class="p-4 text-left">First Name</th>
                        <th class="p-4 text-left">Last Name</th>
                        <th class="p-4 text-left">Employee ID</th>
                        <th class="p-4 text-left">Phone Number</th>
                        <th class="p-4 text-left">Hiring Date</th>
                        <th class="p-4 text-left">Comments</th>
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
  .dblist {
      display: flex;
      min-height: 50vh;
      flex: 1;
  }
  .contentpage {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50vh;
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
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    textarea {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      padding: 10px;
      border: 2px solid #6aa9e5;
      background-color: #c0d9f0;
      color: #002385;
      border-radius: 2%;
      color: #002385;
      margin-bottom: 10px;
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

    button[type="submit"] {
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
    color: #ffffff;
    background-color: #6aa9e5;
    border: 2px solid #c0d9f0;
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