<template>
  <div class="home">
    <projects></projects>
    <why></why>
    <work></work>
    <cost></cost>
    <faq></faq>
    <vue-form></vue-form>
  </div>
</template>

<script>
import why from "../../components/why";
import work from "../../components/work";
import cost from "../../components/cost";
import faq from "../../components/faq";
import vueForm from "../../components/vueForm";
import projectsData from "../../../public/data/projects.json";
import projects from "@/views/Home/projects";

export default {
  name: "Home",
  components: {
    why,
    work,
    cost,
    faq,
    vueForm,
    projects
  },
  data() {
    return {
      projectsData: projectsData
    };
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
