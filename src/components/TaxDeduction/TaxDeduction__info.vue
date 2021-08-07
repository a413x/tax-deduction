<template>
  <div class="tax-deduction__info">
    Используйте налоговый вычет чтобы погасить ипотеку досрочно.
    Размер налогового вычета составляет не более 13% от своего
    официального годового дохода.
  </div>
</template>

<style lang="scss" scoped>
.tax-deduction__info{
  margin-bottom: 24px;
  margin-right: 20px;
  font-weight: normal;
  color: #808080;
  @include media('max', 'sm'){
    font-size: 12px;
    line-height: 16px;
    margin-right: 0;
  }
}
</style>
