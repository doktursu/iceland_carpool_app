var Directions = function(map){
  this.map = map;
  this.directionsDisplay = new google.maps.DirectionsRenderer();
};

Directions.prototype.render = function(start, end){

  this.directionsDisplay.setMap(null);
  this.directionsDisplay = null;

  this.directionsDisplay = new google.maps.DirectionsRenderer();
  this.directionsDisplay.setMap(this.map);

  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };

  var directionsService = new google.maps.DirectionsService
  directionsService.route(request, function(result, status){
    if(status == google.maps.DirectionsStatus.OK){
      this.directionsDisplay.setDirections(result);
    }
  }.bind(this));
};