<template>
  <div class="job-history-wrapper">
    <div class="job-history">
      <div class="name">
        <span>ワークス</span>
      </div>
      <div class="term">
        <span>2015.04 - 2019.09</span>
      </div>
      <div class="experiences">
        <div class="experience">
          <div class="title">
            <span>不具合修正</span>
          </div>
          <div class="description">
            <span>いろいろ</span>
          </div>
          <div class="skills">
            <span>あれこれ</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'JobHistory',
});
</script>

<style lang="scss">
$theme-color: #4da3b5;
$text-color-normal: #666;
$text-color-weak: #bbb;
$max-width: 480px;
$break-point: 520px;

.job-history-wrapper {
  display: flex;
  justify-content: center;

  .job-history {
    width: 90vw;
    color: $text-color-normal;
  }

  .name {
    background-color: $theme-color;
    color: white;
    text-align: center;
  }

  .term {
    text-align: center;
  }
}
</style>
