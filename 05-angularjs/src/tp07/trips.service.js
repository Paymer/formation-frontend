

//the class is a constructor
export default function TripsService(apiUrls, $http) {
    
    this.url = apiUrls;

    //it recovers the table of trips
    this.findAll = () => {
       return $http({method:'GET', url:this.url.light})
        .then((response) => {
        return response.data
    })

    
        
    }

}