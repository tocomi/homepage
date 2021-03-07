<template>
  <div class="biography">
    <section class="content summary">
      <p class="summary__content">
        1992年生まれのWebエンジニア
      </p>
      <p class="summary__content">
        栃木 → 宮城 → 東京
      </p>
      <br />
      <p class="summary__content">
        ハンドルネームのtocomiは、
      </p>
      <p class="summary__content">
        名字を「とこみ」と読み間違えられたことに由来しています。
      </p>
    </section>
    <section class="content">
      <p class="heading">経歴</p>
      <separate-line />
      <template v-for="history in jobHistories">
        <div class="job" :key="history.term">
          <p class="job__term">
            <calendar-icon
              class="job__calendar-icon"
              :size="20"
              fillColor="#4da3b5"
            />
            {{ history.term }}
          </p>
          <template v-for="description in history.descriptions">
            <p class="job__content" :key="description">
              {{ description }}
            </p>
          </template>
        </div>
      </template>
    </section>
    <section class="content">
      <p class="heading">興味領域</p>
      <separate-line />
      <div class="list-wrapper">
        <ul class="list">
          <li>フロントエンド</li>
          <li>チーム開発</li>
          <li>スクラム開発</li>
          <li>組織カルチャー醸成</li>
          <li>テスタビリティ</li>
          <li>個人開発</li>
        </ul>
      </div>
    </section>
    <section class="content">
      <p class="heading">ストレングスファインダー</p>
      <separate-line />
      <div class="list-wrapper">
        <strength-finder />
      </div>
    </section>
    <section class="content">
      <p class="heading">趣味</p>
      <separate-line />
      <div class="list-wrapper">
        <ul class="list">
          <li>野球観戦</li>
          <li>競馬</li>
          <li>お笑い</li>
          <li>ランニング</li>
          <li>テレビゲーム</li>
          <li>邦楽ロック</li>
          <li>カラオケ</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';

import StrengthFinder from '../molecules/StrengthFinder.vue';
import SeparateLine from '../atoms/SeparateLine.vue';

import { jobHistories } from '../../data/jobHistories';

export default Vue.extend({
  name: 'Biography',
  components: {
    CalendarIcon,
    SeparateLine,
    StrengthFinder,
  },
  data() {
    return {
      jobHistories,
    };
  },
});
</script>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.biography {
  .content {
    margin-top: 256px;
  }

  .heading {
    color: $text-color-normal;
    font-size: 24px;
    font-weight: 700;
  }

  .summary {
    color: $text-color-normal;
    margin-top: 96px;

    &__content {
      font-size: 18px;
      margin-top: 8px;
    }
  }

  .job {
    margin-top: 96px;

    &__calendar-icon {
      margin: 8px 2px 0 0;
    }
    &__term {
      align-items: center;
      color: $text-color-normal;
      display: flex;
      font-size: 18px;
      font-weight: 700;
      justify-content: left;
      margin-bottom: 16px;
    }
    &__content {
      color: $text-color-normal;
      font-size: 16px;
      margin-top: 8px;
    }
  }

  .list-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .list {
    color: $text-color-normal;
    font-size: 16px;
    text-align: left;
    width: 144px;
  }
}
</style>
