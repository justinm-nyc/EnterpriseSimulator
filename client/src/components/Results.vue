<template>
  <div>
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
      insertStackLow: [1, 2, 3],
      insertStackMid: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      insertStackHi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      staticUpdate200Total: 0,
      staticUpdate302Total: 0,
      staticUpdate503Total: 0,
      staticUpdate500Total: 0,
      updateStackLow: [1],
      updateStackMid: [1, 2],
      updateStackHi: [1, 2, 3],
      staticRead200Total: 0,
      staticRead302Total: 0,
      staticRead503Total: 0,
      staticRead500Total: 0,
      readStackLow: [1],
      readStackMid: [1, 2],
      readStackHi: [1, 2, 3]
    }
  },
  methods: {
    getStaticHealthCareMaxWorkers: async function () {
      console.log('getStaticHealthCareMaxWorkers called')
      // 6 Insert Static Functions
      await axios.get(config.insertStaticEndpoint200)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        }).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults2 = response.data
              console.log(artilleryResults2)
              this.messageResults = JSON.parse(artilleryResults2.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults3 = response.data
              console.log(artilleryResults3)
              this.messageResults = JSON.parse(artilleryResults3.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults4 = response.data
              console.log(artilleryResults4)
              this.messageResults = JSON.parse(artilleryResults4.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults5 = response.data
              console.log(artilleryResults5)
              this.messageResults = JSON.parse(artilleryResults5.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults6 = response.data
              console.log(artilleryResults6)
              this.messageResults = JSON.parse(artilleryResults6.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(

          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults7 = response.data
              console.log(artilleryResults7)
              this.messageResults = JSON.parse(artilleryResults7.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          // 2 Update Static Functions
          await axios.get(config.updateStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults8 = response.data
              console.log(artilleryResults8)
              this.messageResults = JSON.parse(artilleryResults8.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'update') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(

          await axios.get(config.updateStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults9 = response.data
              console.log(artilleryResults9)
              this.messageResults = JSON.parse(artilleryResults9.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'update') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(
          await axios.get(config.updateStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults10 = response.data
              console.log(artilleryResults10)
              this.messageResults = JSON.parse(artilleryResults10.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'update') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(
          // 2 Read Static Functions
          await axios.get(config.readStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResult11 = response.data
              console.log(artilleryResult11)
              this.messageResults = JSON.parse(artilleryResult11.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'read') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(
          await axios.get(config.readStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults12 = response.data
              console.log(artilleryResults12)
              this.messageResults = JSON.parse(artilleryResults12.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'read') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.readStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults13 = response.data
              console.log(artilleryResults13)
              this.messageResults = JSON.parse(artilleryResults13.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'read') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults14 = response.data
              console.log(artilleryResults14)
              this.messageResults = JSON.parse(artilleryResults14.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })

        ).then(

          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults15 = response.data
              console.log(artilleryResults15)
              this.messageResults = JSON.parse(artilleryResults15.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults16 = response.data
              console.log(artilleryResults16)
              this.messageResults = JSON.parse(artilleryResults16.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults17 = response.data
              console.log(artilleryResults17)
              this.messageResults = JSON.parse(artilleryResults17.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(

          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults18 = response.data
              console.log(artilleryResults18)
              this.messageResults = JSON.parse(artilleryResults18.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(

          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults19 = response.data
              console.log(artilleryResults19)
              this.messageResults = JSON.parse(artilleryResults19.body).message

              console.log('artillery results: \n' + this.getCodesHi(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        )
    },
    getStaticHealthCareMidWorkers: async function () {
      console.log('getStaticHealthCareMidWorkers called')
      // 3 Insert Static Functions
      await axios.get(config.insertStaticEndpoint200)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        }).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults2 = response.data
              console.log(artilleryResults2)
              this.messageResults = JSON.parse(artilleryResults2.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults3 = response.data
              console.log(artilleryResults3)
              this.messageResults = JSON.parse(artilleryResults3.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.updateStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults4 = response.data
              console.log(artilleryResults4)
              this.messageResults = JSON.parse(artilleryResults4.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'update') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          // 2 Read Static Functions
          await axios.get(config.readStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults5 = response.data
              console.log(artilleryResults5)
              this.messageResults = JSON.parse(artilleryResults5.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'read') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.readStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults6 = response.data
              console.log(artilleryResults6)
              this.messageResults = JSON.parse(artilleryResults6.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'read') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults7 = response.data
              console.log(artilleryResults7)
              this.messageResults = JSON.parse(artilleryResults7.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults8 = response.data
              console.log(artilleryResults8)
              this.messageResults = JSON.parse(artilleryResults8.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults9 = response.data
              console.log(artilleryResults9)
              this.messageResults = JSON.parse(artilleryResults9.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.updateStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults10 = response.data
              console.log(artilleryResults10)
              this.messageResults = JSON.parse(artilleryResults10.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'update') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults11 = response.data
              console.log(artilleryResults11)
              this.messageResults = JSON.parse(artilleryResults11.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults12 = response.data
              console.log(artilleryResults12)
              this.messageResults = JSON.parse(artilleryResults12.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint200)
            .then(response => {
              this.loading = false
              let artilleryResults12 = response.data
              console.log(artilleryResults12)
              this.messageResults = JSON.parse(artilleryResults12.body).message

              console.log('artillery results: \n' + this.getCodesMid(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        )
    },
    getStaticHealthCareLowWorkers: async function () {
      console.log('getStaticHealthCareLowWorkers called')
      // 3 Insert Static Functions
      await axios.get(config.insertStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getCodesLow(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        }).then(
          await axios.get(config.insertStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults2 = response.data
              console.log(artilleryResults2)
              this.messageResults = JSON.parse(artilleryResults2.body).message

              console.log('artillery results: \n' + this.getCodesLow(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          await axios.get(config.insertStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults3 = response.data
              console.log(artilleryResults3)
              this.messageResults = JSON.parse(artilleryResults3.body).message

              console.log('artillery results: \n' + this.getCodesLow(this.messageResults, 'insert') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          // 1 Update Static Functions
          await axios.get(config.updateStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults4 = response.data
              // console.log(this.artilleryResults)
              this.messageResults = JSON.parse(artilleryResults4.body).message

              console.log('artillery results: \n' + this.getCodesLow(this.messageResults, 'update') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        ).then(
          // 1 Read Static Functions
          await axios.get(config.readStaticEndpoint)
            .then(response => {
              this.loading = false
              let artilleryResults5 = response.data
              // console.log(this.artilleryResults)
              this.messageResults = JSON.parse(artilleryResults5.body).message

              console.log('artillery results: \n' + this.getCodesLow(this.messageResults, 'read') + '\n')
            }).catch(function (error) {
              console.error('fetchResults failed', error.toString())
            })
        )
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
    getCodesLow: function (results, transactionType) {
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

        this.insertStackLow.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertStackLow.length === 0) {
          console.log('InsertStackLow is empty')
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

        this.updateStackLow.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateStackLow.length === 0) {
          console.log('updateStackLow is empty')
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

        this.readStackLow.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readStackLow.length === 0) {
          console.log('ReadStack is empty')
          this.$refs.GraphRef.drawReadGraph(this.staticRead200Total, this.staticRead302Total, this.staticRead500Total, this.staticRead503Total)
        }
        return resultsArray3
      }
    },

    getCodesMid: function (results, transactionType) {
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

        this.insertStackMid.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertStackMid.length === 0) {
          console.log('insertStackMid is empty')
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

        this.updateStackMid.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateStackMid.length === 0) {
          console.log('updateStackMid is empty')
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

        this.readStackMid.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readStackMid.length === 0) {
          console.log('readStackMid is empty')
          this.$refs.GraphRef.drawReadGraph(this.staticRead200Total, this.staticRead302Total, this.staticRead500Total, this.staticRead503Total)
        }
        return resultsArray3
      }
    },

    getCodesHi: function (results, transactionType) {
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

        this.insertStackHi.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertStackHi.length === 0) {
          console.log('insertStackMid is empty')
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

        this.updateStackHi.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateStackHi.length === 0) {
          console.log('updateStackMid is empty')
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

        this.readStackHi.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readStackHi.length === 0) {
          console.log('readStackMid is empty')
          this.$refs.GraphRef.drawReadGraph(this.staticRead200Total, this.staticRead302Total, this.staticRead500Total, this.staticRead503Total)
        }
        return resultsArray3
      }
    }

  }

}
</script>
