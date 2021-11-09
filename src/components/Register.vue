<template>
  <form
    autocomplete="off"
    class="tab-pane fade"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <input
      class="input-custom"
      type="text"
      name="username"
      placeholder="Username"
      size="30"
      required
    />
    <input
      class="input-custom"
      type="email"
      name="email"
      placeholder="Email@gmail.com"
      pattern=".+@globex.com"
      size="30"
      required
    />
    <input
      class="input-custom"
      type="password"
      name="password"
      placeholder="Password"
      pattern=""
      size="100"
      required
    />
    <button class="btn btn-send">Register</button>
  </form>
</template>


<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirm: "",
      rememberMe: false,
      res: "",
    };
  },

  methods: {},
};
</script>