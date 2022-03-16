<template>
  <div class="presentations3d">
    <div class="container">
      <div class="projects">
        <div class="title">{{ $t("completedProjects") }}</div>
        <div class="subTitle">{{ $t("sliderSubTitle") }}</div>
        <div class="items">
          <div
            v-for="(item, i) in projectsData['3dPresentations']"
            :key="i"
            class="item"
          >
            <div class="name">{{ $t(item.name) }}</div>
            <div class="img" @click="$refs.videoModal.open(item.videoUrl)">
              <img :src="item.previewImg" :alt="item.name" />
              <div class="circle">{{ $t("watch") }}</div>
            </div>
          </div>
        </div>
      </div>
      <how-work></how-work>
      <why-need></why-need>
      <we-can></we-can>
      <price></price>
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
      </div>
      <faq></faq>
    </div>
    <vue-form></vue-form>
    <video-modal ref="videoModal"></video-modal>
  </div>
</template>

<script>
import vueForm from "../../components/vueForm";
import videoModal from "../../components/videoModal";
import howWork from "./howWork";
import faq from "@/components/faq";
import whyNeed from "./whyNeed";
import price from "@/views/Presentation3d/price";
import weCan from "./weCan";

export default {
  name: "Home",
  components: {
    vueForm,
    videoModal,
    howWork,
    faq,
    whyNeed,
    price,
    weCan
  },
  data() {
    return {
      projectsData: {},
      whatIncluded: {},
      config: {}
    };
  },
  async created() {
    this.projectsData = window.projects;
    this.whatIncluded = window.whatIncluded;
    this.config = window.config;
  }
};
</script>

<style lang="scss">
.presentations3d {
  width: 100%;
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
    width: 100%;
    color: $gray;
    margin-bottom: 160px;
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
    .items {
      width: 100%;
      display: flex;
      flex-direction: column;
      .item {
        width: 100%;
        & + .item {
          margin-top: 30px;
        }
        .name {
          font-weight: bold;
          font-size: 25px;
          line-height: 30px;
          margin-bottom: 30px;
        }
        .img {
          width: 100%;
          height: 518px;
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
  }
}
</style>
