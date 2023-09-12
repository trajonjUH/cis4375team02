<script>
import FooterComponent from '../components/footerComponent.vue';

export default {
  name: 'AboutView',
  components: {
    FooterComponent
  }
}
</script>

<template>
<div class="contentpage">
  <div class="profile">
    <img class="portrait-photo" src="src/assets/portrait.jpg" alt="Avatar"/>
    <div class="profile-details">
      <h4 class="name-title">im trajon</h4>
      <p class="profile-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non augue tortor. 
        Morbi quis sapien vel ex fringilla varius sed ut dui. 
        Nam dignissim odio eu fermentum tempus. Sed mollis sollicitudin risus vitae ornare. Nulla vel posuere nisl. 
        Duis felis nisl, efficitur ultrices orci et, ornare ultrices erat. Cras rutrum augue a velit viverra sodales. </p>
    </div>
  </div>
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

.profile {
  display: flex;
  align-items: center;
}

.portrait-photo {
  width: 250px;
  border-radius: 3%;
  margin-right: 20px;
  margin-left: 350px;
}

.profile-details {
  display: flex;
  flex-direction: column;
}

.name-title {
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
}

.profile-desc {
  font-size: 12px;
  color: #ffffff;
  font-family: "Courier New", Courier, monospace;
  margin-right: 300px;
  margin-left: 30px;
  margin-bottom: 100px;
}

/*.card {
  width: 200px;
  outline: none;
}


.card-text {
  margin-bottom: 10px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #141414;
}

.card-container h4 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
}

.card-container p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
  color: #d4d4d4de;
  align-items: center;
}*/

</style>
