angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, Places) {
  var apiKey = "AIzaSyB5XJHP-f10U_urAKMa5-2m3vesPcKagZo";
  console.log(apiKey);

  // load map
  var dublin = { lat: 53.3416542, lng: -6.2570467 };
  var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: dublin
      });

  var places = Places.all();
  var locations = places.map(function(place){
    return  { lat: parseFloat(place.coordinateX), lng: parseFloat(place.coordinateY) };
  })
  console.log(locations);

  locations.forEach(function(location, i){
    var marker = new google.maps.Marker({
      position: location,
      map: map
     });

   var contentString="";
   contentString += " <a href=\"#\/tab\/home\/";
   contentString += i;
   contentString += "\"><img class=\"map-marker\" src=\"";
   contentString += places[i].photo
   contentString += "\"><\/a>";

   var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

    marker.addListener("click", function(e){
      console.log(i,contentString)
      infowindow.open(map, marker);
    })
  });
})

.controller('HomeCtrl', function($scope, Places) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.places = Places.all();
  $scope.remove = function(chat) {
    Places.remove(chat);
  };
})

.controller('HomeDetailCtrl', function($scope, $stateParams, Places) {
  $scope.place = Places.get($stateParams.placeId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
