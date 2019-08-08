<template>
  <div v-if="showGraphs" class="results col-mid-12">
    <div class="row graphs-row justify-content-center">
      <div id="insert-graph-container" class="graph"></div>
      <div id="update-graph-container" class="graph"></div>
      <div id="read-graph-container" class="graph"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'insertCodesGraph',
  data () {
    return {
      showGraphs: false
    }
  },
  //

  // mounted: function (){
  //     var updateChart = anychart.pie([
  //         ['200 Status Code: \nOK', 300],
  //         ['302 Status Code: \nFound', 0],
  //         ['503 Status Code: \nService Unavailable', 0],
  //         ['500 Status Code: \nInternal Server Error', 0]
  //     ]);

  //     // set chart title text settings
  //     updateChart.title('Update Request Status Codes')
  //             //set chart radius
  //             .radius('43%')
  //             // create empty area in pie chart
  //             .innerRadius('30%');

  //     // set container id for the chart
  //     updateChart.container('update-graph-container');
  //     // initiate chart drawing
  //     updateChart.draw();

  //     var readChart = anychart.pie([
  //         ['200 Status Code: \nOK', 300],
  //         ['302 Status Code: \nFound', 0],
  //         ['503 Status Code: \nService Unavailable', 0],
  //         ['500 Status Code: \nInternal Server Error', 0]
  //     ]);

  //     // set chart title text settings
  //     readChart.title('Read Request Status Codes')
  //             //set chart radius
  //             .radius('43%')
  //             // create empty area in pie chart
  //             .innerRadius('30%');

  //     // set container id for the chart
  //     readChart.container('read-graph-container');
  //     // initiate chart drawing
  //     readChart.draw();

  //         var insertChart = anychart.pie([
  //       ['200 Status Code: \nOK', 300],
  //       ['302 Status Code: \nFound', 0],
  //       ['503 Status Code: \nService Unavailable', 0],
  //       ['500 Status Code: \nInternal Server Error', 0]
  //   ]);

  //   // set chart title text settings
  //   insertChart.title('Insert Request Status Codes')
  //           //set chart radius
  //           .radius('43%')
  //           // create empty area in pie chart
  //           .innerRadius('30%');

  //   // set container id for the chart
  //   insertChart.container('insert-graph-container');
  //   // initiate chart drawing
  //   insertChart.draw();
  // },
  methods: {
    drawReadGraph: function (total200, total302, total503, total500) {
      console.log('drawReadGraph called')
      var readChart = anychart.pie([
        ['200 Status Code: \nOK', total200],
        ['302 Status Code: \nFound', total302],
        ['503 Status Code: \nService Unavailable', total500],
        ['500 Status Code: \nInternal Server Error', total503]
      ])

      // set chart title text settings
      readChart.title('Read Request Status Codes')
      // set chart radius
        .radius('43%')
      // create empty area in pie chart
        .innerRadius('30%')

      // set container id for the chart
      readChart.container('read-graph-container')
      // initiate chart drawing
      readChart.draw()
    },
    drawInsertGraph: function (total200, total302, total503, total500) {
      console.log('drawInsertGraph called')
      var insertChart = anychart.pie([
        ['200 Status Code: \nOK', total200],
        ['302 Status Code: \nFound', total302],
        ['503 Status Code: \nService Unavailable', total500],
        ['500 Status Code: \nInternal Server Error', total503]
      ])

      // set chart title text settings
      insertChart.title('Insert Request Status Codes')
      // set chart radius
        .radius('43%')
      // create empty area in pie chart
        .innerRadius('30%')

      // set container id for the chart
      insertChart.container('insert-graph-container')
      // initiate chart drawing
      insertChart.draw()
    },
    drawUpdateGraph: function (total200, total302, total503, total500) {
      console.log('drawUpdateGraph called')
      var updateChart = anychart.pie([
        ['200 Status Code: \nOK', total200],
        ['302 Status Code: \nFound', total302],
        ['503 Status Code: \nService Unavailable', total500],
        ['500 Status Code: \nInternal Server Error', total503]
      ])

      // set chart title text settings
      updateChart.title('Update Request Status Codes')
      // set chart radius
        .radius('43%')
      // create empty area in pie chart
        .innerRadius('30%')

      // set container id for the chart
      updateChart.container('update-graph-container')
      // initiate chart drawing
      updateChart.draw()
    },
    changeShowGraphs () {
      this.showGraphs = true
      return this.showGraphs
    }
  }
}
</script>
