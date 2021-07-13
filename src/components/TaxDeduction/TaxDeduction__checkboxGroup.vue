<template>
  <div class="tax-deduction__checkbox-group">
    <div class="tax-deduction__checkbox-group-title">
      Итого можете внести в качестве досрочных:
    </div>
    <div
      v-for="(option, i) in options"
      :key="option.id"
    >
      <div class="tax-deduction__checkbox-container">
        <Checkbox class="tax-deduction__checkbox" />
        <span class="tax-deduction__amount">{{getAmount(option, i+1)}}</span>
        <span class="tax-deduction__per-year">{{getPerYear(option, i+1)}}</span>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import Checkbox from '../Checkbox.vue'
import {formatOption} from '../../utils/utils.js'
export default {
  props: { options: Array },
  components: { Checkbox },
  methods: {
    getAmount(option, year){
      return formatOption(option, year).amount
    },
    getPerYear(option, year){
      return formatOption(option, year).perYear
    }
  }
}
</script>

<style lang="scss" scoped>
.tax-deduction__checkbox-group{
  margin-top: 8px;
  & hr{
    border: none;
    border-top: 1px solid #DFE3E6;
  }
}
.tax-deduction__checkbox-group-title{
  font-weight: 500;
}
.tax-deduction__checkbox-container{
  margin: 16px 0px;
}
.tax-deduction__checkbox{
  margin-right: 11px;
}
.tax-deduction__per-year{
  color: #808080;
}
</style>
