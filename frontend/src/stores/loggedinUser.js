// Import required modules
import { defineStore } from "pinia";
import axios from "axios";

// Set API URL
const apiURL = import.meta.env.VITE_ROOT_API;

// Define the store to manage the state of the logged-in user
export const useLoggedInUserStore = defineStore({
  id: "loggedInUser",
  // Define initial state
  state: () => ({
    name: "",
    role: "", // Add role attribute
    isLoggedIn: false,
    errorMessage: "",
  }),
  actions: {
    // Define async function to log in a user
    async login(username, password) {
      try {
        // Call loginUser function and get the response
        const response = await loginUser(username, password);

        // Check if user is allowed to log in
        if (response.isAllowed) {
          // Update loggedInUser state with user info and set isLoggedIn to true
          this.$patch({
            isLoggedIn: true,
            name: response.name,
            role: response.role, // Set the user role from the response
          });
        }
        // Redirect to the home page
        this.$router.push("/");
      } catch (error) {
        // Log the error and update the state with the error message
        console.log(error);
        this.$patch({
          errorMessage: error.message, // Set the errorMessage field
        });
      }
    },
    // Define function to log out the user and reset the state
    logout() {
      this.$patch({
        name: "",
        role: "",
        isLoggedIn: false,
      });
    },
  },
});

// Helper function to handle the login API call
async function loginUser(a, b) {
  try {
    // Send a POST request to the login endpoint with the provided username and password
    const response = await axios.post(`${apiURL}/auth/login`, {
      username: a,
      password: b,
    });

    // If the request is successful, return the response data
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      throw new Error("Invalid username or password");
    } else {
      // Handle other errors
      throw new Error("Failed to log in");
    }
  }
}
