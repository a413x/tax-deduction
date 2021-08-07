<template>
  <Input
    placeholder="Введите данные"
    label="Ваша зарплата в месяц"
    :valid="valid"
    class="tax-deduction__input"
    @input="inputChange"
    @focus="inputFocus"
    @blur="inputBlur"
    @on-enter="$emit('enter')"
  />
</template>

<script>
import Input from '../Input.vue'
import {formatNumber} from '../../utils/utils.js'
const addition = ' ₽'
export default {
  props: { valid: Boolean },
  components: { Input },
  methods: {
    inputChange(e){
      const val = e.target.value
      const pos = e.target.selectionStart
      if(! new RegExp(/^\d+$/).test(val) || val <= 0){
        e.target.value = val.substring(0,pos-1) + val.substring(pos, val.length)
      }
      this.$emit('inputChange', e.target.value)
    },
    inputFocus(e){
      const val = e.target.value
      if(val === '') return
      if(val.includes(addition)) {
        e.target.value = val.slice(0, -addition.length).replace(/\s/g, '');
      }
    },
    inputBlur(e){
      const val = e.target.value
      if(val !== '') e.target.value = formatNumber(val) + addition
    }
  }
}
</script>
