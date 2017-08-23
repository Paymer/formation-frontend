
import './forms.css'



export default class FormController {
    
    constructor (){
        this.currentUser = {}
        this.copyUser = {}
    }

    save (){
      this.copyUser = angular.copy(this.currentUser);
    }

    reset (){
         this.currentUser = {}
    }

}
