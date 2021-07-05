<template>
  <div id="app">
    <Button class="button_big button_stroke-white">Налоговый вычет</Button>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue'
export default {
  name: 'app',
  components: { Button }
}
</script>

<style lang="scss">
  #app{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lab Grotesque;
    font-style: normal;
    background: $gradient-red;
    box-shadow: 0px -0.11px 16.9495px rgba(183, 187, 225, 0.33);
    border-radius: 0px;
  }
</style>
