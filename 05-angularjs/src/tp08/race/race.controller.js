
export default class RaceCtrl {
    constructor(RaceService, $interval, SimulatorService){
        this.RaceService = RaceService;
        this.SimulatorService=SimulatorService;
        this.list = RaceService.list();
        this.bool = false;
    }

 
 

updateName(name){
    this.name = name;
    this.bool = true;
}

lancerCourse(){
    this.SimulatorService.start();
}
    

    }