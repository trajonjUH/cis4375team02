<script>
import FooterComponent from '../components/footerComponent.vue';
import axios from 'axios'
import { DateTime } from 'luxon';
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  /*setup() {
    //validators
    return { v$: useVuelidate({ $autoDirty: true }) }
  },*/
  data() {   
    return {
      OrdersArray: [],
    /*OrdersArray: [
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      {
        _id: 1,
        tracking_number: 'ABC12345',
        exp_deliver_date: new Date('2023-11-24'),
        emp_id: 'EMP001',
        exp_cost: 100,
        delivery_fees: 20,
        message: 'Please deliver this order ASAP.'
      },
      ],*/
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
        console.log(response.data);
        this.OrdersArray = response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
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
    /*editOrder(orderID) {
      this.$router.push({ name: 'orderdetails', params: { id: orderID } })
    },*/
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
      <form handleSubmitForm>
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
                      <td class="p-2 text-left">{{ formattedDate(orders.expected_deliver_date) }}</td>
                      <td class="p-2 text-left">{{ orders.employee_id}}</td>
                      <td class="p-2 text-left">{{ orders.expected_cost}}</td>
                      <td class="p-2 text-left">{{ orders.delivery_fees}}</td>
                      <td class="p-2 text-left">{{ orders.message}}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
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