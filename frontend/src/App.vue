<template>
    <div>
      <!-- Bootstrap based Nav bar -->
      <nav class="navbar navbar-expand navbar-dark navbar-custom-color">
        <div class="container d-flex align-items-center">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Orders
              </a>
  
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item">
                  <router-link class="nav-link" to="/addOrders">Add Order</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/editOrders">Edit Order</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Drivers
              </a>
  
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item">
                  <router-link class="nav-link" to="/addDrivers">Add Driver</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/editDrivers">Edit Driver</router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contactView">Contact</router-link>
            </li>
          </ul>
          
          <a class="navbar-brand" href="#">
            <img
              alt="PORTIntelligence Logo"
              src="./assets/PORTintelligenceZDF.png"
              width="248"
              height="48"
              class="d-inline-block align-text-top"
            />
          </a>

        </div>
      </nav>
  
      <div class="container mt-4">
        <!-- Router view - our main view below the navigation -->
        <RouterView></RouterView>
      </div>

      <!--<div id="app">
        <h1>Drivers Information</h1>
        <ul>
          <li v-for="driver in drivers" :key="driver.driver_id">
            {{ driver.fname }} {{ driver.lname }} - Employee ID: {{ driver.emp_id }} - Phone: {{ driver.phone }}
          </li>
        </ul>
        <h1>Orders Information</h1>
        <ul>
          <li v-for="order in orders" :key="order.order_id">
            Tracking Number: {{ order.tracking_number }} - Service: {{ order.delivery_service }} - Expected Delivery Date: {{ order.expected_delivery_date }}
          </li>
        </ul>
      </div>-->
    </div>
</template>
  

<script>
/*import { RouterLink, RouterView } from 'vue-router'*/
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',
  data() {
    return {
      drivers: [],
      orders: [],
    };
  },
  mounted() {
    // Fetch drivers data
    axios.get(`http://localhost:3000/drivers`)
      .then(response => {
        this.drivers = response.data;
      })
      .catch(error => {
        console.error('Error fetching drivers data:', error);
      });

    // Fetch orders data
    axios.get(`http://localhost:3000/orders`)
      .then(response => {
        this.orders = response.data;
      })
      .catch(error => {
        console.error('Error fetching orders data:', error);
      });
  },
};
</script>


<style scoped>
html, body {
  background-color: #076BC1;
  }
body {
  color: #002385;
  font-size: 14px;
      /* Replace #333333 with your desired font color */
}
h1, h2, h3 {
  color: #002385;
  font-size: 17px;
      /* Replace #333333 with your desired font color */
}
a {
  text-decoration: none;
}
.nav-link {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #002385;
  font-weight: bold;
}

.dropdown-toggle {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}

.dropdown-item {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}
.dropdown-menu {
  background-color: #4092da;
  width: auto !important;
  min-width: 100% !important;
}

.dropdown-menu:hover {
  background-color: #4092da;
}
.navbar {
  height: 70px;
}
.navbar-custom-color {
  background-color: #6aa9e5;
}
.navbar-brand {
  flex: 1; /* Expand to fill available space */
  display: flex;
  justify-content: center;
  margin-right: 250px;
}

</style>
