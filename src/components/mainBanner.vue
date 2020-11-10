<template>
  <div class="mainBanner">
    <div class="container">
      <icon-star class="star star1"></icon-star>
      <icon-star class="star star2"></icon-star>
      <icon-star class="star star3"></icon-star>
      <icon-star class="star star4"></icon-star>
      <div class="title">{{ $t("profitAnimations") }}</div>
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
      <div class="button">{{ $t("orderVideo") }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.mainBanner {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  color: $gray;
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
  }
  .star {
    position: absolute;
    &1 {
      left: -72px;
      width: 30px;
      top: -15px;
    }
    &2 {
      left: -30px;
      width: 20px;
      top: -43px;
    }
    &3 {
      right: 130px;
      width: 28px;
      top: -84px;
    }
    &4 {
      right: 30px;
      width: 20px;
      top: 100%;
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
    }
  }
  .text {
    font-weight: bold;
    font-size: 55px;
    line-height: 67px;
    margin-bottom: 43px;
    margin-top: 18px;
    .name {
      color: $blue;
    }
  }
}
</style>
