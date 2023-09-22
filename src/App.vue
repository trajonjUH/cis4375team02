<template>
    <div>
      <!-- Bootstrap based Nav bar -->
      <nav class="navbar navbar-expand navbar-dark navbar-custom-color">
        <div class="container d-flex align-items-center">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">about</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">contact</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
  
                portfolio
  
              </a>
  
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item">
                  <router-link class="nav-link" to="/2D">2D</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/3D">3D</router-link>
                </li>
              </ul>
            </li>
  
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
  
                commissions
  
              </a>
  
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item">
                  <router-link class="nav-link" to="/2Dprices">prices - 2D</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/3Dprices">prices - 3D</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/T.O.S">T.O.S</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/form">form</router-link>
                </li>
              </ul>
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

          <ul class="navbar-nav ml-auto">
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
        </ul>

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
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  setup() {
    const user = useLoggedInUserStore();
    return { user };
  },
};
</script>


<style scoped>
html, body {
  background-color: #076BC1;
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
a {
  text-decoration: none;
}
.nav-link {
  font-size: 13px;
  font-family: 'Source Sans Pro', sans-serif;
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
  background-color: #076BC1;
  width: auto !important;
  min-width: 100% !important;
}

.dropdown-menu:hover {
  background-color: #076BC1;
}
.navbar {
  height: 70px;
}
.navbar-custom-color {
  background-color: #076BC1;
}
.navbar-brand {
  flex: 1; /* Expand to fill available space */
  display: flex;
  justify-content: center; /* Align the logo to the left */
  align-items: center; /* Center the content vertically */
  margin-right: 150px;
}

</style>
