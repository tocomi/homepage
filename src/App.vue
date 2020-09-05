<template>
  <div class="main">
    <header class="header">
      <span>a</span>
      <span>b</span>
      <span>c</span>
    </header>

    <div class="eyecatch">
      <div class="portrait">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
      </div>
      <div class="about-me">
        <span class="eyecatch__text">Kenta TSUNEMI</span>
      </div>
    </div>

    <div class="history">
      <template v-for="i in 3">
        <div class="history-content" :key="i">
          <div class="history-content__icon" />
          <span>text</span>
        </div>
      </template>
    </div>

    <!-- <div class="portfolio">
      <template v-for="i in 3">
        <div class="portfolio-card" :key="i">
          <div class="portfolio-card__header">aaa</div>
          <div class="portfolio-card__content">bbb</div>
        </div>
      </template>
    </div> -->

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

$theme-color: #4da3b5;
$max-width: 480px;

.main {
  .header {
    align-items: center;
    background: $theme-color;
    color: white;
    display: flex;
    height: 64px;
    justify-content: center;
    position: fixed;
    width: 100%;
  }

  .eyecatch {
    align-items: center;
    background: linear-gradient($theme-color, #5fbdc5);
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;

    &__text {
      color: white;
      font-size: 32px;
    }
  }

  .history {
    margin-top: 128px;
  }

  .history-content {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 128px auto;
    max-width: $max-width;

    &__icon {
      border: 3px solid $theme-color;
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }
  }

  .portfolio {
    margin-top: 128px;
    padding: 0 16px;
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
    background: linear-gradient($theme-color, #5fbdc5);
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
