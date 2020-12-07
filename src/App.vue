<template>
  <div class="main">
    <header class="header">
      <a class="header__link" href="#" v-scroll-to="'#eyecatch'">TOP</a>
      <a class="header__link" href="#" v-scroll-to="'#history'">HISTORY</a>
    </header>

    <div id="eyecatch" class="eyecatch">
      <div class="portrait">
        <img class="portrait__photo" src="./assets/portrait.png" />
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

    <div id="history" class="history">
      <template v-for="history in histories">
        <div class="history-content" :key="history.key">
          <div class="history-content__icon">
            <component :is="history.iconName" />
          </div>
          <div class="history-content__detail detail">
            <p class="detail__date">{{ history.date }}</p>
            <p class="detail__description">{{ history.description }}</p>
          </div>
        </div>
      </template>
      <!-- <job-history /> -->
    </div>

    <div class="portfolio">
      <portfolio />
    </div>

    <div class="footer">
      <span class="footer__text">Kenta TSUNEMI</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';

import CakeVariantIcon from 'vue-material-design-icons/CakeVariant.vue';
import DomainIcon from 'vue-material-design-icons/Domain.vue';
import SchoolIcon from 'vue-material-design-icons/School.vue';

import JobHistory from './components/organisms/JobHistory.vue';
import Portfolio from './components/organisms/Portfolio.vue';

import { links } from './data/links';
import { histories } from './data/histories';

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
    CakeVariantIcon,
    DomainIcon,
    SchoolIcon,
    Portfolio,
    JobHistory,
  },
  mounted() {
    scrollReveal.reveal('.portrait', scrollRevealOptions);
    scrollReveal.reveal('.about-me', scrollRevealOptions);
    scrollReveal.reveal('.history-content', scrollRevealOptions);
  },
  data() {
    return {
      histories,
      links,
    };
  },
});
</script>

<style lang="scss">
/* import google font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@100;300&display=swap');

/* common css */
@import './styles/common';

/* reset css */
body {
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
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
    }

    &__nickname {
      font-size: 20px;
      margin-top: -8px;
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

  .portfolio {
    margin-top: 128px;
    padding: 0 16px;
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
