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
@import '@/components/Button/Button-text.scss';
@import '@/components/Button/Button-big.scss';
@import '@/components/Button/Button-small.scss';
@import '@/components/Button/Button-fill-red.scss';
@import '@/components/Button/Button-stroke-white.scss';
</style>
