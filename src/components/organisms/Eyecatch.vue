<template>
  <div id="eyecatch" class="eyecatch">
    <div class="portrait">
      <img class="portrait__photo" src="../../assets/portrait.png" />
    </div>
    <div class="about-me">
      <p class="about-me__name">Kenta TSUNEMI</p>
      <p class="about-me__nickname">@tocomi</p>
      <p class="about-me__job">Web engineer</p>
      <div class="about-me__link link">
        <template v-for="link in links">
          <a :href="link.url" :alt="link.alt" :key="link.alt" target="_blank">
            <img :src="link.icon" class="link__icon" />
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { links } from '../../data/links';

export default Vue.extend({
  name: 'Eyecatch',
  data() {
    return {
      links,
    };
  },
});
</script>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.eyecatch {
  align-items: center;
  background: linear-gradient($theme-color, #5fbdc5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.portrait {
  &__photo {
    opacity: 0.8;
    width: 200px;
  }
}

.about-me {
  color: white;
  margin-left: 32px;
  width: 256px;

  &__name {
    font-size: 32px;
    font-weight: 700;
  }

  &__nickname {
    font-size: 20px;
    margin-top: -4px;
  }

  &__job {
    margin-top: 8px;
  }
}

.link {
  margin-top: 24px;

  &__icon {
    background-color: #eee;
    border: solid 1px #eee;
    border-radius: 50%;
    margin-right: 8px;
    width: 40px;
  }
}
</style>
