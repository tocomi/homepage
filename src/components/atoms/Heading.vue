<template>
  <div class="heading">
    <h2 class="heading__text">{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HeadingAtom',
  props: {
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

.heading {
  align-items: center;
  display: flex;
  justify-content: center;

  &__text {
    color: $theme-color;
    border-bottom: solid 1px $theme-color;
    font-size: 32px;
    line-height: 64px;
    letter-spacing: 6px;
    text-align: center;
    width: 280px;
  }
}
</style>
