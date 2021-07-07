<template>
  <div class="input">
    <div class="input__label">{{label}}</div>
    <input
      type="text"
      class="input__input"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{'input_error': !valid}"
      @input="$emit('input', $event)"
    />
    <div class="input__error" v-if="!valid">
      Поле обязательно для заполнения
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    disabled: Boolean,
    valid: Boolean
  }
}
</script>

<style lang="scss" scoped>
.input__label{
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.input__input{
  width: 100%;
  height: 40px;
  display: block;
  margin: 8px 0px 4px 0px;
  padding: 8px 10px;
  border: 1px solid #DFE3E6;
  box-sizing: border-box;
  border-radius: 3px;
}
.input__input::placeholder{
  color:#BEC5CC;
}
.input__input:hover{
  border-color: black;
}
.input__input:focus{
  border-color: #DFE3E6;
  outline: none;
}
.input_error{
  border-color: $red;
}
.input__error{
  font-size: 10px;
  line-height: 12px;
  color: $red;
}
</style>
