<template>
  <div class="container">
    <div class="cost">
      <div class="title">{{ $t("howMuchCost") }}</div>
      <div class="cards">
        <icon-star class="star star1"></icon-star>
        <icon-star class="star star2"></icon-star>
        <div class="card">
          <div class="head">Standart <icon-curve-2></icon-curve-2></div>
          <div class="list">
            <div class="col">
              <div class="item">{{ $t("rate1") }}</div>
              <div class="item">{{ $t("rate3") }}</div>
            </div>
            <div class="col">
              <div class="item">{{ $t("rate2") }}</div>
              <div class="item">{{ $t("rate4") }}</div>
            </div>
          </div>
          <div class="prices">
            <div class="price">
              <div>15 {{ $t("seconds") }}</div>
              <span>5.999 $</span>
            </div>
            <div class="price">
              <div>30 {{ $t("seconds") }}</div>
              <span>8.999 $</span>
            </div>
            <div class="price">
              <div>60 {{ $t("seconds") }}</div>
              <span>10 000 $</span>
            </div>
          </div>
          <div class="button">{{ $t("orderVideo") }}</div>
          <div class="see">{{ $t("viewExample") }}</div>
        </div>
        <div class="card">
          <div class="head">Premium <icon-curve-2></icon-curve-2></div>
          <div class="list">
            <div class="col">
              <div class="item">{{ $t("rate5") }}</div>
              <div class="item">{{ $t("rate3") }}</div>
              <div class="item">{{ $t("rate6") }}</div>
              <div class="item">{{ $t("rate8") }}</div>
            </div>
            <div class="col">
              <div class="item">{{ $t("rate2") }}</div>
              <div class="item">{{ $t("rate4") }}</div>
              <div class="item">{{ $t("rate7") }}</div>
            </div>
          </div>
          <div class="prices">
            <div class="price">
              <div>15 {{ $t("seconds") }}</div>
              <span>5.999 $</span>
            </div>
            <div class="price">
              <div>30 {{ $t("seconds") }}</div>
              <span>8.999 $</span>
            </div>
            <div class="price">
              <div>60 {{ $t("seconds") }}</div>
              <span>10 000 $</span>
            </div>
          </div>
          <div class="button">{{ $t("orderVideo") }}</div>
          <div class="see">{{ $t("viewExample") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cost {
  padding-top: 180px;
  margin-bottom: 156px;
  .star {
    position: absolute;
    transform: matrix(0.95, 0.39, -0.3, 0.93, 0, 0);
    &1 {
      top: 76%;
      left: -60px;
      transform: matrix(0.95, 0.39, -0.3, 0.93, 0, 0) scale(0.8);
    }
    &2 {
      top: 50%;
      right: -60px;
    }
  }
  .head {
    margin-bottom: 60px;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: black;
    position: relative;
    svg {
      position: absolute;
      left: 50%;
      top: calc(100% + 20px);
      transform: translate(-50%, 0);
    }
  }
  .list {
    margin-bottom: 25px;
    width: 100%;
    display: flex;
    .col {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &:last-child {
        padding-left: 15px;
      }
    }
    .item {
      color: $gray;
      font-size: 14px;
      width: 100%;
      line-height: 140%;
      & + .item {
        margin-top: 15px;
      }
      &:before {
        content: "•";
        font-weight: 900;
        font-size: 14px;
        color: $blue;
        margin-right: 14px;
      }
    }
  }
  .prices {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
    position: relative;
    .price {
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        font-weight: 500;
        font-size: 14px;
        line-height: 235%;
        color: $blue;
        margin-bottom: 9px;
      }
      span {
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: black;
      }
    }
  }
  .title {
    color: $gray;
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 90px;
    text-align: center;
  }
  .cards {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    position: relative;
    .see {
      font-size: 14px;
      line-height: 160%;
      text-decoration-line: underline;
      color: $gray;
      cursor: pointer;
      margin-top: 22px;
    }
    .card {
      border: 1px solid rgba(58, 0, 222, 0.15);
      box-sizing: border-box;
      border-radius: 57px;
      padding: 55px 50px 50px 50px;
      margin: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 440px;
    }
  }
}
</style>
