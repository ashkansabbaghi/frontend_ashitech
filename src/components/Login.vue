<template>
  <form
    @submit.prevent="loginSubmit"
    class="tab-pane text-center fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <span class="login-txt error" v-if="errors.length">
      <span v-for="(v , i) in errors" :key="i">{{v}}</span>
    </span>
    <!-- <a class="login-txt success" v-if="status===200" >welcome</a> -->
    <input
      v-model="user.username"
      class="input-custom"
      type="text"
      name="username"
      placeholder="userName"
      size="30"
      required
    />
    <input
      v-model="user.password"
      class="input-custom"
      type="password"
      name="password"
      placeholder="password"
      size="100"
      required
    />
    <button class="btn btn-send position-relative">
      <span v-if="!loading">Login</span>
      <!-- loading btn -->
      <div class="loadingio-spinner-ellipsis-e0ra3xed6zw" v-else>
        <div class="ldio-fa1os3dl4u4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </button>
    <a class="login-txt" href="#">forget password ?</a>
  </form>
</template>


<script>
import axios from "axios";
// import { mapState } from "vuex";
let URL_login = "login/";

export default {
  name: "Login",
  data: () => ({
    user: {
      username: "",
      password: "",
    },
    errors: [],
    loading: false,
  }),
  methods: {
    async loginSubmit() {
      this.loading = true;
      this.errors = [];
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");

      axios
        .post(URL_login, {
          username: this.user.username,
          password: this.user.password,
        })
        .then((response) => {
          if (response.data.token) {
            const token = response.data.token;
            const user = response.data.user;

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
  computed: {
    // ...mapState(["loading"]),
  },
};
</script>