import SimulatorService from './simulator.service'

const SimulatorModule = angular.module('SimulatorModule', ['RaceModule'])
.service('SimulatorService', SimulatorService);


export default SimulatorModule