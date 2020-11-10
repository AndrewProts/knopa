<template>
  <div class="slider">
    <div class="container">
      <div class="subTitle">{{ $t("sliderSubTitle") }}</div>
      <div class="items">
        <div v-for="(item, i) in selectedProjects" :key="i" class="item">
          <vue-video :item="item"></vue-video>
          <div class="name">{{ $t(item.name) }}</div>
          <div class="description">{{ $t(item.description) }}</div>
        </div>
      </div>
      <div class="btn">
        <div
          v-if="!more && showMoreBtn"
          class="button outline"
          @click="more = true"
        >
          {{ $t("downloadMore") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "../../../public/data/projects";
import vueVideo from "./vue-video"

export default {
  props: {
    selectedCategory: {
      type: Number,
      default: 0,
    },
  },
  components: {
    vueVideo
  },
  data() {
    return {
      projects: projects,
      more: false,
      showMoreBtn: true
    };
  },
  computed: {
    selectedProjects() {
      if (this.more) {
        return this.projects[this.selectedCategory].projects;
      }
      return this.projects[this.selectedCategory].projects.slice(0, 2);
    },
  },
  watch: {
    selectedCategory() {
      this.more = false;
      this.showMoreBtn = true;
      if (this.projects[this.selectedCategory].projects.length < 3) {
        this.showMoreBtn = false;
      }
    },
  },
};
</script>

<style lang="scss">
.screamer {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
    background-color: black;
  }
}
.slider {
  .btn {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    margin-bottom: 155px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: calc(50% - 35px);
      &:nth-child(2n - 1) {
        margin-top: 55px;
      }
      .name {
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        color: $gray;
        margin-bottom: 13px;
        margin-top: 36px;
      }
      .description {
        font-size: 14px;
        line-height: 160%;
        color: gray;
      }
      .video {
        width: 100%;
        height: 303px;
        transition: 0.3s ease-in-out;
        border: 1px solid transparent;
        cursor: pointer;
        position: relative;
        &.play {
          img {
            display: none;
          }
        }
        iframe {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        &:hover {
          border-color: $blue;
          .play {
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .play {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          transition: 0.3s ease-in-out;
          color: $blue;
          font-weight: bold;
          font-size: 12px;
          line-height: 15px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          z-index: 3;
        }
        img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .img {
      }
    }
  }
  .subTitle {
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 17px;
    color: $gray;
  }
}
</style>
