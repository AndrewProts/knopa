<template>
  <div class="tabsWrap">
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
    <div class="container">
      <div class="top">
        <div>{{ $t("completedProjects") }}</div>
        <div class="arrows">
          <div class="arrow disable" @click="prev">
            <icon-arrow></icon-arrow>
          </div>
          <div class="arrow" @click="next">
            <icon-arrow></icon-arrow>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../../../public/data/projects";

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      projects: projects,
      lineOffset: 0,
      lineWidth: 0,
      lineOffsetWidth: 24,
      mounted: false,
      activeSection: 0,
    };
  },
  methods: {
    next() {
      if (this.activeSection >= this.projects.length - 1) {
        return;
      }
      this.setLine(this.activeSection + 1);
    },
    prev() {
      if (this.activeSection <= 0) {
        return;
      }
      this.setLine(this.activeSection - 1);
    },
    setLine(i) {
      this.activeSection = i;
      this.$emit("input", this.activeSection);
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
.tabsWrap {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    color: $gray;
    margin-bottom: 18px;
    margin-top: 140px;
  }
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
