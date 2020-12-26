<template>
  <div class="badge-wrapper">
    <div class="badge">
      <img class="badge__icon" :src="iconPath" />
      <span class="badge__text">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechBadgeAtom',
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.badge-wrapper {
  display: inline-block;

  &:nth-child(n + 2) {
    margin-left: 8px;
  }

  .badge {
    align-items: center;
    border-bottom: solid 2px $theme-color;
    display: flex;
    height: 24px;
    padding: 0 8px 0 4px;

    &__icon {
      height: 18px;
    }

    &__text {
      color: $text-color-normal;
      line-height: 1;
      margin-left: 4px;
    }
  }
}
</style>
