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
      queryData: [],
      // Parameter for search to occur
      searchBy: '',
      tracking_number: ''
    }
  },
  created() {
    this.getOrders()
  },
  methods: {
    handleSubmitForm() {
      let endpoint = ''
      if (this.searchBy === 'Tracking Number') {
        endpoint = `order/search/?tracking_number=${this.tracking_number}&searchBy=tracking_number`
      }
      axios.get(`${apiURL}/${endpoint}`).then((res) => {
        this.queryData = res.data
      })
    },
    getOrders() {
      axios.get(`${apiURL}/order`).then((res) => {
        this.queryData = res.data
        console.log(res.data)
      })
      window.scrollTo(0, 0)
    },
    clearSearch() {
      // Resets all the variables
      this.searchBy = ''
      this.tracking_number = ''

      // get all entries
      this.getOrders()
    },
    editOrder(order_id) {
      if (this.user.isEditor) {
        this.$router.push({ name: 'updateorder', params: { id: order_id } })
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

    <div class="search-order">
      <div class="flex flex-col">
        <label class="block">
          <input type="text"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="name" v-on:keyup.enter="handleSubmitForm" placeholder="Enter tracking number" />
        </label>
        <button @click="handleSubmitForm" class="custom-button">
          Search
        </button>
      </div>
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
                      <th class="p-4 text-left">Tracking Number</th>
                      <th class="p-4 text-left">Expected Delivery Date</th>
                      <th class="p-4 text-left">Driver ID</th>
                      <th class="p-4 text-left">Estimated Total Cost</th>
                      <th class="p-4 text-left">Extra Fees</th>
                      <th class="p-4 text-left">Message</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-300" >
                    <tr @click="editOrder(order.order_id)" v-for="event in recentOrders" :key="order.order_id">
                      <td class="p-2 text-left">{{ order.tracking_number}}</td>
                      <td class="p-2 text-left">{{ formattedDate(order.exp_deliver_date) }}</td>
                      <td class="p-2 text-left">{{ order.emp_id}}</td>
                      <td class="p-2 text-left">{{ order.exp_cost}}</td>
                      <td class="p-2 text-left">{{ order.delivery_fees}}</td>
                      <td class="p-2 text-left">{{ order.message}}</td>
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
    .search-order {
      display: flex;
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
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    }
    .custom-button {
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