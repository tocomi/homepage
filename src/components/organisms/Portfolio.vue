<template>
  <div class="portfolio-wrapper">
    <div class="portfolio-card">
      <div class="portfolio-card__header">{{ artifact.name }}</div>
      <div class="portfolio-card__content content">
        <img class="content__image" :src="artifact.image" />
        <div class="content__description">
          <p
            v-for="description in artifact.descriptions"
            :key="description"
            class="line"
          >
            {{ description }}
          </p>
        </div>
      </div>
      <!-- Web App -->
      <div
        v-if="artifact.applicationLink || artifact.githubLink"
        class="portfolio-card__link link"
      >
        <a
          :href="artifact.applicationLink"
          target="_blank"
          class="link__app app"
        >
          <open-in-new :size="24" />
          <span class="app__label">Open App</span>
        </a>
        <a :href="artifact.githubLink" target="_blank" class="link__github">
          <img class="link__github-image" src="../../assets/tech/github.png" />
        </a>
      </div>
      <!-- Mobile App -->
      <div v-if="artifact.storeInfo" class="portfolio-card__app-link app-link">
        <a
          class="app-link__link"
          :href="artifact.storeInfo.appleLink"
          target="_blank"
        >
          <img class="app-link__image" :src="artifact.storeInfo.appleImage" />
        </a>
        <a
          class="app-link__link"
          :href="artifact.storeInfo.googleLink"
          target="_blank"
        >
          <img class="app-link__image" :src="artifact.storeInfo.googleImage" />
        </a>
      </div>
      <div class="portfolio-card__tech tech">
        <template v-for="technology in artifact.technologies">
          <tech-badge
            :icon-path="technology.image"
            :text="technology.name"
            :key="technology.name"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import OpenInNew from 'vue-material-design-icons/OpenInNew.vue';

import TechBadge from '../atoms/TechBadge.vue';

import { Artifact } from '../../data/artifacts';

export default Vue.extend({
  name: 'PortfolioComponent',
  components: {
    TechBadge,
    OpenInNew,
  },
  props: {
    artifact: {
      type: Object as PropType<Artifact>,
      required: true,
      default: {},
    },
  },
});
</script>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.portfolio-wrapper {
  .portfolio-card {
    max-width: $max-width;
    margin: 0 auto;

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
        border: solid 1px #eee;
        border-radius: 12px;
        height: 280px;
      }

      &__description {
        color: $text-color-normal;
        margin-left: 16px;
      }
    }

    .line {
      margin-top: 8px;
    }

    &__link {
      margin-top: 16px;
    }

    .link {
      display: flex;
      align-items: center;

      &__app {
        color: $theme-color;
        text-decoration: none;
      }

      .app {
        align-items: center;
        display: flex;

        &__label {
          font-size: 16px;
          margin: -4px 0 0 4px;
        }
      }

      &__github {
        margin-left: 16px;
      }

      &__github-image {
        height: 40px;
      }
    }

    &__app-link {
      margin-top: 16px;
    }

    .app-link {
      align-items: center;
      display: flex;
      justify-content: flex-start;

      &__link:nth-child(2) {
        margin-left: 12px;
      }

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
