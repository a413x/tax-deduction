<template>
  <button class="button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: { disabled: Boolean }
  }
</script>

<style lang="scss" scoped>
.button{
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  color: white;
}
.button:disabled, .button:disabled:hover{
  background: $gray;
  color: white;
  border: none;
  cursor: auto;
}
@import '@/components/Button/Button_text.scss';
@import '@/components/Button/Button_big.scss';
@import '@/components/Button/Button_small.scss';
@import '@/components/Button/Button_fill-red.scss';
@import '@/components/Button/Button_stroke-white.scss';
</style>
