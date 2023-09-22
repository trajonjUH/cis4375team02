<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: 'HomeView',
  components: {
    FooterComponent
  },
}
</script>

<template>
  <div class="contentpage">
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
    /* Replace #333333 with your desired font color */
  }
h1, h2, h3 {
    color: #d4d4d4de;
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
.showcase {
  width: 400px;
  height: 400px;
}
</style>