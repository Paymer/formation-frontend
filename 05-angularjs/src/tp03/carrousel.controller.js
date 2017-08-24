


export default class CarrouselCtrl {

    constructor ( $interval){
        this.$interval = $interval}

        $onInit() {
this.images = [
{'name': 'New York', 'url': 'img/nyc.jpg'},
{'name': 'Paris', 'url': 'img/paris.jpg'},
{'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg'},
{'name': 'Rome', 'url': 'img/rome.jpg'},
{'name': 'Tokyo', 'url': 'img/tokyo.jpg'}
];

// ajouter une variable 'currentId' au scope indiquant l'index de l'image courante
this.currentId=0;
this.$interval(() => this.next(), 3000);
}


// ajouter un fonction previous()
previous (){
if (this.currentId>0){
        this.currentId--;
}
else if (this.currentId == 0){
    this.currentId = 4;
}
//this.currentId == 0 ? this.currentId = this.images.length - 1 : this.currentId--;
}

// ajouter un fonction next()
next (){
    this.currentId == this.images.length - 1 ? this.currentId = 0 : this.currentId++;
 }

}