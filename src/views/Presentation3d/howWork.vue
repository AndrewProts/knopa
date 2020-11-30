<template>
  <div class="howWork">
    <div class="left">
      <div class="title">{{ $t("How is the work on the video going?") }}</div>
      <div class="list">
        <div
          v-for="(item, i) in config['3dPresentations'].howWorkGoingList"
          :key="i"
          class="item"
          :class="{ open: currentItem === i }"
        >
          <div class="head" @click="currentItem = i">{{ $t(item.name) }}</div>
          <div class="content">
            {{ $t(item.description) }}
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <img :src="config['3dPresentations'].howWorkGoingImg" alt="alt" />
    </div>
  </div>
</template>

<script>
import config from "../../../public/data/config.json";

export default {
  data() {
    return {
      config: config,
      currentItem: null
    };
  }
};
</script>

<style lang="scss" scoped>
.howWork {
  width: 100%;
  margin-bottom: 160px;
  color: $gray;
  display: flex;
  img {
    width: 100%;
    height: 425px;
    object-fit: cover;
    object-position: center;
  }
  .list {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      flex-direction: column;
      & + .item {
        margin-top: 10px;
      }
      &.open {
        .content {
          max-height: 100px;
          padding-top: 20px;
        }
        .head {
          color: $blue;
        }
      }
      .content {
        max-height: 0;
        transition: 0.3s ease;
        overflow: hidden;
        padding-top: 0;
        font-size: 14px;
        line-height: 160%;
        padding-left: 36px;
      }
      .head {
        font-weight: bold;
        font-size: 16px;
        line-height: 243%;
        display: flex;
        align-content: center;
        align-items: center;
        transition: 0.3s ease;
        cursor: pointer;
        &:before {
          content: "-";
          position: relative;
          margin-right: 30px;
        }
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
  .left,
  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
}
</style>
