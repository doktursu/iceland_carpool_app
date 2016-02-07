var Map = function(centre){
  this.googleMap = new google.maps.Map(document.querySelector('#map'), {
    center: centre,
    zoom: 1
  });
};