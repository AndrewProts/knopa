<template>
 <swiper class="swiper" :options="swiperOption">
    <swiper-slide 
      v-for="(image, index) in swiperImages"
      v-bind:key="index"
    >
      <img :src="image" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev">&larr;</div>
    <div class="swiper-button-next" slot="button-next">&rarr;</div>
  </swiper>
</template>
<script>

  import { Swiper, SwiperSlide } from "vue-awesome-swiper/dist/vue-awesome-swiper.esm";
  import "swiper/css/swiper.css";

  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
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
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
        },
        swiperImages: [
          "/img/yarek/3.jpg", 
          "/img/yarek/3.jpg", 
          "/img/yarek/3.jpg", 
          "/img/yarek/3.jpg",
          "/img/yarek/3.jpg"
        ]
      }
    }
  }
  
</script> 

<style lang="scss" scoped>
  .swiper {
    width: 100%;
    height: 800px;
    margin-top: 30px;

    &-slide{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 100%;
      margin: 0 auto;
    }

    &-button-prev, &-button-next{
      top: 97%;
      font-size: 2.5rem;
      &::after{
        content: none;
      }
    }
    &-button-prev{
      left: 30%;
    }
    &-button-next{
      right: 30%;
    }
  }
  .swiper-pagination-bullet {
    width: 18px!important;
    height: 4px!important;
    border-radius: 0%!important;
  }   
</style>