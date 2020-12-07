<template>
  <div class="badge-wrapper">
    <div class="badge">
      <img class="badge__icon" :src="icon" />
      <span class="badge__text">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechBadgeAtom',
  props: {
    icon: {
      type: Object,
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

  .badge {
    align-items: center;
    background-color: $theme-color;
    border-radius: 12px;
    display: flex;
    height: 24px;
    padding: 0 8px 0 4px;

    &__icon {
      border-radius: 10px;
      background-color: white;
      height: 18px;
    }

    &__text {
      color: white;
      line-height: 1;
      margin-left: 4px;
    }
  }
}
</style>
