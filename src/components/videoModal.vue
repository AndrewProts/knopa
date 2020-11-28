<template>
  <div v-if="opened" class="videoModal">
    <div class="bg" @click="close"></div>
    <iframe :src="video" width="400" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
      video: "",
    };
  },
  methods: {
    open(video) {
      this.opened = true;
      this.video = video;
    },
    close() {
      this.opened = false;
    },
  },
};
</script>

<style lang="scss">
.videoModal {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  iframe {
    position: relative;
    z-index: 10000;
    width: 920px;
    height: 517px;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
</style>
