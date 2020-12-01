<template>
  <div class="home">
    <div class="container">
      <div class="projects">
        <div class="title">{{ $t("completedProjects") }}</div>
        <div class="subTitle">{{ $t("sliderSubTitle") }}</div>
        <div class="items">
          <div v-for="(item, i) in projects" :key="i" class="itemWrap">
            <div class="item">
              <div class="img" @click="$refs.videoModal.open(item.videoUrl)">
                <img :src="item.previewImg" alt="aboutVideo" />
                <div class="circle">{{ $t("watch") }}</div>
              </div>
              <div class="name">{{ $t(item.name) }}</div>
            </div>
          </div>
        </div>
        <div v-if="!showMore" class="button outline" @click="showMore = true">
          {{ $t("downloadMore") }}
        </div>
      </div>
    </div>
    <why></why>
    <work></work>
    <div class="container">
      <div class="contains">
        <div class="title">{{ $t("WhatIncluded") }}</div>
        <div class="items">
          <div v-for="(item, i) in whatIncluded" :key="i" class="item">
            <component :is="item.icon"></component>
            {{ $t(item.name) }}
          </div>
        </div>
      </div>
      <div class="price">
        <div class="title">{{ $t("whatAboutPrice") }}</div>
        <div class="items">
          <div class="item">
            <div class="name">{{ $t("accountCreative") }}</div>
            <div class="price">{{ config.creatives.accountCreativePrice }}</div>
            <a :href="config.creatives.accountCreativeBrief" target="_blank">
              <div class="button outline">{{ $t("orderVideo") }}</div>
            </a>
            <div
              class="see"
              @click="
                $refs.videoModal.open(config.creatives.accountCreativeVideo)
              "
            >
              {{ $t("viewExample") }}
            </div>
          </div>
          <div class="item">
            <div class="name">{{ $t("appCreative") }}</div>
            <div class="price">{{ config.creatives.appCreativePrice }}</div>
            <a :href="config.creatives.appCreativeBrief" target="_blank">
              <div class="button outline">{{ $t("orderVideo") }}</div>
            </a>
            <div
              class="see"
              @click="$refs.videoModal.open(config.creatives.appCreativeVideo)"
            >
              {{ $t("viewExample") }}
            </div>
          </div>
          <div class="item">
            <div class="saleCount">
              {{ $t("videoSet") }} ({{ config.creatives.videoSetNumber }})
            </div>
            <div class="sale">
              {{ $t("sale") }}
              <span>{{ config.creatives.videoSetPercent }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <faq></faq>
    <vue-form></vue-form>
    <video-modal ref="videoModal"></video-modal>
  </div>
</template>

<script>
import vueForm from "../../components/vueForm";
import projectsData from "../../../public/data/projects.json";
import whatIncluded from "../../../public/data/whatIncluded.json";
import videoModal from "../../components/videoModal";
import why from "../../components/why";
import work from "../../components/work";
import faq from "../../components/faq";
import config from "../../../public/data/config.json";

export default {
  name: "Home",
  components: {
    vueForm,
    videoModal,
    why,
    work,
    faq
  },
  data() {
    return {
      projectsData: projectsData,
      whatIncluded: whatIncluded,
      config: config,
      showMore: false
    };
  },
  computed: {
    projects() {
      if (this.showMore) {
        return this.projectsData.creatives;
      } else {
        return this.projectsData.creatives.slice(0, 6);
      }
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  color: $gray;
  .price {
    margin-bottom: 89px;
    .items {
      display: flex;
      justify-content: space-between;
      .item {
        width: 340px;
        border: 1px solid rgba(58, 0, 222, 0.15);
        box-sizing: border-box;
        border-radius: 57px;
        padding: 43px 57px 65px 57px;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        .saleCount {
          font-size: 24px;
          line-height: 100%;
        }
        .sale {
          font-weight: bold;
          font-size: 30px;
          line-height: 37px;
          margin-top: 53px;
          span {
            color: $blue;
          }
        }
        .name {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 235%;
          color: $blue;
        }
        .price {
          margin-top: 40px;
          margin-bottom: 27px;
          font-weight: bold;
          font-size: 30px;
          line-height: 37px;
        }
        .see {
          font-size: 14px;
          line-height: 160%;
          text-decoration-line: underline;
          cursor: pointer;
          margin-top: 32px;
        }
      }
    }
    .title {
      font-weight: bold;
      font-size: 45px;
      line-height: 55px;
      margin-bottom: 63px;
    }
  }
  .contains {
    display: flex;
    flex-direction: column;
    margin-top: 183px;
    margin-bottom: 134px;
    .items {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .item {
        display: flex;
        flex-direction: column;
        svg {
          margin-bottom: 24px;
          width: 32px;
          path {
            fill: $blue;
          }
        }
        font-weight: bold;
        font-size: 16px;
        line-height: 145%;
      }
    }
    .title {
      font-weight: bold;
      font-size: 45px;
      line-height: 55px;
      margin-bottom: 58px;
    }
  }
  .projects {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-bottom: 167px;
    .items {
      display: flex;
      flex-wrap: wrap;
      .itemWrap {
        width: calc(100% / 3);
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
        &:nth-child(3n) {
          justify-content: flex-end;
          margin-top: 10px;
        }
        &:nth-child(3n - 2) {
          justify-content: flex-start;
          margin-top: 10px;
        }
      }
      .item {
        display: flex;
        flex-direction: column;
        .img {
          width: 354px;
          height: 199px;
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
        .name {
          margin-top: 32px;
          font-weight: bold;
          font-size: 25px;
          line-height: 30px;
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
}
</style>
