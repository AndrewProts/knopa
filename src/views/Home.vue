<template>
  <div class="home">
    <el-head></el-head>
    <main-banner></main-banner>
    <projects></projects>
  </div>
</template>

<script>
import elHead from "../components/head";
import projects from "../components/projects";
import mainBanner from "../components/mainBanner";

export default {
  name: "Home",
  components: {
    elHead,
    projects,
    mainBanner,
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
