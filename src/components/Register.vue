<template>
  <form
    @submit.prevent="registerSubmit"
    class="tab-pane fade"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <input
     v-model="user.username"
      class="input-custom"
      type="text"
      name="username"
      placeholder="Username"
      size="30"
      required
    />
    <input
     v-model="user.email"
      class="input-custom"
      type="email"
      name="email"
      placeholder="Email@gmail.com"
      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      size="30"
      required
    />
    <input
     v-model="user.password"
      class="input-custom"
      type="password"
      name="password"
      placeholder="Password"
      pattern=".{8,}"
      size="100"
      required
    />
      <button class="btn btn-send position-relative">
      <span v-show="!loading">register</span>
      <!-- loading btn -->
      <div class="loadingio-spinner-ellipsis-e0ra3xed6zw" v-show="loading">
        <div class="ldio-fa1os3dl4u4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </button>
  </form>
</template>


<script>
import axios from "axios";
let URL_register = "register/";

export default {
  name: "Register",
  data: () => ({
    user: {
      username: "",
      email: "",
      password: "",
    },
    password_confirm: "",
    rememberMe: false,
    loading: false,
    errors: [],
  }),

  methods: {
    async registerSubmit() {
      this.loading = true;
      this.errors = [];
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");

      axios
        .post(URL_register, {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          if (response.data.token) {
            const token = response.data.token;
            const user = response.data.user;
            console.log(response);
            this.$store.commit("setToken", token);
            //save token
            localStorage.setItem("token", response.data.token);
            this.$store.commit("setUser", user);
            // loading
            this.loading = false;
            // change direction
            window.setTimeout(function () {
              location.replace("/dashboard");
            }, 300);
          }
        })
        .catch((error) => {
          // loading
          this.loading = false;
          if (error.response) {
            localStorage.removeItem("token");
            for (const e in error.response.data.non_field_errors) {
              const i = `${error.response.data.non_field_errors[e]}`;
              this.errors.push(i);
            }
          } else if (error.message) {
            console.log(error.message);
          } else {
            console.log(error);
          }
        });
    },
  },
};
</script>