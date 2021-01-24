<template>
  <section class="strength-finder">
    <div class="strength">
      <p class="title">上位資質</p>
      <ol class="list">
        <li>調和性</li>
        <li>学習欲</li>
        <li>回復志向</li>
        <li>分析思考</li>
        <li>内省</li>
      </ol>
    </div>
    <div class="weakness">
      <p class="title">下位資質</p>
      <ol class="list">
        <li>コミュニケーション</li>
        <li>活発性</li>
        <li>戦略性</li>
        <li>競争性</li>
        <li>指令性</li>
      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* common css */
@import '../../styles/common';

.strength-finder {
  display: flex;
  justify-content: center;

  .title {
    font-size: 15px;
    margin-left: 8px;
  }

  .list {
    color: $text-color-normal;
    font-size: 14px;
    padding-right: 16px;
    width: 128px;
  }
}
</style>
