<template>
  <div class="biography">
    <section class="content">
      <p class="heading">興味領域</p>
      <div class="list-wrapper">
        <ul class="list">
          <li>フロントエンド</li>
          <li>テスタビリティ</li>
          <li>チーム開発</li>
          <li>スクラム開発</li>
          <li>組織カルチャー醸成</li>
          <li>個人開発</li>
        </ul>
      </div>
    </section>
    <section class="content">
      <p class="heading">ストレングスファインダー</p>
      <div class="list-wrapper">
        <strength-finder />
      </div>
    </section>
    <section class="content">
      <p class="heading">趣味</p>
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
import StrengthFinder from '../molecules/StrengthFinder.vue';

export default Vue.extend({
  name: 'Biography',
  components: {
    StrengthFinder,
  },
});
</script>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.biography {
  text-align: center;

  .content {
    margin-top: 64px;
  }

  .heading {
    color: $theme-color;
  }

  .list-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .list {
    color: $text-color-normal;
    font-size: 14px;
    text-align: left;
    width: 144px;
  }
}
</style>
