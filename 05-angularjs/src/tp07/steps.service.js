

export default class StepsService {
    
    constructor(apiUrls, $http){
        this.url = apiUrls;
        this.$http = $http;
    }
    
    //recover the comments of a travel
    findStepsById(tripId){

        return this.$http({method:'GET', url:(this.url.full+tripId)})
        .then((response) => {
        return response.data.steps
    })

    }
   

}