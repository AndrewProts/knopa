<template>
  <div class="whyNeed">
    <div class="title">{{ $t("Why do we need\nanimation presentations?") }}</div>
    <div class="row">
      <div class="cel">{{ $t(config["3dPresentations"].whyNeedText) }}</div>
      <div class="cel">
        <div class="grid">
          <div class="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../../public/data/config.json";
export default {
  data() {
    return {
      config: config
    };
  }
};
</script>

<style lang="scss" scoped>
.whyNeed {
  width: 100%;
  margin-bottom: 160px;
  color: $gray;
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    white-space: pre-wrap;
    margin-bottom: 30px;
  }
  .row {
    width: 100%;
  }
  .cel {
    width: 50%;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
  }
}
</style>
