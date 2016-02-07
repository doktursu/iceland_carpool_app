var Request = function(){

}

Request.prototype.populate = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if(request.status === 200){
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      this.countries = countries;
      this.onUpdate(countries);
    }
  };
};

function(){
  var url = '';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function(){
    if(request.status === 200){
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      this.countries = countries;
      this.onUpdate(countries);
    }
  }
}