<template>
  <div class="container">
    <div class="vueForm">
      <div class="left">
        <div class="title">{{ $t("contactUs") }}</div>
        <div class="text">{{ $t("contactText") }}</div>
        <div class="contacts">
          <div class="item">
            <div>{{ $t("callUs") }}</div>
            <a :href="'tel:' + config.phone">{{ config.phone }}</a>
          </div>
          <div class="item">
            <div>{{ $t("mailUs") }}</div>
            <a :href="'mailto:' + config.email">{{ config.email }}</a>
          </div>
        </div>
        <div class="socials">
          <div>{{ $t("weInSocials") }}</div>
          <a :href="config.facebook" target="_blank">
            <icon-facebook></icon-facebook>
          </a>
          <a :href="config.instagram" target="_blank">
            <icon-instagram></icon-instagram>
          </a>
        </div>
        <div class="button outline">{{ $t("fillBrief") }}</div>
      </div>
      <div class="right">
        <form v-if="!isSend" action="#" @submit="send">
          <div class="input">
            <div>{{ $t("howCallYou") }}</div>
            <input v-model="name" type="text" />
          </div>
          <div class="input">
            <div>{{ $t("phoneNumber") }}</div>
            <input v-model="phone" type="text" />
          </div>
          <div class="input">
            <div>{{ $t("message") }}</div>
            <input v-model="message" type="text" />
          </div>
          <div class="button" @click="send">{{ $t("orderConsultation") }}</div>
        </form>
        <div v-else class="sendText">{{ $t("responseText") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../public/data/config";
export default {
  data() {
    return {
      config: config,
      name: "",
      phone: "",
      message: "",
      isSend: false,
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
        mail: this.config.email,
      });
    },
  },
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
    margin-top: 50px;
    margin-bottom: 63px;
    a {
      margin-left: 26px;
    }
  }
  .title {
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 26px;
  }
  .left {
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .right {
    width: 531px;
  }
  .text {
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 160%;
    margin-bottom: 12px;
  }
  .contacts {
    display: flex;
    padding-top: 40px;
    .item {
      display: flex;
      flex-direction: column;
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
      }
      & + .item {
        margin-left: 46px;
      }
    }
  }
}
</style>
