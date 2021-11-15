<template>
  <div class="blog">
    <!-- empty post -->
    <div v-if="!filterBlogs.length">
      <div class="alert alert-danger mt-5" role="alert">
        <h4 class="alert-heading">Sorry!</h4>
        <p>Please try again</p>
        <hr />
        <p class="mb-0">
          You can continue searching in <strong>titles</strong> and
          <strong>contents</strong>
        </p>
      </div>
    </div>
    <!-- end post -->

    <!-- blogs -->
    <div class="structure-post">
      <!-- item post -->
      <div class="post" v-for="blog in filterBlogs" :key="blog.id">
        <div class="header-post">
          <!-- check image profile post-->
          <div v-if="blog.author.image">
            <img
              class="header-profile-post"
              :src="blog.author.image"
              alt="profile"
            />
          </div>
          <div v-else-if="!blog.author.image">
            <img
              class="header-profile-post"
              src="@/assets/files/img/logo-ahitech.svg"
              alt="profile"
            />
          </div>
          <div class="info-header">
            <div class="info-name">
              <h4 class="name" v-text="blog.author.user.username"></h4>
              <span
                class="date"
                :title="blog.publish"
                v-text="blog.publish"
              ></span>
              <div class="specialty" v-for="spec in blog.author.specialty" :key="spec.id">
                <span v-text="spec.title"></span>
              </div>
            </div>

            <!-- <i
              class="fa fa-eye ms-3"
              v-show="blog.visit_post"
              aria-hidden="true"
            ></i> -->
            <div class="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span
                  class="icon-more"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-h"></i>
                </span>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">
                  <i class="fa fa-exclamation"></i> Report this post
                </button>
                <button class="dropdown-item" type="button">
                  copy link to post
                </button>
                <button class="dropdown-item" type="button">save post</button>
              </div>
            </div>
          </div>
        </div>

        <!-- <div v-for="img in images" :key="img.id">
              <img :src="img.image" alt="" style="width: 100px" />
            </div> -->

        <div class="body-post">
          <!-- dec post -->
          <div class="dec-post">
            <p
              class="txt-post limit-txt"
              v-text="blog.caption"
              :class="{ show: isActiveBtnMore }"
            ></p>

            <div
              class="div-more"
              v-if="blog.caption.length > 100"
              @click="isActiveBtnMore = true"
              :class="{ notShow: isActiveBtnMore }"
            >
              <span class="more-limit">...more</span>
            </div>
          </div>
          <!-- end dec post -->
          <!-- slider image post -->
          <div class="container-fluid owl-carousel-post owl-theme">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <!-- item -->
              <slide v-for="img in blog.post_image" v-bind:key="img.id">
                <div class="item item-slider p-0">
                  <img
                    class="img-post"
                    :src="img.image"
                    :alt="img.name"
                    loading="lazy"
                  />
                </div>
              </slide>
              <!-- end item -->
              <template #addons>
                <Pagination />
              </template>
            </carousel>
          </div>
          <!-- end slider image post -->
        </div>
        <!-- <div class="info-post">
          <span
            >Comment <strong class="num" v-text="blog.comment_num"></strong
          ></span>
          <span
            >Favorites<strong class="num" v-text="blog.like_num"></strong
          ></span>
        </div> -->

        <!-- <div class="footer-post">
          <i
            class="fa fa-bookmark-o pointer show"
            aria-hidden="true"
            v-if="blog.save_post"
            @click="blog.save_post = !blog.save_post"
          ></i>
          <i
            class="fa fa-bookmark pointer"
            aria-hidden="true"
            v-else
            @click="blog.save_post = !blog.save_post"
          ></i>

          <div class="ics">
            <i class="fa fa-share pointer" aria-hidden="true"></i>

            <i class="fa fa-comment-o pointer" aria-hidden="true"></i>

            <i
              class="fa fa-heart-o pointer"
              v-if="blog.like_status"
              @click="blog.like_status = !blog.like_status"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-heart pointer"
              v-else
              @click="blog.like_status = !blog.like_status"
              aria-hidden="true"
            ></i>
          </div>
        </div> -->
      </div>
      <!-- end item post -->
    </div>
    <!-- end blogs -->
  </div>




</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "post",
  components: {
    Carousel,
    Slide,
    Pagination,

  },
  props: { textSearch: String, textBlogs: String },
  data: () => ({
    isActiveBtnMore: false,
    // blogs: [
    //   {
    //     fullName: "shaghayegh sabbaghi",
    //     date: "4h",
    //     profile: img,
    //     specialty: "employ sam service",
    //     caption:
    //       "dipiim veniam, quis nostrudveniam, quis nostrudveniam, quis nostrudveniam, exerci tation ",
    //     images: [
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/20e3b503fc77666e0d5cbdb31b5ed22b0ea5664c_m.jpeg",
    //         alt: "pic1",
    //       },
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/4a28bbf95658d6f68146d090626bf235bd219ee1_m.jpeg",
    //         alt: "pic1",
    //       },
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/59fa6cc1f8ebc36a9ef569a2473096af48e0d69f_m.jpg",
    //         alt: "pic1",
    //       },
    //     ],
    //     visit_post: false,
    //     like_status: true,
    //     like_num: 100,
    //     comment_num: 15,
    //     comments: [
    //       {
    //         name: "ashkan",
    //         date: "2h",
    //         content: "hello ashkan , how are you?",
    //         visit_comment: true,
    //         like_status_comment: true,
    //         like_num_comment: 100,
    //       },
    //       {
    //         name: "ashkan",
    //         date: "2h",
    //         content: "hello ashkan , how are you?",
    //         visit_comment: true,
    //         like_status_comment: true,
    //         like_num_comment: 100,
    //       },
    //     ],
    //     save_post: true,
    //     isActiveBtnMore: false,
    //   },
    //   {
    //     fullName: "ashkan sabbaghi",
    //     date: "4h",
    //     profile: img,
    //     specialty: "employ sam service",
    //     caption:
    //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
    //     images: [
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/20e3b503fc77666e0d5cbdb31b5ed22b0ea5664c_m.jpeg",
    //         alt: "pic1",
    //       },
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/4a28bbf95658d6f68146d090626bf235bd219ee1_m.jpeg",
    //         alt: "pic1",
    //       },
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/59fa6cc1f8ebc36a9ef569a2473096af48e0d69f_m.jpg",
    //         alt: "pic1",
    //       },
    //     ],
    //     visit_post: true,
    //     like_status: true,
    //     like_num: 100,
    //     comment_num: 15,
    //     comments: [
    //       {
    //         name: "ashkan",
    //         date: "2h",
    //         content: "hello ashkan , how are you?",
    //         visit_comment: true,
    //         like_status_comment: true,
    //         like_num_comment: 100,
    //       },
    //       {
    //         name: "ashkan",
    //         date: "2h",
    //         content: "hello ashkan , how are you?",
    //         visit_comment: true,
    //         like_status_comment: true,
    //         like_num_comment: 100,
    //       },
    //     ],
    //     save_post: true,
    //     isActiveBtnMore: false,
    //   },
    //   {
    //     fullName: "ali sabbaghi",
    //     date: "4h",
    //     profile: img,
    //     specialty: "employ sam service",
    //     caption:
    //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ",
    //     images: [
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/20e3b503fc77666e0d5cbdb31b5ed22b0ea5664c_m.jpeg",
    //         alt: "pic1",
    //       },
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/4a28bbf95658d6f68146d090626bf235bd219ee1_m.jpeg",
    //         alt: "pic1",
    //       },
    //       {
    //         src:
    //           "https://storage.ws.pho.to/s2/59fa6cc1f8ebc36a9ef569a2473096af48e0d69f_m.jpg",
    //         alt: "pic1",
    //       },
    //     ],
    //     visit_post: true,
    //     like_status: true,
    //     like_num: 100,
    //     comment_num: 15,
    //     comments: [
    //       {
    //         name: "ashkan",
    //         date: "2h",
    //         content: "hello ashkan , how are you?",
    //         visit_comment: true,
    //         like_status_comment: true,
    //         like_num_comment: 100,
    //       },
    //       {
    //         name: "ashkan",
    //         date: "2h",
    //         content: "hello ashkan , how are you?",
    //         visit_comment: true,
    //         like_status_comment: true,
    //         like_num_comment: 100,
    //       },
    //     ],
    //     save_post: true,
    //     isActiveBtnMore: false,
    //   },
    // ],
    settings: {
      //
    },
    breakpoints: {
      0: {
        itemsToShow: 1,
        // snapAlign: 'center'
      },
      700: {
        itemsToShow: 1,
        // snapAlign: "center",
      },
    },
  }),

  computed: {
    filterBlogs: function () {
      return this.textBlogs.filter((blog) => {
        return blog.caption.match(this.textSearch);
        // return blog;
      });
    },
  },
};
</script>
