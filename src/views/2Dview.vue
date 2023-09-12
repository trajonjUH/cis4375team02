<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: '2DView',
  components: {
    FooterComponent
  }
}
</script>

<template>

  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" style="color: white;">Portfolio</a></li>
      <span class="breadcrumb-arrow" style="color: white;">></span>
      <li class="breadcrumb-item active" aria-current="page"><span style="color: white;">2D</span></li>
    </ol>
  </nav>

    <div class="contentpage">
      <div class="contentpage">
      <img src="../assets/dummy4.jpg" class="showcase" alt="showcase1">
      <img src="../assets/dummy5.jpg" class="showcase" alt="showcase1">
      <img src="../assets/dummy6.jpg" class="showcase" alt="showcase1">
      </div>
    </div>

    <footer>
      <footer>
        <FooterComponent />
      </footer>
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