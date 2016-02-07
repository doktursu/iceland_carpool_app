var Driver = function(){
  this.journeys = [];
};

Driver.prototype.populate = function(){
  var url = 'http://apis.is/rides/samferda-drivers/';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if(request.status === 200){
      var journeys = JSON.parse(request.responseText);
      this.journeys = journeys;
      console.log(this.journeys);
    }
  }.bind(this);
  request.send(null);
  return;
};