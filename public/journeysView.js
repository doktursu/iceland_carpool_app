var JourneysView = function(element, title){
  this.element = element;
  this.title = title;
};

JourneysView.prototype.display = function(journeys){
  this.element.innerHTML = '<h3>' + this.title + '</h3>';
  journeys.forEach(function(journey){
    var div = document.createElement('div');
    div.classList.add('journey');
    this.element.appendChild(div);

    var from = document.createElement('p');
    from.innerHTML = '<span>From:</span> ' + journey.from;
    div.appendChild(from);

    var to = document.createElement('p');
    to.innerHTML = '<span>To  :</span> ' + journey.to;
    div.appendChild(to);

    var date = document.createElement('p');
    date.innerHTML = '<span>Date:</span> ' + journey.date;
    div.appendChild(date);

    var time = document.createElement('p');
    time.innerHTML = '<span>Time:</span> ' + journey.time;
    div.appendChild(time);
  }.bind(this));
};