<template>
  <div class="blogs-page">
    <!-- slider category -->
    <div v-if="categories.length > 0"></div>
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

      <!-- loading -->
      <span v-if="loading" class="loading_blog"
        ><div class="loadingio-spinner-ellipsis-e0ra3xed6zw">
          <div class="ldio-fa1os3dl4u4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div></div
      ></span>

      <ItemBlogs v-else :text-search="search" :text-blogs="public_blogs" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItemBlogs from "@/components/ItemBlogs";
export default {
  name: "Blogs",
  data: () => ({
    search: "",
    blogs: [],
    categories: [],
    postCategory: [],
    // loading: false,
  }),
  components: {
    ItemBlogs,
  },
  async created() {
    // this.loading = true;
    this.$store.dispatch("getListPublicBlogs");
    // this.loading = false;
  },

  computed: {
    ...mapState({ public_blogs: "Public_Blogs", loading: "loading_get_posts" }),
  },

  methods: {},
};
</script>
