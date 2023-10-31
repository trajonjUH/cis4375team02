<template>
    <div>
      <!-- Bootstrap based Nav bar -->
      <nav class="navbar navbar-expand navbar-dark navbar-custom-color">
        <div class="container d-flex align-items-center">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Drivers">Drivers</router-link>
            </li>
  
            
            <li class="nav-item">
              <router-link class="nav-link" to="/Orders">Orders</router-link>
            </li>
            </ul>
          
          <a class="navbar-brand" href="#">
            <img
              alt="Rhurbo Logo"
              src="./assets/PORTintelligenceZDF.png"
              width="248"
              height="48"
              class="d-inline-block align-text-top"
            />
          </a>

          <!--<ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="./assets/instagram.png" alt="Instagram" width="20" height="20" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="./assets/tik-tok.png" alt="tiktok" width="20" height="20" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="./assets/twitter.png" alt="twitter" width="20" height="20" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="./assets/youtube.png" alt="twitter" width="20" height="20" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trajon2011@gmail.com">
              <img src="./assets/email.png" alt="email" width="20" height="20" />
            </a>
          </li>
        </ul>-->

        </div>
      </nav>
  
      <div class="container mt-4">
        <!-- Router view - our main view below the navigation -->
        <RouterView></RouterView>
      </div>
    </div>
</template>
  

<script>
/*import { RouterLink, RouterView } from 'vue-router'*/
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',

  data() {
    return {
      orgName: ''
    }
  },
  created() {
    // Fetch organization name on component creation
    axios.get(`${apiURL}/org`).then((res) => {
      console.log('', res)
      if (res.data && res.data.name) {
        this.orgName = res.data.name
      }
    }).catch((error) => {
      console.error(error)
    })
  }
}
</script>


<style scoped>
html, body {
  background-color: #076BC1;
  }
body {
  color: #002385;
  font-size: 14px;
      /* Replace #333333 with your desired font color */
}
h1, h2, h3 {
  color: #002385;
  font-size: 17px;
      /* Replace #333333 with your desired font color */
}
a {
  text-decoration: none;
}
.nav-link {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #002385;
  font-weight: bold;
}

.dropdown-toggle {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}

.dropdown-item {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
}
.dropdown-menu {
  background-color: #4092da;
  width: auto !important;
  min-width: 100% !important;
}

.dropdown-menu:hover {
  background-color: #4092da;
}
.navbar {
  height: 70px;
}
.navbar-custom-color {
  background-color: #6aa9e5;
}
.navbar-brand {
  flex: 1; /* Expand to fill available space */
  display: flex;
  justify-content: center;
  margin-right: 250px;
}

</style>
