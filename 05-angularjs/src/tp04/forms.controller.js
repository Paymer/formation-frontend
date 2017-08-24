
//We can do that if we are in webpack
//if not it will give problems
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

    valider() {
        console.log('valid ?', this.form3.$valid)
    }

}
