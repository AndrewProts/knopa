<template>
  <div class="why">
    <div class="container">
      <div class="top">
        <div>{{ $t("whyNeedVideos") }}</div>
        <icon-star class="star star1"></icon-star>
        <icon-star class="star star2"></icon-star>
      </div>
      <div class="items">
        <div class="item">
          <icon-chart></icon-chart>
          <div class="name">{{ $t("whyName1") }}</div>
          <div class="text">{{ $t("whyText1") }}</div>
        </div>
        <div class="item">
          <icon-conversion></icon-conversion>
          <div class="name">{{ $t("whyName2") }}</div>
          <div class="text">{{ $t("whyText2") }}</div>
        </div>
        <div class="item">
          <icon-explanation></icon-explanation>
          <div class="name">{{ $t("whyName3") }}</div>
          <div class="text">{{ $t("whyText3") }}</div>
        </div>
        <div class="item">
          <icon-time></icon-time>
          <div class="name">{{ $t("whyName4") }}</div>
          <div class="text">{{ $t("whyText4") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.why {
  .items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 180px;
    .item {
      display: flex;
      flex-direction: column;
      color: $gray;
      .name {
        font-weight: bold;
        font-size: 16px;
        line-height: 145%;
        margin-bottom: 14px;
        white-space: pre-wrap;
        margin-top: 45px;
      }
      .text {
        font-size: 14px;
        line-height: 160%;
        white-space: pre-wrap;
      }
    }
  }
  .top {
    color: $gray;
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    white-space: pre-wrap;
    margin-bottom: 70px;
    position: relative;
    .star {
      position: absolute;
      right: 0;
      top: 0;
      &1 {
        right: 200px;
        transform: matrix(0.95, 0.39, -0.3, 0.93, 0, 0);
      }
      &2 {
        right: 260px;
        top: -20px;
        transform: scale(0.7) matrix(0.95, 0.39, -0.3, 0.93, 0, 0);
      }
    }
  }
}
</style>
