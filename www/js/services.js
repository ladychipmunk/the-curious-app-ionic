angular.module('starter.services', [])

.factory('Places', function() {
  // Might use a resource here that returns a JSON array

  // data for my places
  var places = [{
    id: 0,
    name: 'Trinity Gate',
    info:"The Front Gate was erected in the early 1870s as part of on-going refurbishment that took place in the College, replacing the original 1759 gates.The gate is made of oak and has high relief, high fielded diamond shaped panelling that is very distinctive. It was originally constructed from European Oak with inner linings to panels that are constructed in pine.",
    photo:"img/trinity-college-dublin.jpg",
    coordinateX:"53.34446",
    coordinateY:"-6.25911"
  },{
    id: 1,
    name: 'Molly Malone',
    info:"The statue of Molly Malone on Suffolk Street, just a short walk from Trinity College and the famous Grafton Street. Molly Malone worked as a fishmonger but also as a working girl and died in one of the outbreaks of Cholera that regularly used to sweep the city of Dublin.",
    photo:"img/molly-malone.jpg",
    coordinateX:"53.34371,",
    coordinateY:"-6.26096"
  },{
    id: 2,
    name: 'The Linesman',
    info:" This lifesize bronze Sculpture of a man pulling a rope is from the hands of Dony Mac Manus. It commemorates the tradition of docking in the area, which disappeared with the container Ships. Located on City Quay This sculpture was unveiled in February 2000, it was commissioned by the Dublin Docklands Development Authority to celebrate the new life of the quayside or campshires, along the River Liffey.",
    photo:"img/linesman.jpg",
    coordinateX:"53.34709,",
    coordinateY:"-6.24913"
  },{
    id: 3,
    name: 'Umbrellas',
    info:"Back in March, Zozimus Bar opened on Anne’s Lane, Dublin 2.The bar specialises in swanky food and even fancier cocktails, which, interestingly, are named after some of Ireland’s most celebrated authors.While you may not have frequented Zozimus Bar yourself yet, chances are you’ve seen photos of the eyecatching umbrella display outside.",
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
    info:"The Famine statues, in Custom House Quay in the Dublin Docklands, were presented to the City of Dublin in 1997.These statues commemorate the Great Famine of the mid 19th century. During the famine approximately 1 million people died and a million more emigrated from Ireland, causing the island's population to fall by between 20% and 25%. ",
    photo:"img/famine-memorial.jpeg",
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
