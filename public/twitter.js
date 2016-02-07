var Twitter = function() {
  this.trends = [];
};

Twitter.prototype.findTrends = function() {
  console.log('called');
  var url = 'http://apis.is/earthquake/is';
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    if (request.status === 200) {
      var trends = JSON.parse(request.responseText);
      this.trends = trends;
      console.log(this.trends);
    }
  }.bind(this);
  request.send(null);
  return;
};