<template>
  <!-- https://www.npmjs.com/package/vue3-carousel -->
  <!-- slider -->
  <div class="Carousel">
    <div class="container-fluid slider-card slider-product">
      <div class="row">
        <div class="col-lg-12 sub-txt p-0">
          <div class="owl-carousel owl-theme">
            <carousel
              :settings="settings"
              :breakpoints="breakpoints"
              :transition="transition"
            >
              <slide v-for="info in infos" :key="info">
               <!-- item -->
          <div class="item item-slider p-0 w-100">
            <img src="" alt="">
            <h4 class="card-title m-0" v-text="info.title"></h4>
            <img class="ic-player" src="@/assets/files/img/ic-player.svg" alt="">

          </div>
          <!-- end item -->
              </slide>
              <!-- <template #addons>
        <navigation />
        <pagination />
      </template> -->
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end slider -->
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide,
    // Pagination,
    // Navigation
  },
  data: function () {
    return {
      settings: {
        // transition: 100
      },
      breakpoints: {
        1200: {
          itemsToShow: 3.2,
          snapAlign: 'center'
        },
        1000: {
          itemsToShow: 2.2,
          snapAlign: 'center'
        },
        700: {
          itemsToShow: 2.2,
          snapAlign: 'center'
        },
        500: {
          itemsToShow: 2.2,
          snapAlign: 'center'
        },
        0: {
          itemsToShow: 1.2,
          snapAlign: 'center'
        }
      },
      transition: {
        transition: 100
      },
      infos: [
        {
          title: 'Web Designer'
        },
        {
          title: 'Vue Cli / VueX'
        },
        {
          title: 'FrontEnd'
        },
        {
          title: 'BackEnd'
        }
      ]
    }
  }
}
</script>
