var app = new Vue({
    el: '#app',
    data: {
      artilleryResults: '',
      chosenWorkload: '',
      chosenWorkloadProfile: '',
      workloadSelected: false,
      workloadPayloadSelected: false,
      isHealthCare: false,
      isSurvey: false,
      isRamp: false,
      isburst: false,
      loading: false,
      minVU: null,
      maxVU: null
    },
    computed: {
      isMaxMoreThanMin: function(){
        if(this.maxVU != null && this.minVU != null && Number(this.maxVU) > Number(this.minVU)){
          return true
        }else{
          return false
        }
      },
      isMinMoreThanZero: function(){
        if(this.minVU > 0){
          return true
        }else{
          return false
        }
      }
    },
    methods: {
      fetchResults: function() {
        this.loading = true
        axios.get('/results')
        .then(response => {
          this.loading = false
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
        this.workloadPayloadSelected = true
        console.log(this.chosenWorkloadProfile + " chosen")

        if(this.chosenWorkloadProfile == 'ramp'){
          this.isRamp = true
          this.isburst = false
        }else if(this.chosenWorkloadProfile == 'burst'){
          this.isRamp = false
          this.isburst = true          
        }
      }
    },

})