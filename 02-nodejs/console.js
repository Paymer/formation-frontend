
const readline = require('readline');

var ser = require("./service");

const menu = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function afficherMenu(){
console.log('*** Application Conférence ***');
console.log('1. Liste de tous les présentateurs ');
console.log('2. Top présentateurs ');
console.log('3. Liste des sessions');
console.log('4. Détail dune session');
console.log('5.Finir');
}

function demarrage(){


afficherMenu();



menu.question('Choisise? ', function(answer) {
    //it outputs the answer
    console.log('tu as ecrit:',answer);
  
   
 //it chooses the option
if (answer.match('1')){
        list = ser.listerTousLesPresentateurs();
        console.log(list.map(toString));
         menu.close();

}else if (answer.match('2')){
        list = ser.listerTopPresentateurs()
        console.log(list.map(toString));
         menu.close();

}else if (answer.match('3')){
             list = ser.listerToutesLesSessions();
            console.log(list.map(toString2));
             menu.close();

}else if (answer.match('4')){
            menu.question('Quelle session? ', function(answer) {
            session = ser.trouverUneSession(answer);
            console.log(session);
             menu.close();})

}else{console.log('Ended');  menu.close(); a=99;}

 
});



}

function toString(element, index, array){
    return (element.firstname+' '+element.lastname);
}
function toString2(element, index, array){
    return (element.id+' '+element.title);
}

demarrage();


 
