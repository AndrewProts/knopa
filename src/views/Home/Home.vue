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
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
