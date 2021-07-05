<template>
  <div class="close-button" @click="$emit('close')">
    <img src="@/assets/close.svg"/>
  </div>
</template>

<style lang="css" scoped>
.close-button{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
