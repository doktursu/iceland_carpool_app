var Directions = function(map){
  this.map = map;
};

Directions.prototype.render = function(start, end){
  var directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(this.map);

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };

  var directionsService = new google.maps.DirectionsService
  directionsService.route(request, function(result, status){
    if(status == google.maps.DirectionsStatus.OK){
      directionsDisplay.setDirections(result);
    }
  });
};