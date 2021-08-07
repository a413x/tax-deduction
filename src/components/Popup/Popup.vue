<template>
  <div class="popup" v-if="show">
    <div class="popup__background">
      <div class="popup__container">
        <div class="popup__inner">
          <CloseButton class="popup__close-button" @close="$emit('close')"/>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from '../CloseButton.vue'
export default {
  props: { show: Boolean },
  components: { CloseButton }
}
</script>

<style lang="scss" scoped>
  .popup{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
  }
  .popup__container{
    margin: auto;
    max-height: 100%;
    overflow: auto;
  }
  .popup__background{
    @include flex-center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
  }
  .popup__inner{
    position: relative;
    padding: 32px;
    background: white;
    border-radius: 30px;
    @include media('max', 'sm'){
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 32px 16px;
      border-radius: 0;
    }
  }
  .popup__close-button{
    position: absolute;
    top: 16px;
    right: 16px;
  }
</style>
