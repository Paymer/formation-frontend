
var list = require("./data/devfest-2015");

module.exports = {
//returns the table of all the presentateurs
"listerTousLesPresentateurs":function (){
    return list.speakers;
    },

//return table with all the sessions
"listerToutesLesSessions": function (){
    return list.sessions;
},

//return the session of the identifier
"trouverUneSession": function (idSession){
    return list.sessions.filter(function (element){
       return element.id === idSession;
})},


//return the list of presentateurs who have the property topspeaker: true
"listerTopPresentateurs": function (){
    return list.speakers.filter(function (element){
        return element.topspeaker === true;
    })
}


}
