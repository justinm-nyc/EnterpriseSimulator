<template>
  <div class="results">
      <!--Chart Placement[2]-->
      <div id="chartDiv"></div>
  </div>

</template>

<script>

import axios from 'axios'
import config from '../config/config.js'

export default {
  name: 'Results',
  chartData: {
    type: 'bar', // Specify your chart type here.
    title: {
      text: 'My First Chart' // Adds a title to your chart
    },
    legend: {}, // Creates an interactive legend
    series: [ // Insert your series data here.
      { values: [35, 42, 67, 89] },
      { values: [28, 40, 39, 36] }
    ]
  },
  methods: {
    getStaticHealthCareMaxWorkers: function () {
      console.log('getStaticHealthCareMaxWorkers called')
      // 6 Insert Static Functions
      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 2 Update Static Functions
      axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 2 Read Static Functions
      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    getStaticHealthCareMidWorkers: function () {
      console.log('getStaticHealthCareMidWorkers called')
      // 3 Insert Static Functions
      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 2 Update Static Functions
      axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 2 Read Static Functions
      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    getStaticHealthCareLowWorkers: function () {
      console.log('getStaticHealthCareLowWorkers called')
      // 3 Insert Static Functions
      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 1 Update Static Functions
      axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 1 Read Static Functions
      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    }
  }

}
</script>
