<template>
  <div id="app">
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
    };
  },
  computed: {
    ...mapGetters(["getUpdateKey"]),
  },
};
</script>
