<template>
  <div class="tabsWrap">
    <div class="tabs">
      <div class="container">
        <div class="tab" @click="setLine(0, 'Home')">
          {{ $t("2D presentations") }}
        </div>
        <div class="tab" @click="setLine(1, 'Presentations3d')">
          {{ $t("3D presentations") }}
        </div>
        <div class="tab" @click="setLine(2, 'Creatives')">
          {{ $t("creatives") }}
        </div>
        <div class="tab" @click="setLine(3, 'Other')">
          {{ $t("other") }}
        </div>
      </div>
      <div
        class="line"
        :class="{ transition: mounted }"
        :style="{ left: lineOffset + 'px', width: lineWidth + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      lineOffset: 0,
      lineWidth: 0,
      lineOffsetWidth: 24,
      mounted: false
    };
  },
  methods: {
    setLine(i, route) {
      this.lineOffset =
        document.getElementsByClassName("tab")[i].getBoundingClientRect().x -
        this.lineOffsetWidth / 2;
      this.lineWidth =
        document.getElementsByClassName("tab")[i].offsetWidth +
        this.lineOffsetWidth;
      this.$router.push({
        name: route,
        params: { lang: this.$route.params.lang }
      });
    }
  },
  mounted() {
    let i = 0;
    if (this.$route.name === "Creatives") i = 2;
    if (this.$route.name === "Presentations3d") i = 1;
    if (this.$route.name === "Other") i = 3;
    this.lineOffset =
      document.getElementsByClassName("tab")[i].getBoundingClientRect().x -
      this.lineOffsetWidth / 2;
    this.lineWidth =
      document.getElementsByClassName("tab")[i].offsetWidth +
      this.lineOffsetWidth;
    setTimeout(() => {
      this.mounted = true;
    });
    window.addEventListener("resize", () => {
      let i = 0;
      if (this.$route.name === "Creatives") i = 2;
      if (this.$route.name === "Presentations3d") i = 1;
      if (this.$route.name === "Other") i = 3;
      this.lineOffset =
        document.getElementsByClassName("tab")[i].getBoundingClientRect().x -
        this.lineOffsetWidth / 2;
      this.lineWidth =
        document.getElementsByClassName("tab")[i].offsetWidth +
        this.lineOffsetWidth;
    });
  }
};
</script>

<style lang="scss">
.tabsWrap {
  margin-bottom: 120px;
  .arrows {
    display: flex;
    user-select: none;
    .arrow {
      cursor: pointer;
      &.disable {
        svg {
          path {
            fill: white;
            stroke: rgba(21, 21, 21, 1);
          }
        }
      }
      svg {
        path {
          transition: 0.3s ease-in-out;
          fill: $blue;
        }
      }
      &:first-child {
        margin-right: 60px;
      }
      &:last-child {
        transform: scaleX(-1);
      }
    }
  }
}
.tabs {
  width: 100%;
  border-bottom: 1px solid rgba(21, 21, 21, 0.26);
  padding-bottom: 34px;
  position: relative;
  .line {
    position: absolute;
    left: 0;
    top: calc(100% - 3px);
    height: 4px;
    border-radius: 45px;
    background-color: $blue;
    &.transition {
      transition: 0.3s ease-in-out;
    }
  }
  .tab {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
    & + .tab {
      margin-left: 60px;
    }
    &:hover {
      color: $blue;
    }
  }
  .container {
    display: flex;
    position: relative;
    justify-content: space-between;
  }
}
</style>
