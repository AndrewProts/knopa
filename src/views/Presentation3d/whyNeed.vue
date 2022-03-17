<template>
  <div class="whyNeed">
    <div class="title">{{ $t("whyNeedPresentations") }}</div>
    <div class="row">
      <div class="cel">{{ $t(config["3dPresentations"].whyNeedText) }}</div>
      <div class="cel">
        <div class="grid">
          <div
            v-for="(item, i) in config['3dPresentations'].whyNeedItems"
            :key="i"
            class="item"
          >
            <component :is="item.icon"></component>
            <div>{{ $t(item.text) }}</div>
          </div>
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
.whyNeed {
  width: 100%;
  margin-bottom: 160px;
  color: $gray;
  @media screen and (max-width: 1110px){
    margin-bottom: 60px;
  }
  .grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      width: 50%;
      font-weight: bold;
      font-size: 16px;
      line-height: 145%;
      @media screen and (max-width: 1110px){
        width: 100%;
        text-align: center;
        align-items: center;
        padding: 0 20%;
        &:nth-child(n + 1) {
          margin-top: 60px;
        }
      }
      &:nth-child(n + 3) {
        margin-top: 60px;
      }
      div {
        margin-top: 20px;
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
  .row {
    width: 100%;
    display: flex;
    @media screen and (max-width: 1110px){
      flex-direction: column;
    }
  }
  .cel {
    width: 50%;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    @media screen and (max-width: 1110px){
      width: 100%;
    }
    &:first-child {
      padding-right: 100px;
      @media screen and (max-width: 1110px){
        padding-right: 0;
        margin-bottom: 60px;
      }
    }
  }
}
</style>
