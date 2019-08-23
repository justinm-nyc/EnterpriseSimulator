<template>
<main>
  <div id="app">
    <div class="gradient-overlay-half-dark-v3 bg-img-hero top-background-image title-div">
      <div class="col-md-12 center-block text-center">
        <h1 class="oracle-logo">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" fill="white" class="oracle-logo-icon" viewBox="1.659 3.393 65.353 8.196" aria-labelledby="oracle-logo-title">
            <title id="oracle-logo-title">Oracle ®</title>
            <path d="M28.86,8.725h4.164L30.825,5.18l-4.038,6.407l-1.841,0.002l4.916-7.695 c0.435-0.655,1.466-0.662,1.911-0.014l4.932,7.709l-1.841-0.002L34,10.155h-4.219L28.86,8.725L28.86,8.725z M47.964,10.157V3.473 h-1.561v7.337c0,0.203,0.082,0.397,0.227,0.542c0.153,0.151,0.355,0.235,0.572,0.235h7.116l0.917-1.43H47.964L47.964,10.157z M22.149,8.96c3.537,0,3.537-5.487,0-5.487H15.32v8.114h1.559V4.903h5.162c1.694,0,1.694,2.628,0,2.628l-4.397-0.002l4.656,4.058 h2.267l-3.133-2.628L22.149,8.96L22.149,8.96z M5.716,11.587c-2.209,0-4.057-1.846-4.057-4.056c0-2.21,1.847-4.058,4.057-4.058 h4.717c2.21,0,4.057,1.847,4.057,4.058c0,2.211-1.847,4.058-4.057,4.058L5.716,11.587L5.716,11.587z M10.328,10.158 c3.387,0,3.387-5.254,0-5.254L5.821,4.903c-3.388,0-3.388,5.255,0,5.255H10.328L10.328,10.158z M39.961,11.587 c-2.209,0-4.058-1.845-4.058-4.056c0-2.211,1.848-4.058,4.058-4.058h5.605l-0.919,1.431l-4.581-0.001c-3.389,0-3.39,5.255,0,5.255 h5.626l-0.916,1.429H39.961L39.961,11.587z M59.049,10.158c-1.201,0-2.217-0.808-2.527-1.909h6.67l0.919-1.431L56.52,6.817 c0.311-1.104,1.325-1.914,2.529-1.914l4.578,0.001l0.92-1.431h-5.605c-2.209,0-4.058,1.848-4.058,4.058 c0,2.211,1.849,4.056,4.058,4.056h4.815l0.917-1.429H59.049L59.049,10.158z"></path>
            <path d="M65.382,4.337c0-0.918,1.423-0.918,1.433,0C66.824,5.253,65.382,5.267,65.382,4.337L65.382,4.337 z M66.099,5.252c1.175,0,1.172-1.825,0-1.824C64.93,3.429,64.918,5.252,66.099,5.252L66.099,5.252z M66.013,3.799 c0.141,0,0.199,0.001,0.268,0.027c0.157,0.053,0.223,0.225,0.187,0.371c-0.01,0.038-0.033,0.117-0.127,0.175 c-0.01,0.008-0.016,0.013-0.045,0.024l0.237,0.425h-0.23L66.095,4.43h-0.138v0.391h-0.2V3.799H66.013L66.013,3.799z M66.085,4.261 c0.061-0.001,0.129-0.006,0.17-0.064c0.044-0.08,0.026-0.151-0.054-0.212c-0.046-0.018-0.093-0.018-0.188-0.018h-0.056v0.294 H66.085L66.085,4.261z"></path>
          </svg>
          Enterprise Simulator
        </h1>
      </div>
    </div>
    <div class="container">
      <div class= "process-div row mb-2">
        <div class="col-md-12"><h1> Choose a workload</h1></div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative app-buttons" v-bind:class="{ disable: loading }">
            <div class="col p-4 d-flex flex-column position-static hcare" v-bind:class="{ hcareSelected: isHealthCare }" v-on:click="setWorkload('healthCare')">
              <h3 class="mb-0">Health Care</h3>
              <img class="center" src="/images/healthcare.svg" alt="healthcare icon made by Freepik" height="100px" width="160px">
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative app-buttons" v-bind:class="{ disable: loading }">
            <div class="col p-4 d-flex flex-column position-static ecommerce" v-bind:class="{ ecommerceSelected: isEcommerce }" v-on:click="setWorkload('ecommerce')">
              <h3 class="mb-0">E-commerce</h3>
              <img class="center" src="/images/buy.svg" alt="healthcare icon made by Freepik" height="100px" width="160px">
            </div>
          </div>
        </div>
      </div>

      <div class="workload-profile-div process-div row mb-2"  v-bind:class="{ slideDown: workloadSelected }" v-if="chosenWorkload !=''">
        <div class="col-md-12"><h1> Choose a workload profile</h1></div>
        <div class="col-md-4">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative app-buttons" v-bind:class="{ disable: loading }">
            <div class="col p-4 d-flex flex-column position-static ramp" v-bind:class="{ rampSelected: isRamp }" v-on:click="setWorkloadProfile('ramp')">
              <h3 class="mb-0">Ramp</h3>
              <img class="center" src="/images/ramp.svg" alt="healthcare icon made by Freepik" height="100px" width="160px">
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative app-buttons" v-bind:class="{ disable: loading }">
            <div class="col p-4 d-flex flex-column position-static burst" v-bind:class="{ burstSelected: isBurst }" v-on:click="setWorkloadProfile('burst')">
              <h3 class="mb-0 center ">Burst</h3>
              <img class="center" src="/images/burst.svg" alt="burst icon made by Freepik" height="100px" width="160px">
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-md h-md-250 position-relative app-buttons">
            <div class="col p-4 d-flex flex-column position-static static" v-bind:class="{ staticSelected: isStatic }" v-on:click="setWorkloadProfile('static')">
              <h3 class="mb-0">Static</h3>
              <img class="center" src="/images/static.png" alt="healthcare icon made by Freepik" height="100px" width="160px">
            </div>
          </div>
        </div>
      </div>

      <!-- Parameter Selection For Burst and Ramp Workload Payload -->
      <div class="parameters-div row mb-2 justify-content-md-center"  v-bind:class="{ slideDown: workloadPayloadSelected }" v-if="chosenWorkloadProfile !='' && chosenWorkloadProfile ==='ramp' ">
        <div class="col-md-12"><h1> Choose the amount of virtual users</h1></div>

        <div v-bind:class="{ disable: loading }" class="col-md-12">
          <VueSliderBar @sliderValueChosen="updateWorkloadAmount"></VueSliderBar>
        </div>
      </div>

      <!-- Parameter Selection For Ramp Workload Payload -->
      <div class="parameters-div row mb-2 justify-content-md-center"  v-bind:class="{ slideDown: workloadPayloadSelected }" v-if="chosenWorkloadProfile !='' && chosenWorkloadProfile ==='static' ">
        <div class="col-md-12"><h1> Choose the amount of virtual users</h1></div>

        <div v-bind:class="{ disable: loading }" class="col-md-12">
          <VueSliderBar @sliderValueChosen="updateWorkloadAmount"></VueSliderBar>
        </div>

      </div>

      <!-- Parameter Selection For Burst Workload Payload -->
      <div class="parameters-div row mb-2 justify-content-md-center"  v-bind:class="{ slideDown: workloadPayloadSelected }" v-if="chosenWorkloadProfile !='' && chosenWorkloadProfile ==='burst' ">
        <div class="col-md-12"><h1> Choose the amount of virtual users</h1></div>

        <div v-bind:class="{ disable: loading }" class="col-md-12">
          <VueSliderBar @sliderValueChosen="updateWorkloadAmount"></VueSliderBar>
        </div>

      </div>
    </div>

    <div>
      <!-- Results for static workload profile -->
      <div class="results-div row mb-2 justify-content-md-center shadow-md" v-if="chosenWorkloadProfile === 'static' ">
          <div class="fetch-button" v-if="!loading" v-on:click="fetchResults()" >
              <p class="btnText">FETCH RESULTS</p>
              <div class="btnTwo">
                <p class="btnText2">GO!</p>
              </div>
          </div>

          <h3 class="col-md-12" v-if="loading">Fetching Results</h3>
          <div class="col-md-5 linear-progress-material" v-if="loading">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
          </div>

          <div class="col-md-12 artilleryResults">
            <h5 class="center"> {{ artilleryResults }} </h5>
          </div>
        </div>

    <!-- Results  for ramp Workload Payload -->
     <div class="results-div row mb-2 justify-content-md-center shadow-md" v-if="chosenWorkloadProfile === 'ramp' ">
          <div class="fetch-button" v-if="!loading" v-on:click="fetchResults()" >
              <p class="btnText">FETCH RESULTS</p>
              <div class="btnTwo">
                <p class="btnText2">GO!</p>
              </div>
          </div>

          <h3 class="col-md-12" v-if="loading">Fetching Results</h3>
          <div class="col-md-5 linear-progress-material" v-if="loading">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
          </div>

          <div class="col-md-12 artilleryResults">
            <h5 class="center"> {{ artilleryResults }} </h5>
          </div>
        </div>

    </div>

    <!-- Results for burst Workload Payload -->
     <div class="results-div row mb-2 justify-content-md-center shadow-md" v-if="chosenWorkloadProfile === 'burst' ">
          <div class="fetch-button" v-if="!loading" v-on:click="fetchResults()" >
              <p class="btnText">FETCH RESULTS</p>
              <div class="btnTwo">
                <p class="btnText2">GO!</p>
              </div>
          </div>

          <h3 class="col-md-12" v-if="loading">Fetching Results</h3>
          <div class="col-md-5 linear-progress-material" v-if="loading">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
          </div>

          <div class="col-md-12 artilleryResults">
            <h5 class="center"> {{ artilleryResults }} </h5>
          </div>
        </div>

     <Results @resultsFetched="stopLoading" ref="resultsComponent"></Results>
  </div>
  </main>

</template>

<script>

import axios from 'axios'
import VueSliderBar from './components/VueSliderBar.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    VueSliderBar,
    Results
  },
  data () {
    return {
      artilleryResults: null,
      chosenWorkload: '',
      chosenWorkloadProfile: '',
      workloadSelected: false,
      workloadPayloadSelected: false,
      isHealthCare: false,
      isEcommerce: false,
      isRamp: false,
      isStatic: false,
      isBurst: false,
      loading: false,
      minVU: null,
      maxVU: null,
      duration: null,
      workerAmount: null
    }
  },
  computed: {
    isMaxMoreThanMin: function () {
      if (this.maxVU != null && this.minVU != null && Number(this.maxVU) > Number(this.minVU)) {
        return true
      } else {
        return false
      }
    },
    isMinMoreThanZero: function () {
      if (this.minVU > 0) {
        return true
      } else {
        return false
      }
    },
    isDurationMoreThanFive: function () {
      if (this.duration > 5) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    fetchResults: function () {
      this.loading = true
      this.artilleryResults = null

      console.log('fetchResults called')
      if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'static' && this.workerAmount === 4500) {
        this.$refs.resultsComponent.getStaticHealthCareMaxWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'static' && this.workerAmount === 3000) {
        this.$refs.resultsComponent.getStaticHealthCareMidWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'static' && this.workerAmount === 1500) {
        this.$refs.resultsComponent.getStaticHealthCareLowWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'ramp' && this.workerAmount === 4500) {
        this.$refs.resultsComponent.getRampHealthCareMaxWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'ramp' && this.workerAmount === 3000) {
        this.$refs.resultsComponent.getRampHealthCareMidWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'ramp' && this.workerAmount === 1500) {
        this.$refs.resultsComponent.getRampHealthCareLowWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'burst' && this.workerAmount === 4500) {
        this.$refs.resultsComponent.getBurstHealthCareMaxWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'burst' && this.workerAmount === 3000) {
        this.$refs.resultsComponent.getBurstHealthCareMidWorkers()
      } else if (this.chosenWorkload === 'healthCare' && this.chosenWorkloadProfile === 'burst' && this.workerAmount === 1500) {
        this.$refs.resultsComponent.getBurstHealthCareLowWorkers()
      } else if (this.chosenWorkload === 'ecommerce' && this.chosenWorkloadProfile === 'static' && this.workerAmount === 1500) {
        console.log('getStaticEcommerceLowWorkers CALLED FROM APP.VUE')
        this.$refs.resultsComponent.getStaticEcommerceLowWorkers()
      }
      // if (this.chosenWorkloadProfile) {
      //   axios.get('http://localhost:3000/results/static/' + this.minVU + '/' + this.duration)
      //     .then(response => {
      //       this.loading = false
      //       this.artilleryResults = response.data

      //       if (this.artilleryResults.includes('All virtual users finished')) {
      //         var resultLen = this.artilleryResults.length
      //         this.artilleryResults = this.artilleryResults.slice(this.artilleryResults.indexOf('All virtual users finished'), resultLen)
      //       }

      //       console.log('artillery results: \n' + this.artilleryResults)
      //     }).catch(function (error) {
      //       console.error('fetchResults failed', error.toString())
      //     })
      // }
    },
    setWorkload: function (workload) {
      this.chosenWorkload = workload
      this.workloadSelected = true
      console.log(this.chosenWorkload + ' chosen')

      if (this.chosenWorkload === 'healthCare') {
        this.isHealthCare = true
        this.isEcommerce = false
      } else if (this.chosenWorkload === 'ecommerce') {
        this.isHealthCare = false
        this.isEcommerce = true
      }
    },
    setWorkloadProfile: function (workloadProfile) {
      this.chosenWorkloadProfile = workloadProfile
      this.workloadPayloadSelected = true
      console.log(this.chosenWorkloadProfile + ' chosen')

      if (this.chosenWorkloadProfile === 'ramp') {
        this.isRamp = true
        this.isBurst = false
        this.isStatic = false
      } else if (this.chosenWorkloadProfile === 'burst') {
        this.isRamp = false
        this.isBurst = true
        this.isStatic = false
      } else if (this.chosenWorkloadProfile === 'static') {
        this.isRamp = false
        this.isBurst = false
        this.isStatic = true
      }
    },
    updateWorkloadAmount (value) {
      this.workerAmount = value
    },
    stopLoading () {
      console.log('stopLoading called')
      this.loading = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
