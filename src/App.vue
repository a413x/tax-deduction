<template>
  <div id="app">
    <Button class="button_big button_stroke-white" @click="btnShowClick">
      Налоговый вычет
    </Button>
    <Popup :show="showPopup" @close="closePopup">
    </Popup>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue'
import Popup from '@/components/Popup/Popup.vue'
export default {
  name: 'app',
  data(){
    return {
      showPopup: false
    }
  },
  components: { Button, Popup },
  methods: {
    btnShowClick(){
      this.showPopup = true
    },
    closePopup(){
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss">
@import './fonts/LabGrotesque.css';
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
