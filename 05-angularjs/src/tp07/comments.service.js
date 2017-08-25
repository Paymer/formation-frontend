


export default class CommentsService {
    
    constructor(apiUrls, $http){
        this.url = apiUrls;
        this.$http = $http;
    }
    
    //recover the comments of a travel
    findByTripId(tripId){

        return this.$http({method:'GET', url:(this.url.full+tripId)})
        .then((response) => {
        return this.comments = response.data.comments
    })

    }
    //add a new comment with annonimous identifier
    addComment(tripId, comment, id){


        //list of comments recovered
       this.$http({method:'GET', url:(this.url.full+tripId)})
        .then((response) => {
            this.trip = response.data
            //comment created
            this.commentaire = {'id': id, 'text': comment};
            //comment added to the trip
            this.trip.comments.push(this.commentaire)


            //trip modified
            this.$http({
                method:'PUT', 
                url:(this.url.full+tripId),
                data:  this.trip
                })
            .then((response) => {

            })
        })

        


       
    }

}