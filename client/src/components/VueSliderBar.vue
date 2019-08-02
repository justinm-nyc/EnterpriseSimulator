<template>
<div class="VueSlider">
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
        value: 3500,
        data: [
          2500,
          3500,
          5000
        ],
        range: [
          {
            label: '2500 Virtual Users'
          },
          {
            label: '3500 Virtual Users'
          },
          {
            label: '5000 Virtual Users'
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
