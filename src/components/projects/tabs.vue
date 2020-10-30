<template>
  <div class="tabs">
    <div class="container">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="tab"
        @click="setLine(i)"
      >
        {{ $t(project.categoryName) }}
      </div>
    </div>
    <div
      class="line"
      :class="{ transition: mounted }"
      :style="{ left: lineOffset + 'px', width: lineWidth + 'px' }"
    ></div>
  </div>
</template>

<script>
import projects from "../../assets/data/projects";

export default {
  data() {
    return {
      projects: projects,
      lineOffset: 0,
      lineWidth: 0,
      lineOffsetWidth: 24,
      mounted: false,
    };
  },
  methods: {
    setLine(i) {
      this.lineOffset =
        document.getElementsByClassName("tab")[i].getBoundingClientRect().x -
        this.lineOffsetWidth / 2;
      this.lineWidth =
        document.getElementsByClassName("tab")[i].offsetWidth +
        this.lineOffsetWidth;
    },
  },
  mounted() {
    this.setLine(0);
    setTimeout(() => {
      this.mounted = true;
    });
  },
};
</script>

<style lang="scss">
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
    &:hover {
      color: $blue;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
}
</style>
