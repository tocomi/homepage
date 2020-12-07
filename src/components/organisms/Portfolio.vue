<template>
  <div class="portfolio-wrapper">
    <div class="portfolio-card">
      <div class="portfolio-card__header">Smoker's</div>
      <div class="portfolio-card__content content">
        <img
          class="content__image"
          src="../../assets/portfolio/smokers/001.jpg"
        />
        <span class="content__description">
          現在地の近くにある喫煙所、喫煙可能店舗を検索できるモバイルアプリです。
          <br />
          <br />
          業務委託契約でフロントエンド、バックエンドの開発を担当しています。
        </span>
      </div>
      <div class="portfolio-card__app-link app-link">
        <img
          class="app-link__image"
          src="../../assets/portfolio/smokers/apple.svg"
        />
        <img
          class="app-link__image"
          src="../../assets/portfolio/smokers/google.png"
        />
      </div>
      <div class="portfolio-card__tech tech">
        <tech-badge
          :icon="require('../../assets/tech/react.png')"
          text="react"
        />
        <tech-badge
          :icon="require('../../assets/tech/firebase.png')"
          text="firebase"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TechBadge from '../atoms/TechBadge.vue';

export default Vue.extend({
  name: 'PortfolioComponent',
  components: {
    TechBadge,
  },
});
</script>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.portfolio-wrapper {
  .portfolio-card {
    max-width: $max-width;
    margin: 32px auto;

    &__header {
      color: $theme-color;
      font-size: 28px;
      font-weight: 100;
      height: 56px;
    }

    &__content {
      align-items: center;
      display: flex;
      height: 280px;
      justify-content: center;
    }

    .content {
      align-items: center;
      display: flex;
      justify-content: flex-start;

      &__image {
        border-radius: 12px;
        height: 280px;
      }
      &__description {
        color: $text-color-normal;
        margin-left: 16px;
      }
    }

    &__app-link {
      margin-top: 16px;
    }

    .app-link {
      align-items: center;
      display: flex;
      justify-content: space-around;

      &__image {
        height: 48px;
      }
    }

    &__tech {
      margin-top: 16px;
    }
  }
}
</style>
