
import angular from 'angular'
import ngResource from 'angular-resource'
console.log('Bonjour App');


import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/forms.controller'
import TripListCtrl from './tp05/tripList.controller'
import TripListDetailsCtrl from './tp06/tripListDetails.controller'
angular.module('tripApp', ['ngResource'])
.controller(CarrouselCtrl.name, CarrouselCtrl) 
.controller('FormController', FormController)
.controller('TripListCtrl', TripListCtrl)
.controller(TripListDetailsCtrl.name, TripListDetailsCtrl);
 


// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripList.html'
import tplTp06 from './tp06/tripListDetails.html'

// insertion du code HTML dans le corps de la page principale

document.querySelector('body').innerHTML = [tplTp01].join('<hr>') 
    + ([tplTp02].join('<hr>')) 
    + [tplTp03].join('<hr>')
    + [tplTp04].join('<hr>')
    + [tplTp05].join('<hr>')
    + [tplTp06].join('<hr>')