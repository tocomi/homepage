<template>
  <section class="strength-finder">
    <div class="strength">
      <p class="title">上位資質</p>
      <ol class="list pros">
        <li>調和性</li>
        <li>学習欲</li>
        <li>回復志向</li>
        <li>分析思考</li>
        <li>内省</li>
      </ol>
    </div>
    <div class="weakness">
      <p class="title">下位資質</p>
      <ol class="list cons">
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
    color: $text-color-normal;
    font-size: 15px;
    font-weight: 700;
    margin-left: 8px;
    text-align: center;
  }

  .list {
    color: $text-color-normal;
    font-size: 16px;
    padding-right: 16px;
    width: 144px;
  }

  .pros {
    width: 72px;
  }
}
</style>
