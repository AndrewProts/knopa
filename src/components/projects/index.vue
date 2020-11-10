<template>
  <div class="projects">
    <tabs v-model="activeSection"></tabs>
    <slider :selectedCategory="activeSection"></slider>
  </div>
</template>

<script>
import tabs from "./tabs";
import slider from "./slider";

export default {
  components: {
    tabs,
    slider,
  },
  data() {
    return {
      activeSection: 0
    }
  }
};
</script>

<style lang="scss">
.projects {
  width: 100%;
}
</style>
