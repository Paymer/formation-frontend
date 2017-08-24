

export default class TripListDetailsCtrl {

    constructor($resource){
        this.$resource = $resource
        const res = $resource('http://localhost:3000/trips-details/:tripId', {tripId:"@id"}, {
            'update': { method:'PUT' }
        })
        this.tripList =  res.query();
    }
    

update (itemTrip) {
    itemTrip.$update()
}
 


}