

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

substitute(id, name, price){
   
    this.$http({
        method:'PUT', 
        url:'http://localhost:3000/trips/'+id,
        data: {
            name:name,
            price: price
        }})
    .then((response) => {

})}

add(name, price, url){
   
    this.$http({
        method:'POST', 
        url:'http://localhost:3000/trips/',
        data: {
            id: name,
            name:name,
            price: price,
            imageUrl: url

        }})
    .then((response) => {

})}


delete(id){
   
    this.$http({
        method:'DELETE', 
        url:'http://localhost:3000/trips/'+id,
       })
    .then((response) => {

})}

}



