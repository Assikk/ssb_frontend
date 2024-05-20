<template>
  <div class="wrap">
  <input type="range" class="range" min="0" max="100" step="0.1" value="0">
  <div class="track">
    <div class="track-inner"></div>
  </div>
  <div class="thumb"></div>
</div>
</template>
<script>
export default {
  name: 'InputRangeCalculatorComponent',
  props: ['min', 'max', 'step'],
  methods: {
    change(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped>
/*Inut range*/
/*chrome*/
input[type="range"] {
  -webkit-appearance: none;
  background:  #FCE8E8;
  border-radius: 20px;
  height: 4px;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  border: none;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #FF1F1F;
  margin-top: -6px;
  position: relative;
  z-index: 10;
}
input[type="range"]:focus {
  outline: none;
}
/*opera*/
input[type="range"] {
  /*required for proper track sizing in FF*/
  width: 100%;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 5px;
  border: none;
  border-radius: 3px;
}
input[type="range"]::-moz-range-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #FF1F1F;
}
/*hide the outline behind the border*/
input[type="range"]:-moz-focusring {
  outline: 1px solid transparent;
  outline-offset: -1px;
}
</style>
