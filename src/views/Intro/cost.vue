<template>
  <div class="container">
    <div class="introCost">
      <div class="title">{{ $t("howMuchCost") }}</div>
      <div class="row">
        <div class="item">
          <div class="name">
            {{ $t("2D Intro") }}
            <icon-curve></icon-curve>
          </div>
          <img :src="config.intro.img2d" alt="2d" />
          <div class="price">
            {{ $t("Price from") }} <b>{{ config.intro.cost2d }}</b>
          </div>
          <a :href="config.intro.brief2d">
            <span class="button">{{ $t("orderVideo") }}</span>
          </a>
        </div>
        <div class="item">
          <div class="name">
            {{ $t("3D Intro") }}
            <icon-curve></icon-curve>
          </div>
          <img :src="config.intro.img3d" alt="3d" />
          <div class="price">
            {{ $t("Price from") }} <b>{{ config.intro.cost3d }}</b>
          </div>
          <a :href="config.intro.brief3d">
            <span class="button">{{ $t("orderVideo") }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.introCost {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  color: $gray;
  margin: 120px 0;
  .row {
    display: flex;
    justify-content: center;
    .item {
      width: 440px;
      border: 1px solid rgba(58, 0, 222, 0.15);
      box-sizing: border-box;
      border-radius: 57px;
      padding: 60px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      margin: 0 20px;
      .price {
        font-weight: 500;
        font-size: 14px;
        line-height: 235%;
        color: $blue;
        margin-bottom: 30px;
        b {
          color: black;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
        }
      }
      img {
        width: 100%;
        height: 178px;
        object-position: center;
        object-fit: cover;
        margin-bottom: 30px;
      }
      .name {
        font-weight: bold;
        font-size: 30px;
        line-height: 37px;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        margin-bottom: 25px;
        svg {
          transform: scale(0.5);
        }
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 80px;
  }
}
</style>
