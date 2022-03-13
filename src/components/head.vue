<template>
  <div class="header">
    <div class="container wide">
      <div class="logo">
        <div>{{ $t("siteName") }}</div>
        <div>{{ $t("logoText") }}</div>
      </div>
      <div class="side">
        <div class="lang">
          <a href="/ru" @click.prevent="changeLanguage('ru')">Rus</a>
          <span>/</span>
          <a href="/en" @click.prevent="changeLanguage('en')">Eng</a>
        </div>
        <div class="button outline">{{ $t("order") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["incrementUpdateKey"]),
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
.header {
  width: 100%;
  height: 112px;
  border-bottom: 1px solid rgba(21, 21, 21, 0.26);
  display: flex;
  align-items: center;
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
  .logo {
    font-weight: 800;
    font-size: 21px;
    color: $blue;
    line-height: 26px;
  }
  .side {
    display: flex;
    align-items: center;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
}
</style>
