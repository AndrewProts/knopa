<template>
  <div v-if="mounted" id="app">
    <el-head></el-head>
    <main-banner></main-banner>
    <tabs v-model="activeSection"></tabs>
    <router-view :key="getUpdateKey" />
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import vueFooter from "./components/vueFooter";
import elHead from "./components/head";
import mainBanner from "./components/mainBanner";
import tabs from "./components/tabs";
import { mapGetters } from "vuex";

export default {
  components: { vueFooter, elHead, mainBanner, tabs },
  data() {
    return {
      activeSection: 0,
      mounted: false
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
  }
};
</script>
