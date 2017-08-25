export default class SimulatorService {

constructor(RaceService, $interval){
    this.RaceService = RaceService;
    this.$interval = $interval;
    this.list = RaceService.list();

}



    start() {
         this.$interval(() =>{
        this.list.forEach((element) => {
                // Utiliser le service RaceService
                element.progress = element.progress + Math.floor((Math.random() * 10) + 1);
                if (element.progress <= 100){this.RaceService.update(element.name, element.progress);}

                else {this.RaceService.update(element.name, 100);}
                console.log(element.name)
                console.log(element.progress)
        }, this)}, 1000);

       
        
        

    }

}