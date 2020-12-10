<template>
  <div class="intro">
    <projects></projects>
    <work></work>
    <cost></cost>
    <faq></faq>
    <vue-form></vue-form>
  </div>
</template>

<script>
import work from "./work";
import faq from "../../components/faq";
import vueForm from "../../components/vueForm";
import projects from "@/views/Intro/projects";
import cost from "./cost";

export default {
  name: "Home",
  components: {
    work,
    faq,
    vueForm,
    projects,
    cost
  }
};
</script>

<style lang="scss">
.intro {
  width: 100%;
  .how {
    width: 100%;
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      .text {

      }
    }
  }
}
</style>
