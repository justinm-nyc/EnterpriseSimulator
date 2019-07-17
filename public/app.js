var app = new Vue({
    el: '#app',
    data: {
      artilleryResults: '',
      chosenWorkload: '',
      chosenWorkloadProfile: '',
      workloadSelected: false,
      isHealthCare: false,
      isSurvey: false,
      isRamp: false,
      isOscilating: false
    },
    methods: {
      fetchResults: function() {
        this.artilleryResults = 'Loading ...'
        axios.get('/results')
        .then(response => {
          this.artilleryResults = response.data
          console.log("artillery results: \n" + this.artilleryResults)
      }).catch(function(error){
          console.error("fetchResults failed", error.toString());
      });
      },
      setWorkload: function(workload){
        this.chosenWorkload = workload
        this.workloadSelected = true
        console.log(this.chosenWorkload + " chosen")

        if(this.chosenWorkload == 'healthCare'){
          this.isHealthCare = true
          this.isSurvey = false
        }else if(this.chosenWorkload == 'survey'){
          this.isHealthCare = false
          this.isSurvey = true          
        }
      },
      setWorkloadProfile: function(workloadProfile){
        this.chosenWorkloadProfile = workloadProfile
        console.log(this.chosenWorkloadProfile + " chosen")

        if(this.chosenWorkloadProfile == 'ramp'){
          this.isRamp = true
          this.isOscilating = false
        }else if(this.chosenWorkloadProfile == 'oscilating'){
          this.isRamp = false
          this.isOscilating = true          
        }
      }
    },

})