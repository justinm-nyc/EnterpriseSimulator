<template>
<div class="VueSliderRamp">
    <VueSlideBar
        v-model="slider.value"
        :data="slider.data"
        :range="slider.range"
        :labelStyles="{ color: '#1066FD', backgroundColor: '#4a4a4a' }"
        :processStyle="{ backgroundColor: '#d8d8d8' }"
        @callbackRange="callbackRange"
        class="demo-demo"
        v-on:input="$emit('sliderValueChosen', slider.value)">
    <template slot="tooltip" slot-scope="tooltip">
        <img src="images/rectangle-slider.svg">
    </template>
    </VueSlideBar>
    <div>
        <h4>{{rangeValue.label}}</h4>
    </div>
</div>
</template>
<script>
import VueSlideBar from 'vue-slide-bar'
export default {
  name: 'WithLabel',
  components: {
    VueSlideBar
  },
  data () {
    return {
      rangeValue: {},
      slider: {
        value: 3000,
        data: [
          1500,
          3000,
          4500
        ],
        range: [
          {
            label: '~1,500 Virtual Users'
          },
          {
            label: '~3,000 Virtual Users'
          },
          {
            label: '~10,000 Virtual Users'
          }
        ]
      }
    }
  },
  methods: {
    callbackRange (val) {
      this.rangeValue = val
    }
  }
}
</script>