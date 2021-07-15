<template>
  <div class="tag-group">
    <Tag
      v-for="(tag, i) in tags"
      :key="i"
      :active="activeIndex===i"
      class="tag-group__tag"
      @click="()=>onChange(i)"
    >
      {{tag.title}}
    </Tag>
  </div>
</template>

<script>
import Tag from './Tag.vue'
export default {
  props: { tags: Array },
  data(){
    return { activeIndex: 0 }
  },
  components: { Tag },
  methods: {
    onChange(i){
      this.activeIndex = i
      this.$emit('change', i)
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-group__tag:not(:last-child){
  margin-right: 16px;
}
</style>
