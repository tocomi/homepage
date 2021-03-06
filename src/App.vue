<template>
  <div class="main">
    <header class="header">
      <a class="header__link" href="#" v-scroll-to="'#eyecatch'">TOP</a>
      <a class="header__link" href="#" v-scroll-to="'#biography'">BIOGRAPHY</a>
      <a class="header__link" href="#" v-scroll-to="'#portfolio'">PORTFOLIO</a>
    </header>

    <main>
      <eyecatch />

      <section class="main-container">
        <div class="main-wrapper">
          <div id="biography" class="biography-container">
            <heading text="BIOGRAPHY" />
            <biography />
          </div>

          <div id="portfolio" class="portfolio-container">
            <heading text="PORTFOLIO" />
            <template v-for="artifact in artifacts">
              <portfolio
                class="portfolio__card"
                :artifact="artifact"
                :key="artifact.name"
              />
            </template>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span class="footer__text">Kenta TSUNEMI</span>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';

import Eyecatch from './components/organisms/Eyecatch.vue';
import Biography from './components/organisms/Biography.vue';
import Portfolio from './components/organisms/Portfolio.vue';
import Heading from './components/atoms/Heading.vue';

import { links } from './data/links';
import { histories } from './data/histories';
import { artifacts } from './data/artifacts';

const scrollReveal = ScrollReveal();
const scrollRevealOptions = {
  duration: 1600,
  viewFactor: 0.6,
  reset: false,
};

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

export default Vue.extend({
  name: 'App',
  components: {
    Biography,
    Eyecatch,
    Heading,
    Portfolio,
  },
  mounted() {
    scrollReveal.reveal('.portrait', scrollRevealOptions);
    scrollReveal.reveal('.about-me', scrollRevealOptions);
    scrollReveal.reveal('.content', scrollRevealOptions);
    scrollReveal.reveal('.heading', scrollRevealOptions);
    scrollReveal.reveal('.portfolio__card', scrollRevealOptions);
  },
  data() {
    return {
      histories,
      links,
      artifacts,
    };
  },
});
</script>

<style lang="scss">
/* import google font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700&display=swap');

/* common css */
@import './styles/common';

/* reset css */
body {
  font-family: 'Noto Sans', 'Noto Sans JP', sans-serif;
  margin: 0;
}

p {
  margin: 0;
}

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
    z-index: 10000;

    &__link {
      color: white;
      margin: 0 8px;
      text-decoration: none;
    }
  }

  .main-container {
    display: flex;
    justify-content: center;
  }

  .main-wrapper {
    max-width: $max-width;
    width: 100%;
  }

  .biography-container {
    margin-top: 96px;
    padding: 0 24px;
  }

  .history {
    margin: 0 auto;
    padding: 64px 0;
  }

  .history-content {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 80px auto;
    max-width: $max-width;

    &__icon {
      align-items: center;
      border: 0.2vw solid $theme-color;
      border-radius: 50%;
      color: $theme-color;
      display: flex;
      height: 80px;
      justify-content: center;
      width: 80px;
    }
  }

  .detail {
    margin-left: 56px;
    width: 336px;

    &__date {
      color: $text-color-weak;
    }

    &__description {
      color: $text-color-normal;
      margin-top: 4px;
    }
  }

  .portfolio-container {
    margin: 192px 0;
    padding: 0 16px;
  }

  .portfolio {
    &__card {
      margin-top: 120px;
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

@media screen and (max-width: $break-point) {
  .main {
    .about-me {
      margin: -32vh 0 0;
    }

    .history-content {
      justify-content: center;
    }

    .detail {
      margin: 16px 0 0;
      text-align: center;
      width: 392px;
    }
  }
}
</style>
