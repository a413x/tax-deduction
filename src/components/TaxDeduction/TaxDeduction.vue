<template>
  <div class="tax-deduction">
    <TaxDeduction__title />
    <TaxDeduction__info />
    <TaxDeduction__input :valid="valid" @inputChange="inputChange"/>
    <Button class="tax-deduction__calculate button_text" @click="calculate">
      Рассчитать
    </Button>
    <TaxDeduction__checkboxGroup :options="options" v-if="showOptions"/>
    <div class="tax-deduction__choice">
      Что уменьшаем?
      <TagGroup
        :tags="tags"
        class="tax-deduction__tag-group"
      />
    </div>
    <Button class="tax-deduction__button-add button_big button_fill-red">
      Добавить
    </Button>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'
import TaxDeduction__input from './TaxDeduction__input.vue'
import TagGroup from '../TagGroup.vue'
import TaxDeduction__title from './TaxDeduction__title.vue'
import TaxDeduction__info from './TaxDeduction__info.vue'
import TaxDeduction__checkboxGroup from './TaxDeduction__checkboxGroup.vue'
import {calculateOptions} from '../../utils/methods.js'
export default {
  data(){
    return {
      tags: [{title: 'Платёж'}, {title: 'Срок'}],
      salary: '',
      options: [],
      valid: true,
      showOptions: false
    }
  },
  components: {
    Button,
    TagGroup,
    TaxDeduction__input,
    TaxDeduction__title,
    TaxDeduction__info,
    TaxDeduction__checkboxGroup
  },
  methods: {
    inputChange(val){
      this.salary = val
    },
    calculate(){
      if(this.salary === ''){
        this.valid = false
        this.showOptions = false
        this.options = []
        return
      }
      this.valid = true
      this.showOptions = true
      this.options = calculateOptions(this.salary)
    }
  }
}
</script>

<style lang="scss" scoped>
.tax-deduction__calculate{
  margin: 8px 0px 8px 0px;
}
.tax-deduction__choice{
  margin-top: 16px;
  font-weight: 500;
  display: flex;
}
.tax-deduction__tag-group{
  margin-left: 16px;
}
.tax-deduction__button-add{
  width: 100%;
  margin-top: 40px;
}
</style>
