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
    background-color: #1b1b1b;
  }
  
  body {
      color: #d4d4d4de;
      font-size: 14px;
    }
  h1, h2, h3 {
      color: #d4d4d4de;
      font-size: 17px;
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
      margin-top: 10px;
    }
  
  label {
      font-family: 'Courier New', Courier, monospace;
      font-size: 16px;
  }

  form {
      width: 500px;
      padding-bottom: 50px;
      padding-top: 25px;
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

</style>