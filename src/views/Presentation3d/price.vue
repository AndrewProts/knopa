<template>
  <div class="price">
    <div class="title">
      {{ $t("howMuchCost") }}
    </div>
    <div class="box">
      <div class="left">
        <span>{{ $t("3D presentations") }}</span>
        <icon-curve></icon-curve>
      </div>
      <div class="mid">
        <div class="text">
          {{
            $t(
              "Animation makes the audience more inclined to buy. They already like you"
            )
          }}
        </div>
        <div class="cost1">
          {{ $t("Price from") }}
          <span>{{ config["3dPresentations"].priceFrom }}</span>
        </div>
      </div>
      <div class="right">
        <div
          class="button outline"
          @click="$refs.video.open(config['3dPresentations'].priceExampleVideo)"
        >
          {{ $t("viewExample") }}
        </div>
        <a :href="config['3dPresentations'].priceBrief" target="_blank">
          <div class="button">{{ $t("orderVideo") }}</div>
        </a>
      </div>
    </div>
    <video-modal ref="video"></video-modal>
  </div>
</template>

<script>
import videoModal from "@/components/videoModal";

export default {
  components: {
    videoModal
  },
  data() {
    return {
      config: {}
    };
  },
  async created() {
    this.config = window.config;
  }
};
</script>

<style lang="scss" scoped>
.price {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 160px;
  .box {
    width: 100%;
    border: 1px solid rgba(58, 0, 222, 0.15);
    box-sizing: border-box;
    border-radius: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 40px 80px;
    .mid {
      padding: 0 40px;
      max-width: 360px;
      .text {
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
      }
      .cost1 {
        font-weight: 500;
        font-size: 14px;
        line-height: 235%;
        color: $blue;
        display: flex;
        align-items: center;
        margin-top: 10px;
        span {
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          color: #000000;
          margin-left: 10px;
        }
      }
    }
    .right {
      .outline {
        margin-bottom: 20px;
      }
    }
    .left {
      flex-direction: column;
      display: flex;
      align-items: center;
      span {
        font-weight: bold;
        font-size: 30px;
        line-height: 37px;
        color: black;
        margin-bottom: 10px;
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    white-space: pre-wrap;
    margin-bottom: 30px;
  }
}
</style>
