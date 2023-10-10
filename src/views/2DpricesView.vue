<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: 'Prices2D',
  components: {
    FooterComponent
  },
  data() {
    return {
      selectedCity: 'London'
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
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" style="color: white;">commissions</a></li>
      <span class="breadcrumb-arrow" style="color: white;">></span>
      <li class="breadcrumb-item active" aria-current="page"><span style="color: white;">Prices - 2D</span></li>
    </ol>
  </nav>

  <footer>
    <FooterComponent />
  </footer>

</template>



<style>
  html, body {
    background-color: #1b1b1b;
  }
  body {
      color: #d4d4d4de;
      font-size: 14px;
      /* Replace #333333 with your desired font color */
  }
  h1, h2, h3 {
      color: #d4d4d4de;
      font-size: 17px;
      /* Replace #333333 with your desired font color */
  }
  .contentpage_01 {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }
  .contentpage_02 {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }
  .contentpage_03 {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }
  .contentpage_04 {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }
  .price-summary {
    display: grid;
    grid-template-rows: auto; /* Automatically set row height based on content */
    justify-items: center; /* Center both h1 and p horizontally */
    text-align: center; /* To center the text within h1 and p */
  }
  .price-summary h1 {
    grid-row: 1; /* Place h1 in the first row */
    margin-bottom: 10px; /* Add some space between h1 and p */
  }
  .price-summary p {
    width: 700px; /* Set the paragraph width to 700px */
    margin: 0 auto; /* Center the paragraph horizontally */
}
/*CAROUSEL CSS*/
  .carousel-container-01 {
    padding: 10px;
  }
  .carousel-container-02 {
    padding: 10px;
    order: 2;
  }
  .carousel-container-03 {
    padding: 10px;
  }
  .carousel-container-04 {
    padding: 10px;
    order: 2;
  }
  .carousel-inner .carousel-item {
    height: 440px;
    width: 440px;
  }
  .carousel {
  /* Add your custom styles here */
    height: 440px;
    width: 440px;
  }
/* Custom styles for the slide class */
  .slide {
    height: 440px;
    width: 440px;
  }
  /* Custom styles for the mb-6 class */
  .mb-6 {
    height: 440px;
    width: 440px;
  }
  /* Custom styles for the pointer-event class */
  .pointer-event {
    height: 440px;
    width: 440px;
  }


/*NAVIGATION CSS*/
  .navigation-tabs {
    background-color: #ECF4FC;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    order: -1;
    width: 400px;
    height: 40px;
  }
  .navigation-tabs-body {
    background-color: #474747;
    padding: 20px;
    width: 400px;
    height: 400px;
    text-align: center;
    /*border: 2px solid #474747;*/
  }
  .navigation-tab.active {
    background-color: #474747;
  }
  .navigation-tab {
    text-align: center; /* Justify the text within the buttons */
    flex: 1; /* Distribute available space evenly among the buttons */
    background-color: #1B1B1B;
    color: white;
    padding: 10px 10px;
    border: none;
    cursor: pointer;
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
    color: #000000;
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
      background-color: #a5a5a5;
      color: #000000;
  }

</style>