<template>
  <swiper
    v-if="swiperImages"
    class="swiper"
    :options="swiperOption"
    ref="slider"
    @slide-change="handleSwiperReadied"
  >
    <swiper-slide v-for="(image, index) in swiperImages" v-bind:key="index">
      <img :src="image.image" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev">&larr;</div>
    <div class="swiper-button-next" slot="button-next">&rarr;</div>
  </swiper>
</template>
<script>
import {
  Swiper,
  SwiperSlide
} from "vue-awesome-swiper/dist/vue-awesome-swiper.esm";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-loop",
  title: "Loop mode / Infinite loop",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        config: {},
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        }
      },
      swiperImages: null
    };
  },
  methods: {
    handleSwiperReadied() {
      this.$emit('slide', this.$refs.slider.swiperInstance.realIndex);
    }
  },
  async created() {
    this.config = window.config;
    this.swiperImages =this.config.slider;
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 800px;
  margin-top: 30px;
  @media screen and (max-width: 1110px){
    display: none;
  }

  &-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    margin: 0 auto;
  }

  &-button-prev,
  &-button-next {
    top: 97%;
    font-size: 2.5rem;
    &::after {
      content: none;
    }
  }
  &-button-prev {
    left: 30%;
  }
  &-button-next {
    right: 30%;
  }
}
.swiper-pagination-bullet {
  width: 18px !important;
  height: 4px !important;
  border-radius: 0% !important;
}
</style>
