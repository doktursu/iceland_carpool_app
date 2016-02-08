window.onload = function(){
  console.log('App started');

  var iceland = {lat: 65, lng: -18.6};
  var map = new Map(iceland);

  var directions = new Directions(map.googleMap);

  var driver = new Driver();
  var driverJourneys = new JourneysView(document.querySelector('#driver-journeys'), 'Drivers');

  var passenger = new Passenger();
  var passengerJourneys = new JourneysView(document.querySelector('#passenger-journeys'), 'Passengers');

  var filterForm = new FilterForm(document.querySelector('#filter-journey'));
  var selectFrom = new Select(document.querySelector('#select-from'));
  var selectTo = new SelectTo(document.querySelector('#select-to'));

  driver.onupdate = function(journeys){
    driverJourneys.display(journeys);

    // var journey = journeys[0];
    // directions.render(journey.from, journey.to);

    selectFrom.populate(this.origins());
    selectTo.populate(this.destinations());
  };

  passenger.onupdate = function(journeys){
    passengerJourneys.display(journeys);
  };

  driverJourneys.onclick = function(journey){
    directions.render(journey.from, journey.to);
  }

  passengerJourneys.onclick = function(journey){
    directions.render(journey.from, journey.to);
  }

  selectFrom.onchange = function(city){
    var journeys = driver.filterFrom(city);
    var destinations = driver.destinations(journeys);
    selectTo.populate(destinations);
  };

  // filterForm.selectFrom.onchange = function(){
  //   var from = this.value;
  // }

  filterForm.button.onclick = function(){
    var from = selectFrom.select.value;
    var to = selectTo.select.value;
    var journeys = driver.filterFromTo(from, to);
    console.log('filtered', journeys);
    driverJourneys.display(journeys);
  };

  passenger.populate();
  driver.populate();



  // document.addEventListener('click', function(){
  //   document.body.style.backgroundColor = 'red';
  // });

  // document.addEventListener('keydown', function(e){
  //   switch (e.code) {
  //     case 'KeyS':
  //       document.body.style.backgroundColor = 'blue';
  //       break;
  //     case 'KeyW':
  //       document.body.style.backgroundColor = 'red';
  //       break;
  //   };
  // });
};


