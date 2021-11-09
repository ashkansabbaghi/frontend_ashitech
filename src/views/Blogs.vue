<template>
  <div class="blogs-page">
    <!-- slider category -->
    <div v-if="categories.length > 0">

    </div>
    <!-- end slider category -->
    <div class="container animate__animated animate__fadeIn blogs">
      <!-- search -->
      <div class="form-group position-relative">
        <input
          list="search"
          type="text"
          class="form-control input-custom"
          name="search"
          v-model="search"
          placeholder="searching ..."
        />
        <datalist id="search">
          <option
            v-for="blog in blogs"
            :key="blog.id"
            :value="blog.title"
          ></option>
        </datalist>
        <i class="fa fa-search icon-search" aria-hidden="true"></i>
      </div>
      <!-- end search -->

      <ItemBlogs :text-search="search" :text-blogs="public_blogs" />
    </div>
  </div>
</template>

<script>
// let BASE_URL = "http://127.0.0.1:8000/api/v1";

// let API_POSTS = "/blogs/";
// let API_CAT = "/categoryPost/";

import { mapState } from "vuex";
import ItemBlogs from "@/components/ItemBlogs";
export default {
  name: "Blogs",
  data: () => ({
    search: "",
    blogs: [],
    categories: [],
    postCategory: [],
  }),
  components: {

    ItemBlogs,
  },
  async created() {
    this.$store.dispatch("getListPublicBlogs");
  },

  computed: {
     ...mapState({ public_blogs: "Public_Blogs" }),
  },

  methods: {
  },
};
</script>
