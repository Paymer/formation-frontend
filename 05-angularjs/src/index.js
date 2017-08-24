
import angular from 'angular'
console.log('Bonjour App');


import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/forms.controller'
import TripListCtrl from './tp05/tripList.controller'
angular.module('tripApp', [])
.controller(CarrouselCtrl.name, CarrouselCtrl) 
.controller('FormController', FormController)
.controller('TripListCtrl', TripListCtrl);
 


// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripList.html'
// insertion du code HTML dans le corps de la page principale

//tp = [tplTp01].join('<hr>') + [tplTp02].join('<hr>') + [tplTp03].join('<hr>')

//document.querySelector('body').innerHTML = [tplTp01].join('<hr>')
//document.querySelector('body').innerHTML = [tplTp02].join('<hr>')
//document.querySelector('body').innerHTML = [tplTp03].join('<hr>')
//document.querySelector('body').innerHTML = [tplTp04].join('<hr>')
document.querySelector('body').innerHTML = [tplTp05].join('<hr>')