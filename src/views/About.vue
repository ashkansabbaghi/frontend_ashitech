<template>
  <div class="About" @scroll="hScroll">
    <div class="container animate__animated animate__fadeIn">
      <!-- about us -->
      <!-- ashkan -->
      <div class="container-fluid parent ">
        <div class="row">
          <div class="col-lg-6 sub-txt">
            <h1 class="title" v-text="about.title"></h1>
            <p class="content" v-text="about.content"></p>
            <button class="btn btn-cu-dark m">DEMO</button>
            <button class="btn btn-cu-white">CONTACT</button>
          </div>
          <div class="col-lg-6 sub-img align-self-center">
            <img
              class="img-fluid img-float img-h w-100"
              src="@/assets/files/img/logo-about.svg"
              alt="image-about"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <!-- end about us -->
      <!-- side iPhone -->
      <div class="container-fluid slider responsive">
        <div class="row">
          <div class="col-lg-12 p-0">
            <img
              class="img-fluid"
              src="./../assets/files/img/iphon.png"
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
      <!-- end side iPhone -->

      <!-- introduction reverse 1 -->
      <div class="container-fluid parent-reverse responsive-reverse">
        <div class="row">
          <div class="col-lg-6 sub-txt">
            <div class="titles">
              <h2 class="title" v-text="intro_1.title"></h2>
              <span class="dec" v-text="intro_1.dec"></span>
            </div>
            <p class="content" v-text="intro_1.content"></p>
            <!-- <button class="btn btn-cu-dark m">DEMO</button> -->
            <button class="btn btn-cu-white m">CONTACT</button>
          </div>
          <div class="col-lg-6 sub-img">
            <img
              class="img-float img-h"
              src="./../assets/files/img/phone3D.png"
              alt="image-about"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <!-- end introduction reverse 1 -->

      <!-- introduction 2 -->
      <div class="container-fluid parent responsive">
        <div class="row">
          <div class="col-lg-6 sub-txt">
            <h2 class="title" v-text="intro_2.title"></h2>
            <span class="dec" v-text="intro_2.dec"></span>
            <p class="content" v-text="intro_2.content"></p>
            <!-- <button class="btn btn-cu-dark m">DEMO</button> -->
            <button class="btn btn-cu-white m">CONTACT</button>
          </div>
          <div class="col-lg-6 sub-img">
            <img
              class="rounded img-float img-h"
              src="./../assets/files/img/head.png"
              alt="image-about"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <!-- end introduction 2 -->
    </div>
    <!-- slider -->
    <Carousel />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  name: "About",
  data() {
    return {
      about: {
        title: "about us",
        content:
          "02: 30 AM UTC More than 95% of the environment has been built and the final performance optimization and security testing are carried out continuously to repair the inconsistency problems found in data verification. We will announce the relatively accurate external recovery steps of the platform in 12 hours",
        img: "http//",
      },
      intro_1: {
        title: "web design",
        dec: "responsive",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: "http//",
      },
      intro_2: {
        title: "3D designer",
        dec: "create object from game",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: "http//",
      },
    };
  },
  components: {
    Carousel,
  },
  methods: {
    hScroll() {
      // this.vScroll = (document.body.scrollTop > 10 );
      console.log('handleScroll');
    },

  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>