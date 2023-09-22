<script>
export default {
  name: 'FooterComponent', // Change the name of the component
};
</script>

<template>
  <footer>

    <div class="credit-goes-to">
      <p>This website was made by <a href="https://www.linkedin.com/in/trajon/">Christian Johnson</a></p>
    </div>

    <div class="social-icons">
      <a href="/">
        <img src="src/assets/instagram.png" alt="Instagram" width="20" height="20"/>
      </a>
      <a href="/">
        <img src="src/assets/tik-tok.png" alt="tiktok" width="20" height="20"/>
      </a>
      <a href="/">
        <img src="src/assets/twitter.png" alt="twitter" width="20" height="20"/>
      </a>
      <a href="/">
        <img src="src/assets/youtube.png" alt="youtube" width="20" height="20"/>
      </a>
      <a href="trajon2011@gmail.com">
        <img src="src/assets/email.png" alt="email" width="20" height="20"/>
      </a>
    </div>
  </footer>
</template>


<style>
.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a {
  display: inline-block;
  margin: 0 10px;
  color: #076BC1; /* Set the desired color */
}

.social-icons img {
  width: 20px; /* Adjust the size of the icons as needed */
  height: 20px;
}

.credit-goes-to {
  text-align: center;
}

a {
    color: #076BC1; /* Replace with your desired color */
  }
</style>
