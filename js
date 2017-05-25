var GHController = angular.module('GHController', []);

GHController.controller('LoginCtrl', function($scope, $rootScope, $location, $http) {
	//fetch users.json here
    $http.get("data/users.json")
        .then(function(response) {
        	$scope.users=response.data;
        	console.log($scope.users);
        });

    $scope.validate = function() {
    	var f1=true;
    	for(i=0;i<$scope.users.length;i++){
    		// alert("entered");
    		if($scope.username==$scope.users[i].username && $scope.password==$scope.users[i].password){
    			f1=false;
    			alert("entered!!");
    			$location.path("/home");
    			$rootScope.name=$scope.users[i].name;
    		}
    	}
    	if(f1==true){
    		alert("Invalid credentials..!");
    	}
	};
});

GHController.controller('BookingCtrl', function($scope, $rootScope, $location, $http) {
    //fetch bookings.json here
	$http.get("data/booking.json")
        .then(function(response) {
        	$scope.booking=response.data;

        	for(i=0;i<$scope.booking.length;i++){
        		alert("new booking");
        		if(response.data[i].name==$rootScope.name){
        			$scope.newBook=response.data[i];
        		}
        	}
        });
    
    $scope.showBookings=function(){

	//use this empty array to create the bookings list for the logged in user.
		$rootScope.specificBooking=[];
		
	//Insert each entry from a loop, using push function
		for(i=0;i<$scope.newBook.length;i++){
			$rootScope.specificBooking.push(newBook[i]);
		}
}

	$scope.book = function(){
	
		//code for generating a new booking ID for a new booking
        var bookingId=Number(Math.floor(Math.random()*10000));
		
		// use constructor/prototype to initialize the new booking object property
   
		//instantiate the new booking object and push it into specificBooking[]
	}
});
