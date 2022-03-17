<template>
  <div class="vueFooter">
    <div class="container wide">
      <div class="logo">
        <div>{{ $t("siteName") }}</div>
        <div>{{ $t("logoText") }}</div>
      </div>
      <div class="links">
<!--        <div class="link">{{ $t("creatives") }}</div>-->
<!--        <div class="link">{{ $t("2D presentations") }}</div>-->
<!--        <div class="link">{{ $t("other") }}</div>-->
<!--        <div class="lang">-->
<!--          <a href="/ru" @click.prevent="changeLanguage('ru')">Rus</a>-->
<!--          <span>/</span>-->
<!--          <a href="/en" @click.prevent="changeLanguage('en')">Eng</a>-->
<!--        </div>-->
        <a
            :href="config['3dPresentations'].priceBrief"
            target="_blank"
            class="button outline"
        >{{ $t("order") }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {}
    };
  },
  async created() {
    this.config = window.config;
  },
  methods: {
    changeLanguage(lang) {
      if (lang === this.$route.params.lang) return;
      this.$router.push({
        name: this.$route.name,
        params: {
          lang: lang
        }
      });
      window.location.reload();
    }
  }
};
</script>

<style lang="scss">
.vueFooter {
  display: flex;
  align-content: center;
  height: 170px;
  border-top: 1px solid rgba(21, 21, 21, 0.26);
  .container {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .links {
    display: flex;
    align-content: center;
    align-items: center;
  }
  .logo {
    font-weight: 800;
    font-size: 21px;
    color: $blue;
    line-height: 26px;
  }
  .link {
    color: $gray;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-right: 60px;
    cursor: pointer;
  }
  .lang {
    margin-right: 50px;
    font-size: 14px;
    color: $gray;
    display: flex;
    span {
      margin: 0 6px;
    }
    div {
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: $blue;
      }
    }
  }
}
</style>
