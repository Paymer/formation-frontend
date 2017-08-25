
import angular from 'angular'
import ngResource from 'angular-resource'
console.log('Bonjour App');


import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/forms.controller'
import TripListCtrl from './tp05/tripList.controller'
import TripListDetailsCtrl from './tp06/tripListDetails.controller'
import TripsCommentsCtrl from './tp07/tripsComments.controller'
import TripsService from './tp07/trips.Service'
import apiUrls from './tp07/apiUrls.service'
import CommentsService from './tp07/comments.service'
import StepsService from './tp07/steps.service'
import TripCommentsCtrl from './tp07/tripsComments.controller'


angular.module('tripApp', ['ngResource'])
//Controllers
.controller(CarrouselCtrl.name, CarrouselCtrl) 
.controller('FormController', FormController)
.controller('TripListCtrl', TripListCtrl)
.controller(TripListDetailsCtrl.name, TripListDetailsCtrl)
.controller(TripCommentsCtrl.name, TripCommentsCtrl)
//Services
.constant('apiUrls', apiUrls)
.service('TripsService', TripsService)
.factory('CommentsService', (apiUrls, $http)=> {return new CommentsService(apiUrls, $http)})
.service('StepsService', StepsService);




// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripList.html'
import tplTp06 from './tp06/tripListDetails.html'
import tplTp07 from './tp07/tripsComments.html'

// insertion du code HTML dans le corps de la page principale

document.querySelector('body').innerHTML = [tplTp01].join('<hr>') 
    + ([tplTp02].join('<hr>')) 
    + [tplTp03].join('<hr>')
    + [tplTp04].join('<hr>')
    + [tplTp05].join('<hr>')
    + [tplTp06].join('<hr>')
    + [tplTp07].join('<hr>')