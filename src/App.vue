<template>
  <div class="main">
    <div class="eyecatch">
      <span class="eyecatch__text">Kenta TSUNEMI</span>
    </div>

    <div class="history">
      <template v-for="i in 3">
        <div class="history-content" :key="i">
          <div class="history-content__icon" />
          <span>text</span>
        </div>
      </template>
    </div>

    <div class="portfolio">
      <template v-for="i in 3">
        <div class="portfolio-card" :key="i">
          <div class="portfolio-card__header">aaa</div>
          <div class="portfolio-card__content">bbb</div>
        </div>
      </template>
    </div>

    <div class="footer">
      <span class="footer__text">Kenta TSUNEMI</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style lang="scss">
/* reset css */
body {
  margin: 0;
}

$theme-color: #4db2c2;
$max-width: 480px;

.main {
  .eyecatch {
    align-items: center;
    background: linear-gradient($theme-color, #b4d1df);
    display: flex;
    justify-content: center;
    height: 480px;
    width: 100%;

    &__text {
      color: white;
      font-size: 32px;
    }
  }

  .history-content {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 32px auto;
    max-width: $max-width;

    &__icon {
      background: $theme-color;
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }
  }

  .portfolio-card {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    max-width: $max-width;
    margin: 32px auto;

    &__header {
      align-items: center;
      background: $theme-color;
      color: white;
      display: flex;
      height: 56px;
      justify-content: center;
    }

    &__content {
      align-items: center;
      display: flex;
      height: 280px;
      justify-content: center;
    }
  }

  .footer {
    align-items: center;
    background: linear-gradient($theme-color, #b4d1df);
    display: flex;
    justify-content: center;
    height: 360px;
    width: 100%;

    &__text {
      color: white;
      font-size: 32px;
    }
  }
}
</style>
