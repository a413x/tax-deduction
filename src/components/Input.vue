<template>
  <div class="input">
    <div class="input__label">{{label}}</div>
    <input
      type="text"
      class="input__input"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{'input__input_error': !valid}"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @keyup.enter="$emit('on-enter')"
    />
    <div class="input__error-msg" v-if="!valid">
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
}
.input__input{
  width: 100%;
  height: 40px;
  display: block;
  margin-top: 8px;
  padding: 8px 10px;
  border: 1px solid $gray800;
  box-sizing: border-box;
  border-radius: 3px;
  &::placeholder{
    color: $gray900;
  }
  &:hover{
    border-color: black;
  }
  &:focus{
    border-color: $gray800;
    outline: none;
  }
  &:disabled{
    color: #808080;
    border-color: #808080;
  }
}
.input__input_error{
  border-color: $red;
}
.input__error-msg{
  font-size: 10px;
  line-height: 12px;
  color: $red;
}
</style>
