<template>
  <div class="404" @scroll="hScroll">
    <div class="container not-found">
      <img class="img-not-found" src="./../assets/files/img/404.svg" alt="" />
      <div class="row justify-content-center mt-5">
        <router-link to="/" class="col-2 item">
          About
        </router-link>
        <router-link to="/blogs" class="col-2 item">
          Blogs
        </router-link>
        <router-link to="/product" class="col-2 item">
         Things you need
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data: () => ({}),
  components: {},
  methods: {},
};
</script>