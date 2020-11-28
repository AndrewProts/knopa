<template>
  <div class="container">
    <div class="work">
      <div class="col">
        <div class="title">{{ $t("workTitle") }}</div>
        <div class="text">{{ $t("workText") }}</div>
        <div class="button outline">{{ $t("orderVideo") }}</div>
        <icon-star class="star star1"></icon-star>
      </div>
      <div class="col">
        <div class="list">
          <div class="item"><span>01</span>{{ $t("workList1") }}</div>
          <div class="item"><span>02</span>{{ $t("workList2") }}</div>
          <div class="item"><span>03</span>{{ $t("workList3") }}</div>
          <div class="item"><span>04</span>{{ $t("workList4") }}</div>
          <div class="item"><span>05</span>{{ $t("workList5") }}</div>
          <icon-star class="star star2"></icon-star>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.work {
  display: flex;
  .star {
    position: absolute;
    top: 0;
    right: 0;
    transform: matrix(0.95, 0.39, -0.3, 0.93, 0, 0);
    &1 {
      right: 100px;
      top: 60%;
      transform: matrix(0.95, 0.39, -0.3, 0.93, 0, 0) scale(0.8);
    }
    &2 {

    }
  }
  .list {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    .item {
      color: black;
      font-size: 14px;
      display: flex;
      align-items: center;
      & + .item {
        margin-top: 30px;
      }
      span {
        color: $blue;
        margin-right: 20px;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    color: $gray;
    margin-bottom: 23px;
    white-space: pre-wrap;
  }
  .text {
    color: $gray;
    font-size: 14px;
    line-height: 160%;
    margin-bottom: 40px;
    white-space: pre-wrap;
  }
  .col {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    position: relative;
    &:last-child {
      padding-left: 80px;
    }
  }
}
</style>
