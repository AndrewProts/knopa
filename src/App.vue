<template>
  <div v-if="mounted" id="app">
    <el-head></el-head>
    <main-banner></main-banner>
<!--    <tabs v-model="activeSection"></tabs>-->
    <router-view :key="getUpdateKey" />
    <vue-footer></vue-footer>
    <div class="ukraine" :class="{'hide': hide, 'dNone': dNone}">
      <div class="blue"></div>
      <div class="yellow"></div>
      <div class="gerb">
        <img src="/img/gerb.png" alt="gerb">
        <div class="text">Слава Україні</div>
      </div>
    </div>
    <audio ref="anthem" src="/img/anthem.mp3"></audio>
  </div>
</template>

<script>
import vueFooter from "./components/vueFooter";
import elHead from "./components/head";
import mainBanner from "./components/mainBanner";
import tabs from "./components/tabs";
import { mapGetters } from "vuex";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { vueFooter, elHead, mainBanner, tabs },
  data() {
    return {
      activeSection: 0,
      mounted: false,
      hide: true,
      dNone: true,
      sentence: "слава україні",
      sentence2: "героям слава",
      enteredSentence: "слава україні"
    };
  },
  computed: {
    ...mapGetters(["getUpdateKey"])
  },
  async created() {
    let responce = await fetch('/data/translations.json');
    window.translations = await responce.json();
    responce = await fetch('/data/config.json');
    window.config = await responce.json();
    responce = await fetch('/data/faq.json');
    window.faq = await responce.json();
    responce = await fetch('/data/projects.json');
    window.projects = await responce.json();
    responce = await fetch('/data/whatIncluded.json');
    window.whatIncluded = await responce.json();
    setTimeout(() => {
      this.mounted = true;
    }, 100);
    window.onkeypress =(e) => {
      if (e.key === this.enteredSentence[0]) {
        this.enteredSentence = this.enteredSentence.substring(1);
      } else {
        this.enteredSentence = this.sentence;
      }
      if (this.enteredSentence.length <= 0) {
        this.dNone = false;
        setTimeout(() => {
          this.hide = false;
          this.$refs.anthem.play();
        });
      }
    };
  }
};
</script>

<style lang="scss">
.ukraine {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999999;
  top: 0;
  left: 0;
  &.dNone {
    display: none;
  }
  &.hide {
    .gerb {
      opacity: 0;
    }
    .blue {
      transform: translateY(-100%);
    }
    .yellow {
      transform: translateY(100%);
    }
  }
  .blue {
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #0159BA;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
  }
  .yellow {
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #FED501;
    bottom: 0;
    left: 0;
    transition: 0.3s ease-in-out;
  }
  .gerb {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s ease-in-out;
    transition-delay: 0.3s;
    img {
      width: 400px;
    }
    .text {
      font-size: 82px;
      text-align: center;
      font-weight: bold;
      margin-top: 35px;
      color: #0159BA;
    }
  }
}
</style>
