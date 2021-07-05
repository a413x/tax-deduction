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
}
</style>
