<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: 'HomeView',
  components: {
    FooterComponent
  },
  data() {
    return {
      selectedCity: 'Drivers',
    };
  },
  methods: {
    selectCity(cityName) {
      this.selectedCity = cityName;
    }
  }
};

</script>

<template>
  <div class="icon-container">
    <router-link to="/addDrivers">
      <img src="src/assets/drivericon.png" alt="Driver Icon" class="home-icons">
    </router-link>
    <router-link to="/addOrders">
    <a href="src/views/Orders.vue"></a>  
      <img src="src/assets/ordersicon.png" alt="Orders Icon" class="home-icons">
    </router-link>
  </div>

  
  <div class="contentpage_05">
    <div class="home-instructions">
      <h2>How to get started:</h2>

<!--Navigation Tabs_01-->
        <div class="navigation-container">
          <div class="navigation-tabs">
            <button
              v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'Drivers' }"
              @click="selectCity('Drivers')"
            >
              Drivers
            </button>

            <button
              v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'Orders' }"
              @click="selectCity('Orders')"
            >
              Orders
            </button>
          </div>
          
          <div class="navigation-tabs-body">
            <div v-show="selectedCity === 'Drivers'">
              <p>Use the "Add Driver" form to enter a new driver into the database. In the "Edit Driver" page, selecting a driver from the database view will fill the form with that record. You may edit or delete that record once selected.</p>
              <p><a class="btn btn-lg btn-primary my-custom-button" href="/addDrivers">Begin</a></p>
            </div>

            <div v-show="selectedCity === 'Orders'">
              <p>Use the "Add Order" form to enter a new order into the database. In the "Edit Order" page, selecting an order from the database view will fill the form with that record. You may edit or delete that record once selected.</p>
              <p><a class="btn btn-lg btn-primary my-custom-button" href="/addOrders">Begin</a></p>
            </div>

          </div>
        </div>
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
    /* Replace #333333 with your desired font color */
  }
h1, h2, h3 {
    color: #002385;
    font-size: 17px;
    /* Replace #333333 with your desired font color */
  }
.contentpage_05 {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
}
.showcase {
  width: 400px;
  height: 400px;
}
.icon-container{
  display: flex;
  justify-content: center; /* Horizontally center items */
  align-items: center; /* Vertically center items */
  height: 35vh; /* Make the container take the full viewport height */
}
.home-icons {
  width: 250px;
  height: 250px;
  
}
.home-instructions{
  max-width: 600px; /* Adjust the max width as needed */
  margin: 0 auto; /* Center horizontally */
  padding: 20px;
}

/*NAVIGATION CSS*/
  .navigation-tabs {
    background-color: #1B1B1B;
    color: #002385;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    order: -1;
    width: 600px;
    height: 40px;
  }
  .navigation-tabs-body {
    background-color: #c0d9f0;
    padding: 20px;
    width: 600px;
    height: 200px;
    text-align: center;
    /*border: 2px solid #474747;*/
  }
  .navigation-tab {
    text-align: center; /* Justify the text within the buttons */
    flex: 1; /* Distribute available space evenly among the buttons */
    background-color: #ECF4FC;
    color: #002385;
    padding: 10px 10px;
    border: none;
    cursor: pointer;
  }
  .navigation-tab.active {
    background-color: #c0d9f0;
  }
  .navigation-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    flex: 0 1 50vh;

  }
  .my-custom-button {
    background-color: #e4e4e4;
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
  .my-custom-button:hover {
      background-color: #c0d9f0;
      color: #002385;
  }

</style>