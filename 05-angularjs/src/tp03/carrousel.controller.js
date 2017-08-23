
export default function CarrouselCtrl($scope, $interval) {
$scope.images = [
{'name': 'New York', 'url': 'img/nyc.jpg'},
{'name': 'Paris', 'url': 'img/paris.jpg'},
{'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg'},
{'name': 'Rome', 'url': 'img/rome.jpg'},
{'name': 'Tokyo', 'url': 'img/tokyo.jpg'}
];



// ajouter une variable 'currentId' au scope indiquant l'index de l'image courante
$scope.currentId=0;
// ajouter un fonction next()
$scope.next = function () {

if ($scope.currentId<4){
    $scope.currentId++;
}
else if ($scope.currentId == 4){
    $scope.currentId = 0;
}
    
}
// ajouter un fonction previous()
$scope.previous = function () {
    
if ($scope.currentId>0){
        $scope.currentId--;
}
else if ($scope.currentId == 0){
    $scope.currentId = 4;
}


}

$interval(() => $scope.next(), 4000);
}