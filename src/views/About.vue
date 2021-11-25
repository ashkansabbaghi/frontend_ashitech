<template>
  <div class="About" @scroll="hScroll">
    <div
      class="container-fluid animate__animated animate__fadeIn p-0 about-page"
    >
      <!-- about us -->
      <div class="container parent">
        <div class="row">
          <div class="col-lg-6 sub-txt">
            <h1 class="title" v-text="about.title"></h1>
            <p class="content" v-html="about.content"></p>
            <a class="btn btn-cu-dark m" href="#">DEMO</a>
            <a class="btn btn-cu-white" href="tel:09102626830">CONTACT</a>
          </div>
          <div class="col-lg-6 sub-img align-self-center">
            <img
              class="img-fluid img-float img-h img-h-about"
              src="@/assets/files/img/logo-about.svg"
              alt="logo_image_ashiTech"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <!-- end about us -->

      <!-- side ipad -->
      <div class="container slider responsive">
        <div class="row">
          <div class="col-lg-12 p-0">
            <img
              class="img-fluid"
              src="./../assets/files/img/ipad.svg"
              alt="image-about"
              loading="lazy"
            />
            <div class="screen-iphone">
              <img
                class="img-fluid img-screen"
                src="./../assets/files/img/page2.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end side pad -->

      <!-- design -->
      <div
        class="
          container-fluid
          parent-reverse-design
          responsive-reverse
          position-relative
          p-0
        "
      >
        <!-- bg design -->
        <div>
          <img
            class="bg-design"
            src="@/assets/files/img/bg-design.png"
            alt=""
          />
        </div>
        <div class="container">
          <div class="row position-relative">
            <div class="col-lg-6 sub-txt">
              <div class="titles">
                <h2 class="title" v-text="intro_1.title"></h2>
                <span class="dec" v-text="intro_1.dec"></span>
              </div>
              <p class="content" v-text="intro_1.content"></p>
              <!-- <button class="btn btn-cu-dark m">DEMO</button> -->
              <a class="btn btn-cu-white" href="tel:09102626830">CONTACT</a>
            </div>
            <div class="col-lg-6 sub-img">
              <img
                class="img-float img-h"
                src="./../assets/files/img/iphonex.png"
                alt="image-about"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end design -->

      <!-- frontend develop -->
      <div class="container parent frontend-develop responsive">
        <div class="row">
          <div class="col-lg-6 sub-txt">
            <h2 class="title" v-text="frontend.title"></h2>
            <span class="dec" v-text="frontend.dec"></span>
            <p class="content" v-html="frontend.content"></p>
            <!-- <button class="btn btn-cu-dark m">DEMO</button> -->
            <a class="btn btn-cu-white" href="tel:09102626830">CONTACT</a>
          </div>
          <div class="col-lg-6 sub-img">
            <img
              class="rounded img-float img-frontend"
              src="./../assets/files/img/frontend.png"
              alt="image-about"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <!-- end frontend develop -->

      <!-- tanks -->
      <div class="container parent tanks responsive">
        <div class="row">
          <div class="col-lg-12 sub-txt">
            <h2 class="title center" v-text="tanks.title"></h2>
            <p class="content" v-html="tanks.content"></p>
            <router-link to="/blogs"
              ><a class="btn btn-cu-dark m" href="#">Come on</a>
            </router-link>
          </div>
        </div>
      </div>
      <!-- end tanks -->
    </div>
    <!-- slider -->
    <!-- <Carousel /> -->
  </div>
</template>

<script>
// import Carousel from "@/components/Carousel.vue";
export default {
  name: "About",
  data: () => ({
    about: {
      title: "Hello my friend",
      content: `I will introduce myself to you <br> Let's start with the logo`,
      img: "http//",
    },
    intro_1: {
      title: "design",
      dec: "responsive",
      content: "Designed with software Adobe XD and Figma",
      img: "http//",
    },
    frontend: {
      title: "frontend develop",
      dec: "responsive",
      content:
        "On the front site of technology <br> Vue Cli | VueX <br> Bootstrap 5",
      img: "http//",
    },
    tanks: {
      title: "Thank you very much",
      content:
        "I introduced myself to you very briefly <br> Do you want to go and see other content from me?",
    },
  }),
  components: {
    // Carousel,
  },
  methods: {
    hScroll() {
      // this.vScroll = (document.body.scrollTop > 10 );
      console.log("handleScroll");
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>