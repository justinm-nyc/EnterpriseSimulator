
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      artilleryResults: ''
    },
    methods: {
      fetchResults: function() {
        axios.get('/results')
        .then(response => {
          this.artilleryResults = response.data
          console.log("artillery results: \n" + this.artilleryResults)
      }).catch(function(error){
          console.error("fetchResults failed", error.toString());
      });
      }
    }
})