var Driver = function(){
  this.journeys = [];
  this.onupdate = undefined;
};

Driver.prototype.populate = function(){
  var url = 'http://apis.is/rides/samferda-drivers/';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if(request.status === 200){
      var journeys = JSON.parse(request.responseText).results;
      this.journeys = journeys;
      this.onupdate(journeys);
      console.log('drivers', this.journeys);
    }
  }.bind(this);
  request.send(null);
  return;
};