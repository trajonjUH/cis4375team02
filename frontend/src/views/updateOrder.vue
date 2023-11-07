<script>
import useVuelidate from '@vuelidate/core'
import { required, email, alpha, numeric } from '@vuelidate/validators'
import VueMultiselect from 'vue-multiselect'
import axios from 'axios'
import { DateTime } from 'luxon'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  props: ['id'],
  components: { VueMultiselect },
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      // rename Orders arrays for added clarity
      ordersAll: [],
      ordersSelected: [],
      ordersRegistered: [],
      order: {
        tracking_number: '',
        delivery_service: '',
        exp_deliver_date: '',
        emp_id: '',
        exp_cost: '',
        delivery_fees: '',
        message: ''
      }
    }
  },
  created() {
    axios.get(`${apiURL}/Orders/id/${this.$route.params.id}`).then((res) => {
      // simplified setting Order
      this.Order = res.data
    })
    axios.get(`${apiURL}/Orders`).then((res) => {
      // simplified setting OrdersAll
      this.OrdersAll = res.data
    })
    this.getOrdersRegistered()
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    // better formattedDate function
    formattedDate(datetimeDB) {
      const dt = DateTime.fromISO(datetimeDB, {
        zone: 'utc'
      })
      return dt
        .setZone(DateTime.now().zoneName, { keepLocalTime: true })
        .toLocaleString()
    },
    nameWithDate({ name, date }) {
      return `${name} (${this.formattedDate(date)})`
    },
    getOrdersRegistered() {
      axios
        .get(`${apiURL}/order/${this.$route.params.id}`)
        .then((res) => {
          // simplified setting OrdersRegistered
          this.ordersRegistered = res.data
        })
    },
    async updateOrder() {
      // Checks to see if there are any errors in validation
      const isFormCorrect = await this.v$.$validate()
      // If no errors found. isFormCorrect = True then the form is submitted
      if (isFormCorrect) {
        axios
          .put(`${apiURL}/order/${this.id}`, this.order)
          .then(() => {
            alert('Update has been saved.')
            this.$router.back()
          })
      }
    },
    addToOrder() {
      this.ordersSelected.forEach((order) => {
        axios
          .put(`${apiURL}/order/register`, null, {
            params: { order: order.order_id, order: this.id }
          })
          .then(() => { this.getOrdersRegistered(); alert('Order Added') })
          .catch((error) => {
            if (error.response.data) {
              alert(`${Order.name}: ${error.response.data}`)
            }
          })

      })
      // clear Orders selection after attempting to register for Orders
      this.ordersSelected = []
    },
    deregisterOrder() {
      axios
        .get(`${apiURL}/order/${this.id}`)
        .then((res) => {
          res.data.forEach((e) => {
            axios.put(`${apiURL}/order/deregister`, null, {
              params: { order: order._id, order: this.id }
            })
          })
        })
        .finally(
          axios.put(`${apiURL}/order/deregister/${this.id}`).then(() => {
            alert('Order has been deleted.')
            this.$router.push({ name: 'findorder' })
          })
        )
    },
    // unused hard delete method
    deleteOrder() {
      axios.delete(`${apiURL}/order/${this.id}`).then(() => {
        alert('Order has been deleted.')
        this.$router.push({ name: 'findorder' })
      })
    },
    // function to allow click through to Order details
    editOrder(orderID) {
      this.$router.push({ name: 'orderdetails', params: { id: orderID } })
    }
  },
  validations() {
    return {
      order: {
        tracking_number: { required }
      }
    }
  }
}
</script>
<template>
  <main>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
      Update Order
    </h1>
    <div class="px-10 py-20">
      <!-- @submit.prOrder stops the submit Order from reloading the page-->
      <form @submit.prOrder="handleSubmitForm">
        <!-- grid container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <h2 class="text-2xl font-bold">Order Details</h2>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Tracking Number</span>
              <span style="color: #ff0000">*</span>
              <input type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder v-model="order.tracking_number" />
              <span class="text-black" v-if="v$.order.tracking_number.$error">
                <p class="text-red-700" v-for="error of v$.order.tracking_number.$errors" :key="error.$uid">
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Delivery Service</span>
              <input type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder v-model="order.delivery_service" />
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Expected Delivery Date</span>
              <span style="color: #ff0000">*</span>
              <input type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder v-model="order.exp_deliver_date" />
              <span class="text-black" v-if="v$.order.exp_deliver_date.$error">
                <p class="text-red-700" v-for="error of v$.order.exp_deliver_date.$errors" :key="error.$uid">
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>
          <div></div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Driver ID</span>
              <input type="email"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" v-model="Order.email" />
              <span class="text-black" v-if="v$.order.emp_id.$error">
                <p class="text-red-700" v-for="error of v$.order.emp_id.$errors" :key="error.$uid">
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Expected Cost</span>
              <span style="color: #ff0000">*</span>
              <input type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" v-model="order.exp_cost.primary" />
              <span class="text-black" v-if="v$.order.exp_cost.primary.$error">
                <p class="text-red-700" v-for="error of v$.order.exp_cost.primary.$errors" :key="error.$uid">
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Delivery Fees</span>
              <input type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" v-model="order.delivery_fees.alternate" />
            </label>
          </div>
        </div>

        <!-- grid container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <div class="flex justify-between mt-10 mr-20">
            <button @click="updateOrder" type="submit" class="bg-green-700 text-white rounded">
              Update Order
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20">
            <button @click="deregisterOrder" type="submit" class="bg-red-700 text-white rounded">
              Delete Order
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20">
            <button type="reset" class="border border-red-700 bg-white text-red-700 rounded" @click="$router.back()">
              Go back
            </button>
          </div>
        </div>

        <hr class="mt-10 mb-10" />

        <!-- Order Information -->
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <h2 class="text-2xl font-bold">Orders for Order</h2>

          <div class="flex flex-col col-span-2">
            <table class="min-w-full shadow-md rounded">
              <thead class="bg-gray-50 text-xl">
                <tr>
                  <th class="p-4 text-left">Order Name</th>
                  <th class="p-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-300">
                <!-- allow click through to Order details -->
                <tr @click="editOrder(Order._id)" v-for="Order in OrdersRegistered" :key="Order._id">
                  <td class="p-2 text-left">{{ Order.name }}</td>
                  <td class="p-2 text-left">
                    {{ formattedDate(Order.date) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex flex-col">
            <!-- fixed weird selection duplication bug -->
            <VueMultiselect
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="OrdersSelected" :options="OrdersAll" :custom-label="nameWithDate" :multiple="true"
              :close-on-select="true" placeholder="Select Orders to be added" label="date" track-by="name" />
            <div class="flex justify-between">
              <button @click="addToOrder" type="submit" class="mt-5 bg-red-700 text-white rounded">
                Add Order to Selected Orders
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
