<template>
  <div class="container">
    <div class="vueForm">
      <div class="left">
        <div class="title">{{ $t("contactUs") }}</div>
        <div class="text">{{ $t("contactText") }}</div>
        <div class="contacts">
          <div class="item">
            <div>{{ $t("mailUs") }}</div>
            <a :href="'mailto:' + config.email">
              <icon-mail></icon-mail>
              {{ config.email }}
            </a>
          </div>
          <div class="item">
            <div>{{ $t("weInSocials") }}</div>
            <div class="socialLinks">
              <a v-if="config.youtube" :href="config.youtube" target="_blank">
                <icon-youtube></icon-youtube>
              </a>
              <a v-if="config.vimeo" :href="config.vimeo" target="_blank">
                <icon-vimeo></icon-vimeo>
              </a>
              <a
                v-if="config.instagram"
                :href="config.instagram"
                target="_blank"
              >
                <icon-instagram></icon-instagram>
              </a>
            </div>
          </div>
        </div>
        <div class="socials">
          <a v-if="config.facebook" :href="config.facebook" target="_blank">
            <icon-facebook></icon-facebook>
          </a>
          <a v-if="config.telegram" :href="config.telegram" target="_blank">
            <icon-telegram></icon-telegram>
          </a>
          <a v-if="config.whatsapp" :href="config.whatsapp" target="_blank">
            <icon-watsup></icon-watsup>
          </a>
          <a v-if="config.viber" :href="config.viber" target="_blank">
            <icon-viber></icon-viber>
          </a>
        </div>
        <a :href="config.briefUrl" target="_blank">
          <div class="button outline">{{ $t("fillBrief") }}</div>
        </a>
      </div>
      <div class="right">
        <div class="img" @click="$refs.videoModal.open(config.aboutUsVideo)">
          <img :src="config.aboutUsImg" alt="aboutVideo" />
          <div class="circle">{{ $t("watchVideoAboutUs") }}</div>
        </div>
      </div>
    </div>
    <video-modal ref="videoModal"></video-modal>
  </div>
</template>

<script>
import videoModal from "./videoModal";

export default {
  components: {
    videoModal
  },
  data() {
    return {
      config: {},
      name: "",
      phone: "",
      message: "",
      isSend: false
    };
  },
  methods: {
    send() {
      const request = new XMLHttpRequest();
      request.open("POST", "/mail.php", true);
      request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          this.isSend = true;
        }
      });
      request.send({
        name: this.name,
        phone: this.phone,
        message: this.message,
        mail: this.config.email
      });
    }
  },
  async created() {
    this.config = window.config;
  }
};
</script>

<style lang="scss">
.vueForm {
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: $gray;
  .sendText {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    padding: 160px 40px;
    white-space: pre-wrap;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border: 1px solid rgba(58, 0, 222, 0.15);
    border-radius: 57px;
    padding: 74px 60px;
    .button {
      margin-top: 54px;
    }
    .input {
      display: flex;
      flex-direction: column;
      width: 100%;
      & + .input {
        margin-top: 36px;
      }
      div {
        font-weight: bold;
        font-size: 14px;
        line-height: 145%;
        margin-bottom: 18px;
      }
      input {
        width: 100%;
        height: 60px;
        border: 1px solid rgba(58, 0, 222, 0.3);
        border-radius: 51px;
        padding: 0 36px;
        outline: none;
        transition: 0.3s ease-in-out;
        &:focus {
          border-color: $blue;
        }
      }
    }
  }
  .socials {
    font-weight: bold;
    font-size: 16px;
    line-height: 145%;
    display: flex;
    align-items: center;
    margin: 30px 0;
    a {
      margin-right: 16px;
    }
  }
  svg {
    &:hover {
      path {
        fill: $blue;
      }
    }
    path {
      transition: 0.3s ease-in-out;
    }
  }
  .socialLinks {
    display: flex;
    align-content: center;
  }
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 26px;
  }
  .left {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .right {
    width: 531px;
    position: relative;
    .img {
      width: 628px;
      height: 425px;
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
  .text {
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 160%;
    margin-bottom: 12px;
  }
  .contacts {
    display: flex;
    padding-top: 30px;
    .item {
      display: flex;
      flex-direction: column;
      svg {
        margin-right: 10px;
      }
      div {
        font-weight: bold;
        font-size: 16px;
        line-height: 145%;
        margin-bottom: 7px;
      }
      a {
        font-size: 14px;
        line-height: 160%;
        user-select: text;
        display: flex;
        align-content: center;
        text-decoration: underline;
        align-items: center;
      }
      & + .item {
        margin-left: 46px;
      }
    }
  }
}
</style>
