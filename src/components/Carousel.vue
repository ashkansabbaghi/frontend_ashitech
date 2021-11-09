<template>
  <!-- https://www.npmjs.com/package/vue3-carousel -->
  <!-- slider -->
  <div class="Carousel">
    <div class="container-fluid slider-card responsive">
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
                <div class="item item-slider p-0">
                  <div class="card text-center h-100">
                    <img
                      class="card-img-top image-user-circle"
                      :src="info.img"
                      alt=""
                      loading="lazy"
                    />
                    <div class="card-body">
                      <h4 class="card-title" v-text="info.title"></h4>
                      <p class="card-text" v-text="info.caption"></p>
                    </div>
                  </div>
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
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide
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
          itemsToShow: 3.5,
          snapAlign: 'center'
        },
        1000: {
          itemsToShow: 2.5,
          snapAlign: 'center'
        },
        700: {
          itemsToShow: 2.5,
          snapAlign: 'center'
        },
        500: {
          itemsToShow: 2.5,
          snapAlign: 'center'
        },
        0: {
          itemsToShow: 1.5,
          snapAlign: 'center'
        }
      },
      transition: {
        transition: 100
      },
      infos: [
        {
          img: 'https://www.w3schools.com/w3images/avatar5.png',
          title: 'ashkan sabbaghi',
          caption: 'development vue and frontend website and develop design UI / UX '
        },
        {
          img: 'https://www.w3schools.com/howto/img_avatar.png',
          title: 'shaghayegh sabbaghi',
          caption:
            'hello world baby , who are you ? I love you ,hello world baby , who are you ? I love you '

        },
        {
          img: 'https://www.w3schools.com/w3images/avatar2.png',
          title: 'fati joon',
          caption:
            'hello world baby , who are you ? hello world baby , who are you ? I love you ,hello world baby , who are you ? I love you '

        },
        {
          img: 'https://www.w3schools.com/howto/img_avatar2.png',
          title: 'ali sabbaghi',
          caption: 'hello world baby ,hello world baby ,hello world baby , who are you ? I love you ',
          image: ['https://storage.ws.pho.to/s2/20e3b503fc77666e0d5cbdb31b5ed22b0ea5664c_m.jpeg',
            'https://storage.ws.pho.to/s2/4a28bbf95658d6f68146d090626bf235bd219ee1_m.jpeg',
            'https://storage.ws.pho.to/s2/59fa6cc1f8ebc36a9ef569a2473096af48e0d69f_m.jpg'
          ]
        }
      ]
    }
  }
}
</script>
