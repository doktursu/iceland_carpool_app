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

Driver.prototype.origins = function(){
  return this.journeys.reduce(function(result, journey){
    if(!result.includes(journey.from)){
      result.push(journey.from);
    }
    return result;
  }, []);
};

Driver.prototype.destinations = function(){
  return this.journeys.reduce(function(result, journey){
    if(!result.includes(journey.to)){
      result.push(journey.to);
    }
    return result;
  }, []);
};

Driver.prototype.filterFromTo = function(start, end){
  return this.journeys.reduce(function(result, journey){
    if(journey.from === start && journey.to === end){
      result.push(journey);
    }
    return result;
  }, []);
}
