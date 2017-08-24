

export default class TripListCtrl {

constructor($http){
    this.$http = $http;

    $http({method:'GET', url:'http://localhost:3000/trips'})
.then((response) => {
    this.data = response.data
})
}



modify(id, name, price){
   
    this.$http({
        method:'PATCH', 
        url:'http://localhost:3000/trips/'+id,
        data: {
            name:name,
            price: price
        }})
    .then((response) => {

    
    
})}





}



