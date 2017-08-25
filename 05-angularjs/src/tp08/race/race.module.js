import RaceService from './race.service'
import RaceCtrl from './race.controller'

const RaceModule = angular.module('RaceModule', ['SimulatorModule'])
.service('RaceService', RaceService)
.controller(RaceCtrl.name, RaceCtrl)

export default RaceModule

