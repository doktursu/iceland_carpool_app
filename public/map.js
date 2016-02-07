var Map = function(centre){
  this.googleMap = new google.maps.Map(document.querySelector('#map'), {
    center: centre,
    zoom: 1
  });
};

Map.prototype.addMarker = function(latLng, title){
  var marker = new google.maps.Marker({
    map: this.googleMap,
    position: latLng,
    title: title
  });
};

Map.prototype.addInfoWindow = function(latLng, title){
  var marker = this.addMarker(latLng, title);
  marker.addListener('hover', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: this.title
    });
    infoWindow.open(this.map, marker);
  });
};
