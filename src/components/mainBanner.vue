<template>
  <div class="mainBanner">
    <div class="container">
      <icon-star class="star star1"></icon-star>
      <icon-star class="star star2"></icon-star>
      <icon-star class="star star3"></icon-star>
      <icon-star class="star star4"></icon-star>
      <div class="title animText">
        ANIMATIONS THAT MAKE
        <span class="animTextPhrases">
          <span class="animTextItem" :class="{ open: activePhrase === 1 }"
            >PROFITS</span
          >
          <span class="animTextItem" :class="{ open: activePhrase === 2 }"
            >money</span
          >
          <span class="animTextItem" :class="{ open: activePhrase === 3 }"
            >happiness</span
          >
          <span class="animTextItem" :class="{ open: activePhrase === 4 }"
            >metrics</span
          >
        </span>
      </div>
      <div class="text">
        <div>
          {{ $t("weStudio") }} <span class="name">{{ $t("siteName") }}</span>
        </div>
        {{ $t("createVideoCreative") }}
        <div class="fast">
          <icon-curve></icon-curve>
          {{ $t("fast") }}
        </div>
      </div>
      <a
        :href="config['3dPresentations'].priceBrief"
        target="_blank"
        class="button"
        >{{ $t("orderVideo") }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data(config = {}) {
    return {
      config: config,
      activePhrase: 1
    };
  },
  async created() {
    this.config = window.config;
    setInterval(() => {
      this.activePhrase++;
      if (this.activePhrase > 4) {
        this.activePhrase = 1;
      }
    }, 2000);
  }
};
</script>

<style lang="scss">
.mainBanner {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  color: $gray;
  @media screen and (max-width: 1110px){
    height: auto;
    padding: 40px 0 120px 0;
  }
  .animText {
    .animTextPhrases {
      position: relative;
      margin-left: 6px;
    }
    .animTextItem {
      position: absolute;
      opacity: 1;
      overflow: hidden;
      transition: 0.3s;
      max-width: 0px;
      &.open {
        max-width: 120px;
        transition-delay: 0.3s;
      }
    }
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
  }

  .star {
    position: absolute;
    animation-name: star;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    @keyframes star {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(20deg);
      }
      100% {
        transform: translateY(0) rotate(0deg);
      }
    }

    &1 {
      left: -72px;
      width: 30px;
      top: 120%;
    }

    &2 {
      left: -30px;
      width: 20px;
      top: -43px;
      animation-delay: -1s;
    }

    &3 {
      right: 130px;
      width: 28px;
      top: -84px;
      animation-delay: -2s;
      @media screen and (max-width: 1110px){
        top: 50px;
        right: 60px;
      }
    }

    &4 {
      right: 30px;
      width: 20px;
      top: 100%;
      animation-delay: -3s;
    }
  }

  .title {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.115em;
    text-transform: uppercase;
  }

  .fast {
    position: relative;
    display: inline;

    svg {
      position: absolute;
      left: 50%;
      top: calc(100% + 15px);
      transform: translate(-50%, 0);
      @media screen and (max-width: 1110px){
        display: none;
      }
    }
  }

  .text {
    font-weight: bold;
    font-size: 55px;
    line-height: 67px;
    margin-bottom: 43px;
    margin-top: 18px;
    @media screen and (max-width: 1110px){
      font-size: 46px;
      line-height: 50px;
    }

    .name {
      color: $blue;
    }
  }
}
</style>
