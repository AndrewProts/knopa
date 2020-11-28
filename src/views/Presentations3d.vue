<template>
  <div class="home">
    <vue-form></vue-form>
  </div>
</template>

<script>
import vueForm from "../components/vueForm";
import projectsData from "../../public/data/projects";

export default {
  name: "Home",
  components: {
    vueForm,
  },
  data() {
    return {
      projectsData: projectsData,
    };
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
}
</style>
