<script>
import FooterComponent from '../components/footerComponent.vue';
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  name: 'CommissionForm',
  /*setup() {
    //validators
    return { v$: useVuelidate({ $autoDirty: true }) }
  },*/
  data() {
    
    return {
    OrdersArray: [],
      orders: {
        tracking_number: '',
        delivery_service: '',
        exp_deliver_date: '',
        emp_id: '',
        exp_cost: '',
        delivery_fees: '',
        message: '',
        loading: false,
        error: null
      }
    }
  },

  mounted() {
  this.fetchOrders(); // Define this method to fetch orders
  },

  methods: {
    async handleSubmitForm() {
      try {
        // Send form data to the backend API
        const response = await this.$axios.post('/orders', this.orders);

        // Handle the response (you can update the UI accordingly)
        console.log('API response:', response.data);
        this.showConfirmation = true;
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, show error message, etc.
      }
    },
    async fetchOrders() {
    try {
      const response = await axios.get('http://localhost:3000/orders');
      console.log(response.data)
      this.OrdersArray = response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  },


  validations() {
    return {
      event: {
        name: { required },
        date: { required }
      }
    }
  },
  name: 'FormView',
  components: {
    FooterComponent
  }
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
            <div class="most-hugest-container">
              <div class="ml-10">
                
              </div>
              <div class="flex flex-col col-span-2">
                <table class="custom-table">
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
                    <tr  v-for="orders in OrdersArray" :key="orders._id">
                      <td class="p-2 text-left">{{ orders.tracking_number}}</td>
                      <td class="p-2 text-left">{{ formattedDate(orders.exp_deliver_date) }}</td>
                      <td class="p-2 text-left">{{ orders.emp_id}}</td>
                      <td class="p-2 text-left">{{ orders.exp_cost}}</td>
                      <td class="p-2 text-left">{{ orders.delivery_fees}}</td>
                      <td class="p-2 text-left">{{ orders.message}}</td>
                    </tr>
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
    .custom-border-color {
      border-color: #6aa9e5; 
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
    .custom-table {
      min-width: 100%;
      border: 2px solid #6aa9e5;
      border-radius: 12px;
    }
    .most-hugest-container {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr)); /* Default for all screen sizes */
      gap: 1.5rem; /* Adjust the gap according to your design */

      /* Responsive settings */
      @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns on small screens */
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(4, minmax(0, 1fr)); /* 4 columns on medium screens */
      }
    }
    .ml-10 {
      .ml-10 {
        margin-left: 5px; /* Adjust the value as needed */
      }
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
    color: #002385;
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