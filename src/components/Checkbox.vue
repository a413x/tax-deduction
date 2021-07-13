<template>
  <label class="checkbox">
    <input
      type="checkbox"
      @change="$emit('input', $event.target.checked)"
      :disabled="disabled"
    >
    <span class="checkbox__input">
      <img src="@/assets/checkmark.svg" class="checkbox__checkmark"/>
    </span>
  </label>
</template>

<script>
export default{
  props: { disabled: Boolean }
}
</script>

<style lang="scss" scoped>
.checkbox{
  display:inline-block;
  width: 20px;
}
.checkbox input{
  display: none;
  width: 20px;
  margin: 0;
  &:checked ~ .checkbox__input{
    background: $gradient-red;
    border: none;
  }
  &:disabled ~ .checkbox__input{
    background: $gray;
    border: none;
    cursor: auto;
  }
}
.checkbox__input{
  @include flex-center;
  width: 20px;
  height: 20px;
  border: 1px solid #DFE3E6;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  &:hover{
    border-color: black;
  }
}
</style>
