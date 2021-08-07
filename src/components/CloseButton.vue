<template>
  <div class="close-button" @click="$emit('close')">
    <img src="@/assets/close.svg"/>
  </div>
</template>

<style lang="scss" scoped>
.close-button{
  width: 40px;
  height: 40px;
  @include flex-center;
  cursor: pointer;
  @include media('max', 'sm'){
    width: 24px;
    height: 24px;
  }
}
.close-button img{
  @include media('max', 'sm'){
    width: 12px;
    height: 12px;
  }
}
</style>
