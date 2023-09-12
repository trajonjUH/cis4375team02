<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: '3DView',
  components: {
    FooterComponent
  },
  props: {
    videoPath: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" style="color: white;">Portfolio</a></li>
      <span class="breadcrumb-arrow" style="color: white;">></span>
      <li class="breadcrumb-item active" aria-current="page"><span style="color: white;">3D</span></li>
    </ol>
  </nav>

  <div class="contentpage">

  </div>

    <footer>
      <FooterComponent />
    </footer>
  </div>
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
</style>