<template>
  <div class="other">
    <div class="container">
      <div class="projects">
        <div v-for="(item, i) in projectsData.other" :key="i" class="project">
          <div class="info">
            <div class="name">{{ $t(item.name) }}</div>
            <div class="description">{{ $t(item.description) }}</div>
            <div class="bottom">
              <a :href="item.contactLink" target="_blank">
                <div class="button outline">
                  {{ $t("contactUs1") }}
                </div>
              </a>
              <div class="see" @click="$refs.videoModal.open(item.videoUrl)">
                {{ $t("viewExample") }}
              </div>
            </div>
          </div>
          <div class="img">
            <img :src="item.previewImg" :alt="item.name" />
          </div>
        </div>
      </div>
    </div>
    <vue-form></vue-form>
    <video-modal ref="videoModal"></video-modal>
  </div>
</template>

<script>
import vueForm from "../components/vueForm";
import projectsData from "../../public/data/projects";
import videoModal from "../components/videoModal";

export default {
  name: "Home",
  components: {
    vueForm,
    videoModal,
  },
  data() {
    return {
      projectsData: projectsData,
    };
  },
};
</script>

<style lang="scss">
.other {
  width: 100%;
  .projects {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
    .project {
      width: 100%;
      display: flex;
      &:nth-child(2n) {
        .info {
          order: 2;
          padding-right: 0px;
          padding-left: 60px;
        }
        .img {
          order: 1;
        }
      }
      & + .project {
        margin-top: 120px;
      }
      .info {
        width: 45%;
        color: $gray;
        padding-right: 60px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        order: 1;
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        }
        .see {
          font-weight: normal;
          font-size: 14px;
          line-height: 160%;
          text-decoration: underline;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: $blue;
          }
        }
        .name {
          font-weight: bold;
          font-size: 45px;
          line-height: 55px;
        }
        .description {
          font-weight: normal;
          font-size: 14px;
          line-height: 160%;
          margin-top: 16px;
          margin-bottom: 40px;
        }
      }
      .img {
        width: 55%;
        height: 380px;
        display: flex;
        order: 2;
        img {
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
