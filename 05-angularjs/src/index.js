
import angular from 'angular'
console.log('Bonjour App');



// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'
// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01].join('<hr>')

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp02 from './tp02/vues.html'
// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp02].join('<hr>')