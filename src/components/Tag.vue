<template>
  <button
    class="tag"
    :class="{'tag_not-active': !active}"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: { active: Boolean }
}
</script>

<style lang="scss" scoped>
.tag{
  @include flex-center;
  display: inline-flex;
  font-weight: normal;
  padding: 6px 12px;
  background: $gradient-red;
  border-radius: 50px;
  border: none;
  color: white;
  cursor: pointer;
  &:active{
    background: $gradient-red;
    color: white;
  }
}
.tag_not-active{
  background: #EEF0F2;
  color: black;
  &:hover{
    background: $gray800;
    color: black;
  }
}
</style>
