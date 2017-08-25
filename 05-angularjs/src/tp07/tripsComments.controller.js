

export default class TripCommentsCtrl {

    constructor(TripsService, StepsService, CommentsService){
        this.StepsService = StepsService;
        this.CommentsService = CommentsService;

        TripsService.findAll()
        .then(trips => this.trips = trips);
        
        
       
        

       //this.AddComment = CommentsService.addComment(this.choix, comment);

    }


comment(comment){
    this.CommentsService.addComment(this.choix, comment, "anonymous");

    this.CommentsService. findByTripId(this.choix)
        .then(comments => this.comments = comments);
}

jaiChange() {
    console.log('jai changé', this.choix)
    //recalculate steps
    this.StepsService.findStepsById(this.choix)
        .then(steps => this.steps = steps);
    
    this.CommentsService. findByTripId(this.choix)
        .then(comments => this.comments = comments);

}



}