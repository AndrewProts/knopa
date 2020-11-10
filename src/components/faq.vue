<template>
  <div class="container">
    <div class="faqTitle">
      <div>{{ $t("hasQuestions") }}</div>
      <p>
        {{ $t("faqText") }}
      </p>
    </div>
    <div class="faq">
      <div v-for="(item, i) in faq" :key="i" class="item">
        <div class="head" @click="toggleQuestion($event)">
          <div></div>
          <span>{{ $t(item.question) }}</span>
        </div>
        <div class="body">
          {{ $t(item.answer) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faq from "../../public/data/faq";

export default {
  data() {
    return {
      faq: faq,
    };
  },
  methods: {
    toggleQuestion($event) {
      $event.target.parentElement.parentElement.classList.toggle("open");
    },
  },
};
</script>

<style lang="scss">
.faqTitle {
  margin-bottom: 106px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: $gray;
  div {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
  }
  p {
    margin: 0;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 160%;
    padding-right: 100px;
    padding-top: 10px;
  }
}
.faq {
  display: flex;
  flex-direction: column;
  margin-bottom: 220px;
  padding-left: 100px;
  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: $gray;
    &.open {
      .head {
        color: $blue;
        & > div {
          transform: rotate(270deg);
          &:after {
            height: 0px;
          }
        }
      }
      .body {
        max-height: 200px;
        margin-top: 34px;
        border-bottom: 1px solid rgba(58, 0, 222, 0.15);
        padding-bottom: 34px;
      }
    }
    .body {
      max-height: 0px;
      transition: 0.3s ease-in-out;
      margin-top: 0;
      overflow: hidden;
      padding-left: 30px;
      font-size: 14px;
      line-height: 160%;
    }
    .head {
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      user-select: none;
      & > div {
        display: flex;
        align-items: center;
        margin-right: 10px;
        position: relative;
        width: 15px;
        position: relative;
        transition: 0.3s ease-in-out;
        &:before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 3px;
          height: 15px;
          background-color: $blue;
          transition: 0.3s ease-in-out;
        }
        &:after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(90deg);
          width: 3px;
          height: 15px;
          background-color: $blue;
          transition: 0.3s ease-in-out;
        }
      }
    }
    & + .item {
      margin-top: 57px;
    }
  }
}
</style>
