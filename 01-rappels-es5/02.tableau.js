var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//FOR EACH
villes.forEach(function(element){
    console.log(element)})

var lettreADansToutesLesVilles = villes.every(function(element){
    return element.indexOf('a') >= 0;
})

console.log ('lettreADansToutesLesVilles ==', lettreADansToutesLesVilles);

//SOME
var auMoinsUneVilleAvecUnTiret = villes.some(function(element){
    return element.indexOf('-') >= 0;
})

console.log ('auMoinsUneVilleAvecUnTiret ==', auMoinsUneVilleAvecUnTiret);

//FILTER
var villesSansTiretSansEspace = villes.filter(function(element){
    return element.indexOf('-') < 0;
})


console.log ('villesSansTiretSansEspace =',villesSansTiretSansEspace);

//CHAINER LES FONCTIONS
var villesTerminantParS = villes.filter(function(element){
    return element.lastIndexOf('s');
})
var villesMajusculeSeTerminantParS = villesTerminantParS.map(function (element){
    return element.toUpperCase();
})

console.log ('villesMajusculeSeTerminantParS ==', villesMajusculeSeTerminantParS);


