<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" class="btn-login">Login</button>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async loginUser() {
  try {
    const response = await  this.$http.post(
      "/account/api/login/", // Proxy path
      {
        username: this.username,
        password: this.password,
      }
    );
    console.log("Login successful:", response.data);

    // Store the access token
    localStorage.setItem("access_token", response.data.access);

    // Redirect to the main page
    this.$router.push("/mainpage");
  } catch (error) {
    console.error("Error during login:", error);
    this.errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : "Login failed. Please try again.";
  }
}
  },
};
</script>

<style scoped>
.login-page {
  background-image: url('/assets/img/bg.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Make it fill the viewport */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-container {
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
