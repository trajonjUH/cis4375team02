<script>
import FooterComponent from '../components/footerComponent.vue';
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showConfirmation: false,
    }
  },
  methods: {
    async sendEmail(e) {
      try {
        await emailjs.sendForm('contact_service', 'contact_template', e.target,
        'x15gAetF1SfxBhF7x', {
          name: this.name,
          email: this.email,
          message: this.message
        })

        this.showConfirmation = true;
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
  name: 'ContactView',
  components: {
    FooterComponent
  }
}
</script>

<template>
  <div class="contentpage">
    <form @submit.prevent="sendEmail">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>
  
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="8" required></textarea>
  
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
  .dblist {
      display: flex;
      min-height: 50vh;
      flex: 1;
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
    input[type="tel"],
    input[type="number"],
    input[type="date"],
    textarea {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      padding: 10px;
      border: 2px solid #6aa9e5;
      background-color: #c0d9f0;
      color: #002385;
      border-radius: 2%;
      color: #002385;
      margin-bottom: 10px;
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
    color: #ffffff;
    background-color: #6aa9e5;
    border: 2px solid #c0d9f0;
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