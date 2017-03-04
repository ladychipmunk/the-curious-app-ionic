angular.module('starter.services', [])

.factory('Places', function() {
  // Might use a resource here that returns a JSON array

  // data for my places
  var places = [{
    id: 0,
    name: 'Trinity Gate',
    info:"fantastic",
    photo:"img/trinity-college-dublin.jpg",
    coordinateX:"53.34446",
    coordinateY:"-6.25911"
  },{
    id: 1,
    name: 'Molly Malone',
    info:"",
    photo:"",
    coordinateX:"53.3445",
    coordinateY:"-6.25936"
  },{
    id: 2,
    name: 'Boat Restaurant',
    info:"",
    photo:"",
    coordinateX:"53.3471",
    coordinateY:"-6.23795"
  },{
    id: 3,
    name: 'Umbrellas',
    info:"",
    photo:"img/umbrellas.jpg",
    coordinateX:"53.34109",
    coordinateY:"-6.25937"
  },{
    id: 4,
    name: 'Dublin Trublin',
    info:"",
    photo:"img/dublin-trublin.jpg",
    coordinateX:"53.33992",
    coordinateY:"-6.26439"
  },{
    id: 5,
    name: 'Lucky Path',
    info:"",
    photo:"img/lucky-path.jpg",
    coordinateX:"",
    coordinateY:""
  },{
    id: 6,
    name: 'Famine Memorial',
    info:"",
    photo:"",
    coordinateX:"53.34804",
    coordinateY:"-6.25005"
  }];

  return {
    all: function() {
      return places;
    },
    remove: function(place) {
      places.splice(places.indexOf(place), 1);
    },
    get: function(placeId) {
      for (var i = 0; i < places.length; i++) {
        if (places[i].id === parseInt(placeId)) {
          return places[i];
        }
      }
      return null;
    }
  };
});
