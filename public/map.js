var Map = function(centre){
  this.googleMap = new google.maps.Map(document.querySelector('#map'), {
    center: centre,
    zoom: 6
  });
  this.geocoder = new google.maps.Geocoder();
};

Map.prototype.geocodeAddress = function(address){
  this.geocoder.geocode({
    address: address
  }, function(results, status){
    if(status === google.maps.GeocoderStatus.OK){
      this.addInfoWindow(results[0].geometry.location, address);
    }else{
      alert('Geocode was not successful for the following reason: ' + status);
    }
  }.bind(this));
};

Map.prototype.addMarker = function(latLng, title){
  var marker = new google.maps.Marker({
    map: this.googleMap,
    position: latLng,
    title: title
  });
  return marker;
};

Map.prototype.addInfoWindow = function(latLng, title){
  var marker = this.addMarker(latLng, title);
  var infoWindow = new google.maps.InfoWindow({
    content: marker.title
  });
  marker.addListener('click', function(){
    infoWindow.open(this.map, marker);
  });
};


