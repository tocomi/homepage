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
  &__text {
    color: $text-color-normal;
    font-size: 40px;
    font-weight: 700;
    line-height: 64px;
  }
}
</style>
