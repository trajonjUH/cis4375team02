<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: 'Prices3D',
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
      <li class="breadcrumb-item active" aria-current="page"><span style="color: white;">Prices - 3D</span></li>
    </ol>
  </nav>


<!--SCULPTURE-->
<div class="price-summary">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar condimentum varius. 
    Curabitur euismod tempor purus eget imperdiet. Integer feugiat magna suscipit eros varius volutpat. 
    Etiam dapibus nisl id erat lobortis convallis. 
    Suspendisse scelerisque ultricies sodales. Aenean at fringilla nunc. Ut eu dictum massa. 
    Nulla vehicula, enim id consequat scelerisque, diam urna aliquet urna, nec efficitur urna mi in tellus.</p>
</div>
<br>
<div class="contentpage_05">

    <!--Carousel_01-->  
    <div class="carousel-container-05">
      <div id="myCarousel-05" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/dummy1.jpg" class="d-block w-100" alt="Example Slide">
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>Example headline.</h1>
                      <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                      <!--<p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>-->
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/dummy2.jpg" class="d-block w-100" alt="Example Slide">
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>Some representative placeholder content for the second slide of the carousel.</p>
                      <!--<p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>-->
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/dummy3.jpg" class="d-block w-100" alt="Example Slide">
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>One more for good measure.</h1>
                      <p>Some representative placeholder content for the third slide of this carousel.</p>
                      <!--<p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>-->
                    </div>
                  </div>
                </div>
              </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel-05" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel-05" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
      </div>
    </div>

        <!--Navigation Tabs_01-->
                <div class="navigation-container">
                  <div class="navigation-tabs">
                    <button
                      v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'London' }"
                      @click="selectCity('London')"
                    >
                      London
                    </button>
                    <button
                      v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'Paris' }"
                      @click="selectCity('Paris')"
                    >
                      Paris
                    </button>
                    <button
                      v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'Tokyo' }"
                      @click="selectCity('Tokyo')"
                    >
                      Tokyo
                    </button>
                  </div>
                  
                  <div class="navigation-tabs-body">
                    <div v-show="selectedCity === 'London'">
                      <h2>London</h2>
                      <p>London is the capital of England.</p>
                      <p><a class="btn btn-lg btn-primary my-custom-button" href="#">Learn more</a></p>
                    </div>

                    <div v-show="selectedCity === 'Paris'">
                      <h2>Paris</h2>
                      <p>Paris is the capital of France.</p>
                      <p><a class="btn btn-lg btn-primary my-custom-button" href="#">Learn more</a></p>
                    </div>

                    <div v-show="selectedCity === 'Tokyo'">
                      <h2>Tokyo</h2>
                      <p>Tokyo is the capital of Japan.</p>
                      <p><a class="btn btn-lg btn-primary my-custom-button" href="#">Learn more</a></p>
                    </div>
                  </div>
                </div>
</div>

<br>
<br>

<!--RIGGED-->
<div class="price-summary">
  <h1>Lorem ipsum</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar condimentum varius. 
    Curabitur euismod tempor purus eget imperdiet. Integer feugiat magna suscipit eros varius volutpat. 
    Etiam dapibus nisl id erat lobortis convallis. 
    Suspendisse scelerisque ultricies sodales. Aenean at fringilla nunc. Ut eu dictum massa. 
    Nulla vehicula, enim id consequat scelerisque, diam urna aliquet urna, nec efficitur urna mi in tellus.</p>
</div>
<br>
<div class="contentpage_06">
    <!--Carousel_02-->  
    <div class="carousel-container-06">
      <div id="myCarousel-06" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../assets/dummy1.jpg" class="d-block w-100" alt="Example Slide">
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>Example headline.</h1>
                      <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                      <!--<p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>-->
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/dummy2.jpg" class="d-block w-100" alt="Example Slide">
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>Some representative placeholder content for the second slide of the carousel.</p>
                      <!--<p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>-->
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="../assets/dummy3.jpg" class="d-block w-100" alt="Example Slide">
                  <div class="container">
                    <div class="carousel-caption">
                      <h1>One more for good measure.</h1>
                      <p>Some representative placeholder content for the third slide of this carousel.</p>
                      <!--<p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>-->
                    </div>
                  </div>
                </div>
              </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel-06" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel-06" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
      </div>
    </div>

        <!--Navigation Tabs_02-->
                <div class="navigation-container">
                  <div class="navigation-tabs">
                    <button
                      v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'London' }"
                      @click="selectCity('London')"
                    >
                      London
                    </button>
                    <button
                      v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'Paris' }"
                      @click="selectCity('Paris')"
                    >
                      Paris
                    </button>
                    <button
                      v-bind:class="{ 'navigation-tab': true, 'active': selectedCity === 'Tokyo' }"
                      @click="selectCity('Tokyo')"
                    >
                      Tokyo
                    </button>
                  </div>
                  
                  <div class="navigation-tabs-body">
                    <div v-show="selectedCity === 'London'">
                      <h2>London</h2>
                      <p>London is the capital of England.</p>
                      <p><a class="btn btn-lg btn-primary my-custom-button" href="#">Learn more</a></p>
                    </div>

                    <div v-show="selectedCity === 'Paris'">
                      <h2>Paris</h2>
                      <p>Paris is the capital of France.</p>
                      <p><a class="btn btn-lg btn-primary my-custom-button" href="#">Learn more</a></p>
                    </div>

                    <div v-show="selectedCity === 'Tokyo'">
                      <h2>Tokyo</h2>
                      <p>Tokyo is the capital of Japan.</p>
                      <p><a class="btn btn-lg btn-primary my-custom-button" href="#">Learn more</a></p>
                    </div>
                  </div>
                </div>
</div>


<br>
<br>


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
  .contentpage_05 {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }
  .contentpage_06 {
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
  .carousel-container-05 {
    padding: 10px;
  }
  .carousel-container-06 {
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
    background-color: #1B1B1B;
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