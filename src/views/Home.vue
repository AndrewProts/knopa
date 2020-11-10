<template>
  <div class="home">
    <el-head></el-head>
    <main-banner></main-banner>
    <projects></projects>
    <why></why>
    <work></work>
    <cost></cost>
    <faq></faq>
    <vue-form></vue-form>
  </div>
</template>

<script>
import elHead from "../components/head";
import projects from "../components/projects";
import mainBanner from "../components/mainBanner";
import why from "../components/why";
import work from "../components/work";
import cost from "../components/cost";
import faq from "../components/faq";
import vueForm from "../components/vueForm"

export default {
  name: "Home",
  components: {
    elHead,
    projects,
    mainBanner,
    why,
    work,
    cost,
    faq,
    vueForm
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
