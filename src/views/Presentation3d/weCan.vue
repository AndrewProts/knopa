<template>
  <div class="we-can">
    <div class="we-can_header">
      <div class="we-can_header_title">{{config.slider[activeSlide].title}}</div>
      <div class="we-can_header_describe">
        {{config.slider[activeSlide].text}}
      </div>
    </div>

    <div class="we-can_slider">
      <swiper-carousel
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        @slide="slide"
      ></swiper-carousel>
    </div>
  </div>
</template>

<script>
import swiperCarousel from "./swiperCarousel";
export default {
  data() {
    return {
      config: {},
      activeSlide: 0
    };
  },
  components: {
    swiperCarousel
  },
  methods: {
    slide(e) {
      this.activeSlide = e;
    }
  },
  async created() {
    this.config = window.config;
  }
};
</script>

<style lang="scss" scoped>
.we-can {
  margin: 100px 0;
  @media screen and (max-width: 1110px){
    display: none;
  }
  &_header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &_title {
      max-width: 500px;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
    }
    &_describe {
      max-width: 50%;
      font-size: 14px;
      line-height: 160%;
    }
  }
}
</style>
