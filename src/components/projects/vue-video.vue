<template>
  <div class="video">
    <iframe :src="item.videoUrl" frameborder="0" autoplay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img v-if="!play" :src="item.previewImg" alt="img" />
    <div v-if="!play" class="play" @click="play = true">{{ $t("watch") }}</div>
  </div>
</template>

<script>
export default {
  name: "vueVideo",
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      play: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
