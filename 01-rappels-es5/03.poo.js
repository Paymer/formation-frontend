

function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
 
    this.getNomComplet = function(){
        return (this.nom+' '+this.prenom+' '+this.pseudo);
    }
    
}

var jules = new Personne ('LEMAIRE', 'Jules' , 'jules77');
var paul = new Personne ('LEMAIRE', 'Paul', 'paul44');

function afficherPersonne (pers){
   
    console.log('nom',pers.nom);
    console.log('prenom', pers.prenom);
    console.log('pseudo', pers.pseudo);

    console.log('nom complet', pers.getNomComplet())

}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';

afficherPersonne(jules);
Personne.prototype.age = 'NON RENSEIGNE';
   console.log(jules.age);
jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales= function (){
   return (this.nom.charAt(0).toUpperCase()+'.'+this.prenom.charAt(0).toUpperCase());
}

console.log(jules.getInitiales());

var robert = {
    nom: "LEP",
    prenom: "Robert",
    pseudo: "robert77",
    getNomComplet: function(){
        return (this.nom+' '+this.prenom+' '+this.pseudo);
    }
};

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient){
    //Heritage with CALL
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;

    this.getInfos = function(){
        return (this.nom+' '+this.prenom+' '+this.numeroClient);
}}

var steve = new Client ('LUCAS', 'Steve', 'steve44', 'A01');

afficherPersonne(steve);
console.log(steve.getInfos());
console.log(steve.numeroClient);
console.log(steve.nom);