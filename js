
var vehicleApp = angular.module('vehicleApp', []);

vehicleApp.controller('VehicleListCtrl', function ($scope, $http) {
    //initialize the ng-show variables
    $scope.showList=false;
    $scope.showDetail=false;
    //implement the function definitions here for the button click
    $scope.showTwoWheelers=function(a){
        if(a==2){
            $scope.vehicleList=$scope.two;
            $scope.showList=true;
            $scope.showDetail=false;
            $scope.vehicleType="twoWheeler";
        }
    }
    $scope.showFourWheelers=function(b){
        if(b==4){
            $scope.vehicleList=$scope.four;
            $scope.showList=true;
            $scope.showDetail=false;
            $scope.vehicleType="fourWheeler";
        }
    }
    //store the type of the vehicle in scope variable
    $scope.vehicleType="";
    //make Ajax call to JSON file and populate the vehicleList
    $http.get("data/twoWheeler.json")
        .then(function(response) {
            $scope.two = response.data;

        });

    $http.get("data/fourWheeler.json")
        .then(function(response) {
            $scope.four = response.data;
            
        });

    $scope.showDetails = function (vehicle) {
        // console.log("hii")
        //show/hide the divs accordingly
         $scope.showDetail=true;
        $scope.showList=false;
        $scope.current=vehicle; 
        //check the scope variable type and populate the vehicle image accordingly
       if($scope.vehicleType=="fourWheeler"){
            $scope.myImg="imgs/car.jpg";
       }
       else if($scope.vehicleType=="twoWheeler"){
            $scope.myImg="imgs/bike.jpg";
       }
    }
        
});

$(function(){
    //use jQuery selector to get the app title
    $('#home').click(function() {
         //assign click event and redirect to home page
    window.location.reload();
    });
});
    
   
