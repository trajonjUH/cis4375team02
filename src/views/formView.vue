<script>
import FooterComponent from '../components/footerComponent.vue';
import emailjs from 'emailjs-com';

export default {
  name: 'CommissionForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      commtype1: '',
      wip: '',
      showConfirmation: false,
    }
  },
  methods: {
    async sendEmail(e) {
      try {
        await emailjs.sendForm('form_service', 'form_template', e.target,
        'x15gAetF1SfxBhF7x', {
          name: this.name,
          email: this.email,
          message: this.message,
          commtype1: this.commtype1,
          wip: this.wip,
      });

        this.showConfirmation = true;
      } catch(error) {
          console.log({error})
      }
      this.name = '';
      this.email = '';
      this.message = '';
      this.commtype1 = '';
      this.wip = '';
    },
  },
  name: 'FormView',
  components: {
    FooterComponent
  }
}
</script>

<template>
  <div class="contentpage">
    <form @submit.prevent="sendEmail">
      <h2>Commission Options:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar condimentum varius. Curabitur euismod tempor purus eget imperdiet. 
        Integer feugiat magna suscipit eros varius volutpat. Etiam dapibus nisl id erat lobortis convallis. 
        Suspendisse scelerisque ultricies sodales. Aenean at fringilla nunc. Ut eu dictum massa. 
        Nulla vehicula, enim id consequat scelerisque, diam urna aliquet urna, nec efficitur urna mi in tellus.</p>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" required>

      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required>

      <h2>Commission Options:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar condimentum varius. Curabitur euismod tempor purus eget imperdiet. 
        Integer feugiat magna suscipit eros varius volutpat. Etiam dapibus nisl id erat lobortis convallis.</p>
      
  <div class="form-container">
    <div class="form-group">
      <label for="commtype1">Choose a car:</label>
      <select name="commtype1" id="commtype1" class="custom-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <div class="form-group">
      <label for="commtype1">Choose a car:</label>
      <select name="commtype1" id="commtype1" class="custom-select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </div>
      <br>
      <br>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="8" required></textarea>
      <br>


      <h2>WIP</h2>
        <input type="radio" id="yes" name="wip" value="yes">
        <label for="yes" class="radio">yes</label>

        <input type="radio" id="no" name="wip" value="no">
        <label for="no" class="radio">no</label><br>




      <h2>Commission Options:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar condimentum varius. Curabitur euismod tempor purus eget imperdiet. 
        Integer feugiat magna suscipit eros varius volutpat. Etiam dapibus nisl id erat lobortis convallis.</p>
      <br>


      <br>
      <button type="submit">Submit</button>
      <div v-if="showConfirmation" class="confirmation-message">
        <p>Message recieved.</p>
      </div>
    </form>

    </div>

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
    }
  h1, h2, h3 {
      color: #d4d4d4de;
      font-size: 16px;
      font-family: 'Courier New', Courier, monospace;
      margin-top: 25px;
      font-weight: bold;
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
    textarea {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      padding: 10px;
      border: 2px solid #474747;
      background-color: #212121;
      color: #FFFFFF;
      border-radius: 2%;
      color: #FFFFFF;
    }

    input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background-clip: content-box;
    border: 2px solid #474747;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;
    }

    input[type="checkbox"]:checked {
    background-color: #a1a1a1;
    }

    label.checkbox-label {
    font-family: "Courier New", Courier, monospace;
    color: #FFFFFF;
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

    button[type="submit"]:hover {
      background-color: #c1c1c1;
    }

    .custom-select {
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    color: #ffffff;
    background-color: #212121;
    border: 2px solid #474747;
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

    .form-container {
      display: flex;
      height: 50px;
      padding-right: 100px;
    }

    .form-group {
      margin-right: 5px;
    }

</style>