<template>
  <form
    @submit.prevent="loginSubmit"
    class="tab-pane text-center fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
  <a class="login-txt error" v-if="status===400" >not found User</a>
  <a class="login-txt success" v-if="status===200" >welcome</a>
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
    <button class="btn btn-send">Login</button>
    <a class="login-txt" href="#">forget password ?</a>

  </form>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "Login",
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  methods: {
    async loginSubmit() {
      this.$store.dispatch("loginUser", this.user);
    },
  },
  computed :{
    ...mapState(["status",]),
  }
};
</script>