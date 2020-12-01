<template>
  <div class="container">
    <div class="homeProjects">
      <div class="title">{{ $t("completedProjects") }}</div>
      <div class="subTitle">{{ $t("sliderSubTitle") }}</div>
      <div class="items">
        <div v-for="(item, i) in shownProjects" :key="i" class="item">
          <div class="img" @click="$refs.videoModal.open(item.videoUrl)">
            <img :src="item.previewImg" alt="aboutVideo" />
            <div class="circle">{{ $t("watch") }}</div>
          </div>
          <div class="name">{{ $t(item.name) }}</div>
          <div class="text">{{ $t(item.description) }}</div>
        </div>
      </div>
      <div v-if="!showMore" class="button" @click="showMore = true">
        {{ $t("downloadMore") }}
      </div>
    </div>
    <video-modal ref="videoModal"></video-modal>
  </div>
</template>

<script>
import videoModal from "@/components/videoModal";

export default {
  components: {
    videoModal
  },
  data() {
    return {
      projects: {},
      showMore: false
    };
  },
  computed: {
    shownProjects() {
      if (this.showMore) {
        return this.projects["2dPresentations"];
      } else {
        return this.projects["2dPresentations"].slice(0, 2);
      }
    }
  },
  async created() {
    this.projects = window.projects;
  }
};
</script>

<style lang="scss" scoped>
.homeProjects {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  align-items: center;
  margin-bottom: 160px;
  .button {
    margin-top: 40px;
  }
  .items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: calc(50% - 30px);
      &:nth-child(2n - 1) {
        margin-top: 60px;
      }
      .name {
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      .text {
        font-size: 14px;
        line-height: 160%;
      }
      .img {
        width: 100%;
        height: 303px;
        position: relative;
        cursor: pointer;
        &:hover {
          .circle {
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .circle {
          position: absolute;
          left: 50%;
          top: 50%;
          background-color: white;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          transform: translate(-50%, -50%) scale(0);
          transition: 0.3s ease-in-out;
          font-weight: bold;
          font-size: 12px;
          line-height: 15px;
          text-align: center;
          color: $blue;
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 18px;
    width: 100%;
  }
  .subTitle {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 50px;
    width: 100%;
  }
}
</style>
