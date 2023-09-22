<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: 'TOSView',
  components: {
    FooterComponent
  }
}
</script>

<template>
<div>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" style="color: white;">commissions</a></li>
      <span class="breadcrumb-arrow" style="color: white;">></span>
      <li class="breadcrumb-item active" aria-current="page"><span style="color: white;">T.O.S</span></li>
    </ol>
  </nav>

        <div class="TOS">
          <h1>Terms of Service</h1>
          <div class="columns">

            <div class="column-left">
              <p>

              </p>
            </div>
            <div class="column-right">
              <p>
          
              </p>
            
            </div>
          
            <div class="column-left">
              <p>

              </p>
            </div>
            <div class="column-right">
              <p>

              </p>
            
            </div>

            <div class="column-left">
              <p>

              </p>
            </div>
            <div class="column-right">
              <p>

              </p>
            
            </div>


          </div>
        </div>
        <br>
        <br>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>
  
<style>
  html, body {
    background-color: #ECF4FC;
  }
  body {
      color: #00000000;
      font-size: 14px;
      /* Replace #333333 with your desired font color */
  }
  h1, h2, h3 {
      color: #076BC1;
      font-size: 17px;
      /* Replace #333333 with your desired font color */
  }
  .contentpage {
      font-size: 13px;
      font-family: "Courier New", Courier, monospace;
      min-height: 500px;
      display: flex;
      align-items: center;
  }
  .TOS {
    display: grid;
    grid-template-rows: auto; /* Automatically set row height based on content */
    justify-items: center; /* Center both h1 and p horizontally */
    text-align: center; /* To center the text within h1 and p */
  }
  .TOS h1 {
    grid-row: 1; /* Place h1 in the first row */
    margin-bottom: 10px; /* Add some space between h1 and p */
  }
  .TOS p {
    width: 700px; /* Set the paragraph width to 700px */
    margin: 0 auto; /* Center the paragraph horizontally */
  }
  /*.custom-jumbotron {
      height: 400px; 
      background-color: #474747; 
      color: #ffffff; 
      display: flex;
      flex-direction: column; 
      justify-content: center; 
      align-items: center; 
      margin: 0 auto; 
      border-radius: 2%;
      max-width: 700px;
      
  }
  .custom-jumbotron h1 {
    color: #333; 
  }
  .custom-jumbotron .lead {
    font-size: 18px; 
    color: #FFF; 
  }
  .custom-jumbotron .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  .custom-jumbotron .btn-primary:hover {
    background-color: #0056b3; 
    border-color: #0056b3; 
  }*/
  .columns {
    display: grid;
    grid-template-columns: 1fr 2fr; /* The left column is 1/3 and the right column is 2/3 of the total width */
    grid-gap: 20px; /* Gap between the columns */
    justify-items: center; /* Center the content horizontally in each column */
    width: 1000px; /* Set the total width of the columns container */
  }
  .column-left p {
    text-align: left; /* Align the text to the left in the left column */
    width: 300px;
    padding: 20px;
  }
  .column-right p {
    text-align: left; /* Align the text to the left in the right column */
    padding: 20px;
  }
</style>