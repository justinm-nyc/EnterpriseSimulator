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
      insertStackLow: [1, 2],
      insertStackMid: [1, 2, 3, 4],
      insertStackHi: [1, 2, 3, 4, 5, 6],
      staticUpdate200Total: 0,
      staticUpdate302Total: 0,
      staticUpdate503Total: 0,
      staticUpdate500Total: 0,
      updateStackLow: [1],
      updateStackMid: [1, 2],
      updateStackHi: [1, 2],
      staticRead200Total: 0,
      staticRead302Total: 0,
      staticRead503Total: 0,
      staticRead500Total: 0,
      readStackLow: [1],
      readStackMid: [1, 2],
      readStackHi: [1, 2],

      rampInsert200Total: 0,
      rampInsert302Total: 0,
      rampInsert503Total: 0,
      rampInsert500Total: 0,
      insertRampStackLow: [1, 2, 3],
      insertRampStackMid: [1, 2, 3, 4, 5, 6],
      insertRampStackHi: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      rampUpdate200Total: 0,
      rampUpdate302Total: 0,
      rampUpdate503Total: 0,
      rampUpdate500Total: 0,
      updateRampStackLow: [1],
      updateRampStackMid: [1, 2],
      updateRampStackHi: [1, 2, 3],
      rampRead200Total: 0,
      rampRead302Total: 0,
      rampRead503Total: 0,
      rampRead500Total: 0,
      readRampStackLow: [1],
      readRampStackMid: [1, 2],
      readRampStackHi: [1, 2, 3],

      burstInsert200Total: 0,
      burstInsert302Total: 0,
      burstInsert503Total: 0,
      burstInsert500Total: 0,
      insertBurstStackLow: [1, 2],
      insertBurstStackMid: [1, 2, 3, 4],
      insertBurstStackHi: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      burstUpdate200Total: 0,
      burstUpdate302Total: 0,
      burstUpdate503Total: 0,
      burstUpdate500Total: 0,
      updateBurstStackLow: [1],
      updateBurstStackMid: [1, 2],
      updateBurstStackHi: [1, 2, 3],
      burstRead200Total: 0,
      burstRead302Total: 0,
      burstRead503Total: 0,
      burstRead500Total: 0,
      readBurstStackLow: [1],
      readBurstStackMid: [1, 2],
      readBurstStackHi: [1, 2, 3],

      graphsShown: false,

      this: this

    }
  },
  methods: {

    // getStaticEcommerceLowWorkers: function () {
    //   console.log('getStaticEcommerceLowWorkers called')
    //   var date = new Date()
    //   console.log(date.toUTCString())

    //   // TOTAL OF 750 VIRTUAL USERS
    //   this.insertStaticLowEcommerce()
    //   setTimeout(this.insertStaticLowEcommerce, 1000)
    //   setTimeout(this.insertStaticLowEcommerce, 2000)

    //   this.readStaticLowEcommerce()
    //   // this.updateStaticLowEcommerce()
    // },

    // getStaticEcommerceMidWorkers: function () {
    //   console.log('getStaticEcommerceMidWorkers called')
    //   var date = new Date()
    //   console.log(date.toUTCString())
    //   // TOTAL OF 1500

    //   // this.updateStaticLowEcommerce()
    //   this.readStaticMidEcommerce()
    //   this.insertStaticMidEcommerce()
    //   setTimeout(this.insertStaticMidEcommerce, 2000)
    //   setTimeout(this.insertStaticMidEcommerce, 3000)

    //   // setTimeout(this.updateStaticLowEcommerce(), 70000)
    //   setTimeout(this.readStaticMidEcommerce, 70000)
    //   setTimeout(this.insertStaticMidEcommerce, 70000)
    //   setTimeout(this.insertStaticMidEcommerce, 70000)
    //   setTimeout(this.insertStaticMidEcommerce, 70000)
    // },

    // getStaticEcommerceHiWorkers: function () {
    //   console.log('getStaticEcommerceHiWorkers called')
    //   var date = new Date()
    //   console.log(date.toUTCString())
    //   // TOTAL OF 2200

    //   // this.updateStaticLowEcommerce()
    //   this.readStaticHiEcommerce()
    //   this.insertStaticHiEcommerce()
    //   setTimeout(this.insertStaticHiEcommerce, 2000)
    //   setTimeout(this.insertStaticHiEcommerce, 3000)

    //   // setTimeout(this.updateStaticLowEcommerce(), 70000)
    //   setTimeout(this.readStaticHiEcommerce, 70000)
    //   setTimeout(this.insertStaticHiEcommerce, 70000)
    //   setTimeout(this.insertStaticHiEcommerce, 70000)
    //   setTimeout(this.insertStaticHiEcommerce, 70000)

    //   // setTimeout(this.updateStaticLowEcommerce(), 140000)
    //   setTimeout(this.readStaticHiEcommerce, 140000)
    //   setTimeout(this.insertStaticHiEcommerce, 140000)
    //   setTimeout(this.insertStaticHiEcommerce, 140000)
    //   setTimeout(this.insertStaticHiEcommerce, 140000)
    // },

    // getRampEcommerceLowWorkers: async function () {
    //   console.log('getRampEcommerceLowWorkers called')
    //   // 3 Insert Static Functions
    //   this.insertRampLowEcommerce()
    //   this.insertRampLowEcommerce()
    //   this.insertRampLowEcommerce()
    //   this.readRampLowEcommerce()
    //   // this.updateRampLowEcommerce()
    // },
    // getRampEcommerceMidWorkers: async function () {
    //   console.log('getRampEcommerceMidWorkers called')
    //   // 6 Insert Static Functions
    //   this.insertRampLowEcommerce()
    //   this.insertRampLowEcommerce()
    //   this.insertRampLowEcommerce()
    //   this.readRampLowEcommerce()
    //   // this.updateRampLowEcommerce()

    //   setTimeout(this.insertRampLowEcommerce, 140000)
    //   setTimeout(this.insertRampLowEcommerce, 140000)
    //   setTimeout(this.insertRampLowEcommerce, 140000)

    //   this.readRampLowEcommerce()
    //   // this.updateRampLowEcommerce()
    // },

    // getBurstEcommerceLowWorkers: async function () {
    //   console.log('getBurstEcommerceLowWorkers called')
    //   // 6 Insert Static Functions
    //   this.insertBurstLowEcommerce()
    //   this.insertBurstLowEcommerce()
    //   this.insertBurstLowEcommerce()
    //   this.readBurstLowEcommerce()
    //   // this.updateBurstLowEcommerce()
    // },
    //* **************Healthcare***************************
    getStaticHealthCareLowWorkers: async function () {
      console.log('getStaticHealthCareLowWorkers called')
      var date = new Date()
      console.log(date.toUTCString())

      this.readStaticLow()
      this.updateStaticLow()
      this.insertStaticLow450()
      this.insertStaticLow450()
    },
    getStaticHealthCareMidWorkers: async function () {
      console.log('getStaticHealthCareMidWorkers called')
      var date = new Date()
      console.log(date.toUTCString())

      this.readStaticMid()
      this.updateStaticMid()
      this.insertStaticMid450()
      this.insertStaticMid450()

      setTimeout(this.readStaticMid, 85000)
      setTimeout(this.insertStaticMid450, 85000)
      setTimeout(this.insertStaticMid450, 145000)
      setTimeout(this.updateStaticMid, 145000)
    },
    getStaticHealthCareMaxWorkers: async function () {
      console.log('getStaticHealthCareMaxWorkers called')
      // 6 Insert Static Functions
      var date = new Date()
      console.log(date.toUTCString())

      this.readStaticHi()
      this.updateStaticHi()
      this.insertStaticHi450()
      this.insertStaticHi450()

      setTimeout(this.readStaticHi, 85000)
      setTimeout(this.insertStaticHi450, 85000)
      setTimeout(this.insertStaticHi450, 145000)
      setTimeout(this.updateStaticHi, 145000)

      setTimeout(this.updateStaticHi, 260000)
      setTimeout(this.insertStaticHi600, 260000)
      setTimeout(this.insertStaticHi600, 260000)
      setTimeout(this.readStaticHi, 260000)
    },

    getRampHealthCareLowWorkers: async function () {
      console.log('getRampHealthCareLowWorkers called')
      var date = new Date()
      console.log(date.toUTCString())
      await this.readRampLow()
      await this.updateRampLow()
      await this.insertRampLow()
      await this.insertRampLow()
      this.insertRampLow()
    },
    getRampHealthCareMidWorkers: async function () {
      console.log('getRampHealthCareMidWorkers called')
      var date = new Date()
      console.log(date.toUTCString())

      await this.readRampMid()
      await this.updateRampMid()
      await this.insertRampMid()
      await this.insertRampMid()
      await this.insertRampMid()

      await this.readRampMid()
      await this.updateRampMid()
      await this.insertRampMid()
      await this.insertRampMid()
      this.insertRampMid()
    },

    getRampHealthCareMaxWorkers: async function () {
      console.log('getRampStaticHealthCareMaxWorkers called')
      var date = new Date()
      console.log(date.toUTCString())

      await this.readRampHi()
      await this.updateRampHi()
      await this.insertRampHi()
      await this.insertRampHi()
      await this.insertRampHi()

      await this.readRampHi()
      await this.updateRampHi()
      await this.insertRampHi()
      await this.insertRampHi()
      await this.insertRampHi()

      await this.readRampHi()
      await this.updateRampHi()
      await this.insertRampHi()
      await this.insertRampHi()
      this.insertRampHi()
    },

    getBurstHealthCareLowWorkers: async function () {
      console.log('getBurstHealthCareLowWorkers called')
      var date = new Date()
      console.log(date.toUTCString())
      this.insertBurstLow()
      this.insertBurstLow()
      this.readBurstLow()
      this.updateBurstLow()
    },
    getBurstHealthCareMidWorkers: async function () {
      console.log('getBurstHealthCareMidWorkers called')
      var date = new Date()
      console.log(date.toUTCString())

      // Total 3000 Virtual users
      this.insertBurstMid()
      this.insertBurstMid()
      this.readBurstMid()
      this.updateBurstMid()

      setTimeout(this.insertBurstMid, 85000)
      setTimeout(this.updateBurstMid, 85000)
      setTimeout(this.readBurstMid, 85000)
      setTimeout(this.insertBurstMid, 85000)
    },

    getBurstHealthCareMaxWorkers: async function () {
      console.log('getBurstStaticHealthCareMaxWorkers called')
      // 6 Insert Static Functions
      var date = new Date()
      console.log(date.toUTCString())

      this.insertBurstHi()
      this.insertBurstHi()
      this.insertBurstHi()
      this.readBurstHi()
      this.updateBurstHi()
      setTimeout(this.insertBurstHi, 130000)
      setTimeout(this.insertBurstHi, 130000)
      setTimeout(this.insertBurstHi, 130000)
      setTimeout(this.readBurstHi, 130000)
      setTimeout(this.updateBurstHi, 130000)
      setTimeout(this.insertBurstHi, 250000)
      setTimeout(this.insertBurstHi, 250000)
      setTimeout(this.insertBurstHi, 250000)
      setTimeout(this.readBurstHi, 250000)
      setTimeout(this.updateBurstHi, 250000)
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

        if (resultsArray.includes('Errors')) {
          var resultsArrayLen = resultsArray.length
          var errorsString = resultsArray.slice(resultsArray.indexOf('Errors:'), resultsArrayLen)
          resultsArray = resultsArray.slice(0, -errorsString.length)
        }

        resultsArray = resultsArray.split(':')
        // var len = data.message.length
        // var newMessage = data.message.slice(data.message.indexOf('Errors:'), len)
        // data.message = data.message.slice(0,-(newMessage.length))

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
    getStaticCodesLow: function (results, transactionType) {
      // 2 minutes
      var self = this
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
          if (this.updateStackLow.length === 0 && this.readStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
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
          if (this.readStackLow.length === 0 && this.insertStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
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
          console.log('ReadStackLow is empty')
          if (this.updateStackLow.length === 0 && this.insertStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
        }
        return resultsArray3
      }
    },
    getStaticCodesMid: function (results, transactionType) {
      console.log(results)
      var self = this
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
        console.log(this.insertStackMid.length)
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertStackMid.length === 0) {
          console.log('insertStackMid is empty')
          if (this.updateStackMid.length === 0 && this.readStackMid.length === 0) {
            console.log('updateStackMid is empty and readStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
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
          if (this.readStackMid.length === 0 && this.insertStackMid.length === 0) {
            console.log('readStackMid is empty and insertStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
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
          if (this.updateStackMid.length === 0 && this.insertStackMid.length === 0) {
            console.log('updateStackMid is empty and insertStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
        }
        return resultsArray3
      }
    },
    getStaticCodesHi: function (results, transactionType) {
      console.log(results)
      var self = this
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
        console.log(this.insertStackHi.length)
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertStackHi.length === 0) {
          console.log('insertStackHi is empty')
          if (this.updateStackHi.length === 0 && this.readStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
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
          console.log('updateStackHi is empty')
          if (this.readStackHi.length === 0 && this.insertStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
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
          console.log('readStackHi is empty')
          if (this.updateStackHi.length === 0 && this.insertStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityStep2()
            })
          }
        }
        return resultsArray3
      }
    },

    getRampCodesLow: function (results, transactionType) {
      // 2 minutes
      var self = this
      console.log(results)
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.rampInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.rampInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.rampInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.rampInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('rampInsert200Total is ' + this.rampInsert200Total)
        console.log('rampInsert302Total is ' + this.rampInsert302Total)
        console.log('rampInsert500Total is ' + this.rampInsert500Total)
        console.log('rampInsert503Total is ' + this.rampInsert503Total)

        this.insertRampStackLow.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertRampStackLow.length === 0) {
          console.log('InsertRampStackLow is empty')
          if (this.updateRampStackLow.length === 0 && this.readRampStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.rampUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.rampUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.rampUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.rampUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('rampUpdate200Total is ' + this.rampUpdate200Total)
        console.log('rampUpdate302Total is ' + this.rampUpdate302Total)
        console.log('rampUpdate500Total is ' + this.rampUpdate500Total)
        console.log('rampUpdate503Total is ' + this.rampUpdate503Total)

        this.updateRampStackLow.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateRampStackLow.length === 0) {
          console.log('updateRampStackLow is empty')
          if (this.readRampStackLow.length === 0 && this.insertRampStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.rampRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.rampRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.rampRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.rampRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('rampRead200Total is ' + this.rampRead200Total)
        console.log('rampRead302Total is ' + this.rampRead302Total)
        console.log('rampRead500Total is ' + this.rampRead500Total)
        console.log('rampRead503Total is ' + this.rampRead503Total)

        this.readRampStackLow.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readRampStackLow.length === 0) {
          console.log('ReadStackLow is empty')
          if (this.updateRampStackLow.length === 0 && this.insertRampStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray3
      }
    },
    getRampCodesMid: function (results, transactionType) {
      console.log(results)
      var self = this
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.rampInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.rampInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.rampInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.rampInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('rampInsert200Total is ' + this.rampInsert200Total)
        console.log('rampInsert302Total is ' + this.rampInsert302Total)
        console.log('rampInsert500Total is ' + this.rampInsert500Total)
        console.log('rampInsert503Total is ' + this.rampInsert503Total)

        this.insertRampStackMid.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertRampStackMid.length === 0) {
          console.log('insertStackMid is empty')
          if (this.updateRampStackMid.length === 0 && this.readRampStackMid.length === 0) {
            console.log('updateRampStackMid is empty and readRampStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.rampUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.rampUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.rampUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.rampUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('rampUpdate200Total is ' + this.rampUpdate200Total)
        console.log('rampUpdate302Total is ' + this.rampUpdate302Total)
        console.log('rampUpdate500Total is ' + this.rampUpdate500Total)
        console.log('rampUpdate503Total is ' + this.rampUpdate503Total)

        this.updateRampStackMid.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateRampStackMid.length === 0) {
          console.log('updateRampStackMid is empty')
          if (this.readRampStackMid.length === 0 && this.insertRampStackMid.length === 0) {
            console.log('readRampStackMid is empty and insertRampStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.rampRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.rampRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.rampRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.rampRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('rampRead200Total is ' + this.rampRead200Total)
        console.log('rampRead302Total is ' + this.rampRead302Total)
        console.log('rampRead500Total is ' + this.rampRead500Total)
        console.log('rampRead503Total is ' + this.rampRead503Total)

        this.readRampStackMid.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readRampStackMid.length === 0) {
          console.log('readRampStackMid is empty')
          if (this.updateRampStackMid.length === 0 && this.insertRampStackMid.length === 0) {
            console.log('updateRampStackMid is empty and insertRampStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray3
      }
    },

    getRampCodesHi: function (results, transactionType) {
      console.log(results)
      var self = this
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.rampInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.rampInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.rampInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.rampInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('rampInsert200Total is ' + this.rampInsert200Total)
        console.log('rampInsert302Total is ' + this.rampInsert302Total)
        console.log('rampInsert500Total is ' + this.rampInsert500Total)
        console.log('rampInsert503Total is ' + this.rampInsert503Total)

        this.insertRampStackHi.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertRampStackHi.length === 0) {
          console.log('insertRampStackHi is empty')
          if (this.updateRampStackHi.length === 0 && this.readRampStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.rampUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.rampUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.rampUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.rampUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('rampUpdate200Total is ' + this.rampUpdate200Total)
        console.log('rampUpdate302Total is ' + this.rampUpdate302Total)
        console.log('rampUpdate500Total is ' + this.rampUpdate500Total)
        console.log('rampUpdate503Total is ' + this.rampUpdate503Total)

        this.updateRampStackHi.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateRampStackHi.length === 0) {
          console.log('updateRampStackHi is empty')
          if (this.readRampStackHi.length === 0 && this.insertRampStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.rampRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.rampRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.rampRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.rampRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('rampRead200Total is ' + this.rampRead200Total)
        console.log('rampRead302Total is ' + this.rampRead302Total)
        console.log('rampRead500Total is ' + this.rampRead500Total)
        console.log('rampRead503Total is ' + this.rampRead503Total)

        this.readRampStackHi.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readRampStackHi.length === 0) {
          console.log('readRampStackHi is empty')
          if (this.updateRampStackHi.length === 0 && this.insertRampStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityRampStep2()
            })
          }
        }
        return resultsArray3
      }
    },

    getBurstCodesLow: function (results, transactionType) {
      // 2 minutes
      var self = this
      console.log(results)
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.burstInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.burstInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.burstInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.burstInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('burstInsert200Total is ' + this.burstInsert200Total)
        console.log('burstInsert302Total is ' + this.burstInsert302Total)
        console.log('burstInsert500Total is ' + this.burstInsert500Total)
        console.log('burstInsert503Total is ' + this.burstInsert503Total)

        this.insertBurstStackLow.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertBurstStackLow.length === 0) {
          console.log('InsertBurstStackLow is empty')
          if (this.updateBurstStackLow.length === 0 && this.readBurstStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.burstUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.burstUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.burstUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.burstUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('burstUpdate200Total is ' + this.burstUpdate200Total)
        console.log('burstUpdate302Total is ' + this.burstUpdate302Total)
        console.log('burstUpdate500Total is ' + this.burstUpdate500Total)
        console.log('burstUpdate503Total is ' + this.burstUpdate503Total)

        this.updateBurstStackLow.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateBurstStackLow.length === 0) {
          console.log('updateBurstStackLow is empty')
          if (this.readBurstStackLow.length === 0 && this.insertBurstStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.burstRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.burstRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.burstRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.burstRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('burstRead200Total is ' + this.burstRead200Total)
        console.log('burstRead302Total is ' + this.burstRead302Total)
        console.log('burstRead500Total is ' + this.burstRead500Total)
        console.log('burstRead503Total is ' + this.burstRead503Total)

        this.readBurstStackLow.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readBurstStackLow.length === 0) {
          console.log('ReadStackLow is empty')
          if (this.updateBurstStackLow.length === 0 && this.insertBurstStackLow.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray3
      }
    },
    getBurstCodesMid: function (results, transactionType) {
      console.log(results)
      var self = this
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.burstInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.burstInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.burstInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.burstInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('burstInsert200Total is ' + this.burstInsert200Total)
        console.log('burstInsert302Total is ' + this.burstInsert302Total)
        console.log('burstInsert500Total is ' + this.burstInsert500Total)
        console.log('burstInsert503Total is ' + this.burstInsert503Total)

        this.insertBurstStackMid.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertBurstStackMid.length === 0) {
          console.log('insertStackMid is empty')
          if (this.updateBurstStackMid.length === 0 && this.readBurstStackMid.length === 0) {
            console.log('updateBurstStackMid is empty and readBurstStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.burstUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.burstUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.burstUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.burstUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('burstUpdate200Total is ' + this.burstUpdate200Total)
        console.log('burstUpdate302Total is ' + this.burstUpdate302Total)
        console.log('burstUpdate500Total is ' + this.burstUpdate500Total)
        console.log('burstUpdate503Total is ' + this.burstUpdate503Total)

        this.updateBurstStackMid.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateBurstStackMid.length === 0) {
          console.log('updateBurstStackMid is empty')
          if (this.readBurstStackMid.length === 0 && this.insertBurstStackMid.length === 0) {
            console.log('readBurstStackMid is empty and insertBurstStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.burstRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.burstRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.burstRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.burstRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('burstRead200Total is ' + this.burstRead200Total)
        console.log('burstRead302Total is ' + this.burstRead302Total)
        console.log('burstRead500Total is ' + this.burstRead500Total)
        console.log('burstRead503Total is ' + this.burstRead503Total)

        this.readBurstStackMid.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readBurstStackMid.length === 0) {
          console.log('readBurstStackMid is empty')
          if (this.updateBurstStackMid.length === 0 && this.insertBurstStackMid.length === 0) {
            console.log('updateBurstStackMid is empty and insertBurstStackMid is empty')
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray3
      }
    },

    getBurstCodesHi: function (results, transactionType) {
      console.log(results)
      var self = this
      if (transactionType === 'insert') {
        var resultsArray1 = this.reduceToCodes(results)
        for (var i = 0; i < resultsArray1.length; i = i + 2) {
          if (resultsArray1[i] === '200') {
            this.burstInsert200Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '302') {
            this.burstInsert302Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '503') {
            this.burstInsert503Total += parseInt(resultsArray1[i + 1])
          } else if (resultsArray1[i] === '500') {
            this.burstInsert500Total += parseInt(resultsArray1[i + 1])
          }
        }
        console.log('burstInsert200Total is ' + this.burstInsert200Total)
        console.log('burstInsert302Total is ' + this.burstInsert302Total)
        console.log('burstInsert500Total is ' + this.burstInsert500Total)
        console.log('burstInsert503Total is ' + this.burstInsert503Total)

        this.insertBurstStackHi.pop()
        // If insertStack is empty then all requests have been completed and the graphs can be updated
        if (this.insertBurstStackHi.length === 0) {
          console.log('insertBurstStackHi is empty')
          if (this.updateBurstStackHi.length === 0 && this.readBurstStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray1
      } else if (transactionType === 'update') {
        var resultsArray2 = this.reduceToCodes(results)

        for (var j = 0; j < resultsArray2.length; j = j + 2) {
          if (resultsArray2[j] === '200') {
            this.burstUpdate200Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '302') {
            this.burstUpdate302Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '503') {
            this.burstUpdate503Total += parseInt(resultsArray2[j + 1])
          } else if (resultsArray2[j] === '500') {
            this.burstUpdate500Total += parseInt(resultsArray2[j + 1])
          }
        }
        console.log('burstUpdate200Total is ' + this.burstUpdate200Total)
        console.log('burstUpdate302Total is ' + this.burstUpdate302Total)
        console.log('burstUpdate500Total is ' + this.burstUpdate500Total)
        console.log('burstUpdate503Total is ' + this.burstUpdate503Total)

        this.updateBurstStackHi.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.updateBurstStackHi.length === 0) {
          console.log('updateBurstStackHi is empty')
          if (this.readBurstStackHi.length === 0 && this.insertBurstStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray2
      } else if (transactionType === 'read') {
        var resultsArray3 = this.reduceToCodes(results)
        for (var k = 0; k < resultsArray3.length; k = k + 2) {
          if (resultsArray3[k] === '200') {
            this.burstRead200Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '302') {
            this.burstRead302Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '503') {
            this.burstRead503Total += parseInt(resultsArray3[k + 1])
          } else if (resultsArray3[k] === '500') {
            this.burstRead500Total += parseInt(resultsArray3[k + 1])
          }
        }
        console.log('burstRead200Total is ' + this.burstRead200Total)
        console.log('burstRead302Total is ' + this.burstRead302Total)
        console.log('burstRead500Total is ' + this.burstRead500Total)
        console.log('burstRead503Total is ' + this.burstRead503Total)

        this.readBurstStackHi.pop()
        // If UpdateStack is empty then all requests have been completed and the graphs can be updated
        if (this.readBurstStackHi.length === 0) {
          console.log('readBurstStackHi is empty')
          if (this.updateBurstStackHi.length === 0 && this.insertBurstStackHi.length === 0) {
            this.triggerGraphVisibilityStep1().then(function () {
              self.triggerGraphVisibilityBurstStep2()
            })
          }
        }
        return resultsArray3
      }
    },

    triggerGraphVisibilityStep1 () {
      console.log('triggerGraphVisibilityStep1 called')
      let result1 = this.$refs.GraphRef.changeShowGraphs()
      this.graphsShown = true

      return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(result1), 1000)
      })
    },
    triggerGraphVisibilityStep2 () {
      console.log('triggerGraphVisibilityStep2 called')
      this.$refs.GraphRef.drawReadGraph(this.staticRead200Total, this.staticRead302Total, this.staticRead500Total, this.staticRead503Total)
      this.$refs.GraphRef.drawUpdateGraph(this.staticUpdate200Total, this.staticUpdate302Total, this.staticUpdate500Total, this.staticUpdate503Total)
      this.$refs.GraphRef.drawInsertGraph(this.staticInsert200Total, this.staticInsert302Total, this.staticInsert500Total, this.staticInsert503Total)
      this.changedLoadingBool()
      console.log('done')
      var date2 = new Date()
      console.log(date2.toUTCString())
    },
    triggerGraphVisibilityRampStep2 () {
      console.log('triggerGraphVisibilityRampStep2 called')
      this.$refs.GraphRef.drawReadGraph(this.rampRead200Total, this.rampRead302Total, this.rampRead500Total, this.rampRead503Total)
      this.$refs.GraphRef.drawUpdateGraph(this.rampUpdate200Total, this.rampUpdate302Total, this.rampUpdate500Total, this.rampUpdate503Total)
      this.$refs.GraphRef.drawInsertGraph(this.rampInsert200Total, this.rampInsert302Total, this.rampInsert500Total, this.rampInsert503Total)
      this.changedLoadingBool()
      console.log('done')
      var date2 = new Date()
      console.log(date2.toUTCString())
    },
    triggerGraphVisibilityBurstStep2 () {
      console.log('triggerGraphVisibilityBurstStep2 called')
      this.$refs.GraphRef.drawReadGraph(this.burstRead200Total, this.burstRead302Total, this.burstRead500Total, this.burstRead503Total)
      this.$refs.GraphRef.drawUpdateGraph(this.burstUpdate200Total, this.burstUpdate302Total, this.burstUpdate500Total, this.burstUpdate503Total)
      this.$refs.GraphRef.drawInsertGraph(this.burstInsert200Total, this.burstInsert302Total, this.burstInsert500Total, this.burstInsert503Total)
      this.changedLoadingBool()
      console.log('done')
      var date2 = new Date()
      console.log(date2.toUTCString())
    },
    changedLoadingBool (event) {
      this.$emit('resultsFetched', true)
    },

    // //* **********Ecommerce****************
    // insertStaticLowEcommerce: async function () {
    //   console.log('insertStaticLowEcommerce getting called')
    //   await axios.get(config.insertStaticEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertBurstLowEcommerce: async function () {
    //   console.log('insertBurstLowEcommerce getting called')
    //   await axios.get(config.insertBurstEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertRampLowEcommerce: async function () {
    //   console.log('insertRampLowEcommerce getting called')
    //   await axios.get(config.insertRampEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertStaticMidEcommerce: async function () {
    //   console.log('insertStaticMidEcommerce getting called')
    //   await axios.get(config.insertStaticEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults2 = response.data
    //       console.log(artilleryResults2)
    //       this.messageResults = JSON.parse(artilleryResults2.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertRampMidEcommerce: async function () {
    //   console.log('insertRampMidEcommerce getting called')
    //   await axios.get(config.insertRampEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults2 = response.data
    //       console.log(artilleryResults2)
    //       this.messageResults = JSON.parse(artilleryResults2.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertBurstMidEcommerce: async function () {
    //   console.log('insertBurstMidEcommerce getting called')
    //   await axios.get(config.insertBurstEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults2 = response.data
    //       console.log(artilleryResults2)
    //       this.messageResults = JSON.parse(artilleryResults2.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertStaticHiEcommerce: async function () {
    //   console.log('insertStaticHiEcommerce getting called')
    //   await axios.get(config.insertStaticEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults3 = response.data
    //       console.log(artilleryResults3)
    //       this.messageResults = JSON.parse(artilleryResults3.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertRampHiEcommerce: async function () {
    //   console.log('insertRampHiEcommerce getting called')
    //   await axios.get(config.insertRampEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults3 = response.data
    //       console.log(artilleryResults3)
    //       this.messageResults = JSON.parse(artilleryResults3.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // insertBurstHiEcommerce: async function () {
    //   console.log('insertBurstHiEcommerce getting called')
    //   await axios.get(config.insertBurstEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults3 = response.data
    //       console.log(artilleryResults3)
    //       this.messageResults = JSON.parse(artilleryResults3.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'insert') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readStaticLowEcommerce: async function () {
    //   await axios.get(config.readStaticEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readBurstLowEcommerce: async function () {
    //   await axios.get(config.readBurstEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readRampLowEcommerce: async function () {
    //   await axios.get(config.readRampEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readStaticMidEcommerce: async function () {
    //   await axios.get(config.readStaticEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readBurstMidEcommerce: async function () {
    //   await axios.get(config.readBurstEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readRampMidEcommerce: async function () {
    //   await axios.get(config.readRampEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readStaticHiEcommerce: async function () {
    //   await axios.get(config.readStaticEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readBurstHiEcommerce: async function () {
    //   await axios.get(config.readBurstEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    // readRampHiEcommerce: async function () {
    //   await axios.get(config.readRampEcommerceEndpoint)
    //     .then(response => {
    //       this.loading = false
    //       let artilleryResults1 = response.data
    //       console.log(artilleryResults1)
    //       this.messageResults = JSON.parse(artilleryResults1.body).message
    //       // JSON.parse(artilleryResults1.body).message

    //       console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'read') + '\n')
    //     }).catch(function (error) {
    //       console.error('fetchResults failed', error.toString())
    //     })
    // },

    //* *************Healthcare******************
    insertStaticLow300: async function () {
      // await axios.get(config.insertStaticEndpoint)
      await axios.get(config.insertStaticEndpoint300)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          this.messageResults = artilleryResults1.message

          console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertStaticLow450: async function () {
      await axios.get(config.insertStaticEndpoint450)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          this.messageResults = artilleryResults1.message

          console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateStaticLow: async function () {
      await axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults4 = response.data
          // console.log(this.artilleryResults)
          this.messageResults = JSON.parse(artilleryResults4.body).message

          console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    readStaticLow: async function () {
      await axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults5 = response.data
          // console.log(this.artilleryResults)
          this.messageResults = JSON.parse(artilleryResults5.body).message

          console.log('artillery results: \n' + this.getStaticCodesLow(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertStaticHi300: async function () {
      await axios.get(config.insertStaticEndpoint300)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertStaticHi450: async function () {
      await axios.get(config.insertStaticEndpoint450)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertStaticHi600: async function () {
      await axios.get(config.insertStaticEndpoint600)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateStaticHi: async function () {
      await axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    readStaticHi: async function () {
      await axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesHi(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertStaticMid300: async function () {
      await axios.get(config.insertStaticEndpoint300)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertStaticMid450: async function () {
      await axios.get(config.insertStaticEndpoint450)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    readStaticMid: async function () {
      await axios.get(config.readStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults6 = response.data
          console.log(artilleryResults6)
          this.messageResults = JSON.parse(artilleryResults6.body).message

          console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateStaticMid: async function () {
      await axios.get(config.updateStaticEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults8 = response.data
          console.log(artilleryResults8)
          this.messageResults = JSON.parse(artilleryResults8.body).message

          console.log('artillery results: \n' + this.getStaticCodesMid(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertRampLow: async function () {
      await axios.get(config.insertRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getRampCodesLow(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateRampLow: async function () {
      await axios.get(config.updateRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults8 = response.data
          console.log(artilleryResults8)
          this.messageResults = JSON.parse(artilleryResults8.body).message

          console.log('artillery results: \n' + this.getRampCodesLow(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    readRampLow: async function () {
      await axios.get(config.readRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults6 = response.data
          console.log(artilleryResults6)
          this.messageResults = JSON.parse(artilleryResults6.body).message

          console.log('artillery results: \n' + this.getRampCodesLow(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    insertRampHi: async function () {
      await axios.get(config.insertRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getRampCodesHi(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateRampHi: async function () {
      await axios.get(config.updateRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getRampCodesHi(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    readRampHi: async function () {
      await axios.get(config.readRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getRampCodesHi(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertRampMid: async function () {
      await axios.get(config.insertRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getRampCodesMid(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    readRampMid: async function () {
      await axios.get(config.readRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults6 = response.data
          console.log(artilleryResults6)
          this.messageResults = JSON.parse(artilleryResults6.body).message

          console.log('artillery results: \n' + this.getRampCodesMid(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    updateRampMid: async function () {
      await axios.get(config.updateRampEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults8 = response.data
          console.log(artilleryResults8)
          this.messageResults = JSON.parse(artilleryResults8.body).message

          console.log('artillery results: \n' + this.getRampCodesMid(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertBurstLow: async function () {
      await axios.get(config.insertBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getBurstCodesLow(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateBurstLow: async function () {
      await axios.get(config.updateBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults8 = response.data
          console.log(artilleryResults8)
          this.messageResults = JSON.parse(artilleryResults8.body).message

          console.log('artillery results: \n' + this.getBurstCodesLow(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    readBurstLow: async function () {
      await axios.get(config.readBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults6 = response.data
          console.log(artilleryResults6)
          this.messageResults = JSON.parse(artilleryResults6.body).message

          console.log('artillery results: \n' + this.getBurstCodesLow(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    insertBurstHi: async function () {
      await axios.get(config.insertBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getBurstCodesHi(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    updateBurstHi: async function () {
      await axios.get(config.updateBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getBurstCodesHi(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    readBurstHi: async function () {
      await axios.get(config.readBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getBurstCodesHi(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },

    insertBurstMid: async function () {
      await axios.get(config.insertBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults1 = response.data
          console.log(artilleryResults1)
          console.log('artilleryResults1 are ' + artilleryResults1)
          console.log(typeof (artilleryResults1))
          this.messageResults = artilleryResults1.message
          // JSON.parse(artilleryResults1.body).message

          console.log('artillery results: \n' + this.getBurstCodesMid(this.messageResults, 'insert') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    readBurstMid: async function () {
      await axios.get(config.readBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults6 = response.data
          console.log(artilleryResults6)
          this.messageResults = JSON.parse(artilleryResults6.body).message

          console.log('artillery results: \n' + this.getBurstCodesMid(this.messageResults, 'read') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    },
    updateBurstMid: async function () {
      await axios.get(config.updateBurstEndpoint)
        .then(response => {
          this.loading = false
          let artilleryResults8 = response.data
          console.log(artilleryResults8)
          this.messageResults = JSON.parse(artilleryResults8.body).message

          console.log('artillery results: \n' + this.getBurstCodesMid(this.messageResults, 'update') + '\n')
        }).catch(function (error) {
          console.error('fetchResults failed', error.toString())
        })
    }

  }

}
</script>
