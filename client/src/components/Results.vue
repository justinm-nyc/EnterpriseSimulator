<template>
  <div >
      <insertCodesGraph ref="GraphRef"></insertCodesGraph>
  </div>

</template>
<script>

import axios from 'axios'
import config from '../config/config.js'
import insertCodesGraph from './InsertCodesGraph.vue'

export default {
  name: 'Results',
  components: {
    insertCodesGraph
  },
  data () {
    return {
      staticInsert200Total: 0,
      staticInsert302Total: 0,
      staticInsert503Total: 0,
      staticInsert500Total: 0,
      insertStack: [1, 2, 3],
      staticUpdate200Total: 0,
      staticUpdate302Total: 0,
      staticUpdate503Total: 0,
      staticUpdate500Total: 0,
      updateStack: [1],
      staticRead200Total: 0,
      staticRead302Total: 0,
      staticRead503Total: 0,
      staticRead500Total: 0,
      readStack: [1]
    }
  },
  methods: {
    getStaticHealthCareMaxWorkers: async function () {
      console.log('getStaticHealthCareMaxWorkers called')
      // 6 Insert Static Functions
      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log(this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 2 Update Static Functions
      await axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      // 2 Read Static Functions
      await axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      await axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.artilleryResults)
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    getStaticHealthCareMidWorkers: async function () {
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

          console.log('artillery results: \n' + this.getCodes(this.artilleryResults))
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          this.artilleryResults = response.data

          console.log('artillery results: \n' + this.getCodes(this.artilleryResults))
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    getStaticHealthCareLowWorkers: async function () {
      console.log('getStaticHealthCareLowWorkers called')
      // 3 Insert Static Functions
      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getCodes(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults2 = response.data
          console.log(artilleryResults2)
          this.messageResults = JSON.parse(artilleryResults2.body).message

          console.log('artillery results: \n' + this.getCodes(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })

      axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults3 = response.data
          console.log(artilleryResults3)
          this.messageResults = JSON.parse(artilleryResults3.body).message

          console.log('artillery results: \n' + this.getCodes(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
      // // 1 Update Static Functions
      // axios.get(config.updateStaticEndpoint)
      //   .then(response => {
      //     this.loading = false
      //     let artilleryResults4 = response.data
      //     // console.log(this.artilleryResults)
      //     this.messageResults = JSON.parse(artilleryResults4.body).message

      //     console.log('artillery results: \n' + this.getCodes(this.messageResults, 'update') + '\n')
      //   }).catch(function (error) {
      //     console.error('fetchResults failed', error.toString())
      //   })

      // 1 Read Static Functions
      axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults5 = response.data
          // console.log(this.artilleryResults)
          this.messageResults = JSON.parse(artilleryResults5.body).message

          console.log('artillery results: \n' + this.getCodes(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    reduceToCodes: function (results) {
      var resultsArray = ''
      if (results.includes('All virtual users finished')) {
        let resultLen = results.length
        let regex1 = /\n\n/gi
        let regex2 = /\n {4}/gi
        let regex3 = / /gi
        resultsArray = results.slice(results.indexOf('All virtual users finished'), resultLen)
        resultsArray = resultsArray.slice(resultsArray.indexOf('Codes:'), resultLen)
        resultsArray = resultsArray.replace(regex1, '')
        resultsArray = resultsArray.replace(regex2, ':')
        resultsArray = resultsArray.replace(regex3, '')
        resultsArray = resultsArray.split(':')
        let almostFinalResultsArray = resultsArray.filter(function (value, index, arr) {
          return value !== ''
        })
        let finalResultsArray = almostFinalResultsArray.filter(function (value, index, arr) {
          return value !== 'Codes'
        })
        console.log(finalResultsArray)
        return finalResultsArray
      }
      return resultsArray
    },
    getCodes: function (results, transactionType) {
      console.log(results)
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.staticInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.staticInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.staticInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.staticInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('staticInsert200Total is ' + this.staticInsert200Total)
        console.log('staticInsert302Total is ' + this.staticInsert302Total)
        console.log('staticInsert500Total is ' + this.staticInsert500Total)
        console.log('staticInsert503Total is ' + this.staticInsert503Total)

        this.insertStack.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertStack.length === 0) {
          console.log('insertStack is empty')
          this.$refs.GraphRef.drawInsertGraph(this.staticInsert200Total, this.staticInsert302Total, this.staticInsert500Total, this.staticInsert503Total)
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.staticUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.staticUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.staticUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.staticUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('staticUpdate200Total is ' + this.staticUpdate200Total)
        console.log('staticUpdate302Total is ' + this.staticUpdate302Total)
        console.log('staticUpdate500Total is ' + this.staticUpdate500Total)
        console.log('staticUpdate503Total is ' + this.staticUpdate503Total)

        this.updateStack.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateStack.length === 0) {
          console.log('UpdateStack is empty')
          this.$refs.GraphRef.drawUpdateGraph(this.staticUpdate200Total, this.staticUpdate302Total, this.staticUpdate500Total, this.staticUpdate503Total)
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.staticRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.staticRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.staticRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.staticRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('staticRead200Total is ' + this.staticRead200Total)
        console.log('staticRead302Total is ' + this.staticRead302Total)
        console.log('staticRead500Total is ' + this.staticRead500Total)
        console.log('staticRead503Total is ' + this.staticRead503Total)

        this.readStack.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readStack.length === 0) {
          console.log('ReadStack is empty')
          this.$refs.GraphRef.drawReadGraph(this.staticRead200Total, this.staticRead302Total, this.staticRead500Total, this.staticRead503Total)
        }
        return resultsArray3
      }
    }
  }

}
</script>
