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

  driver.onupdate = function(journeys){
    driverJourneys.display(journeys);

    var journey = journeys[0];
    directions.render(journey.from, journey.to);

    filterForm.populate(this.origins(), this.destinations());
  };

  passenger.onupdate = function(journeys){
    passengerJourneys.display(journeys);
  };

  driverJourneys.onclick = function(journey){
    console.log('clicked', journey);
    directions.render(journey.from, journey.to);
  }

  passengerJourneys.onclick = function(journey){
    console.log('clicked', journey);
    directions.render(journey.from, journey.to);
  }

  filterForm.button.onclick = function(){
    var from = filterForm.selectFrom.value;
    var to = filterForm.selectTo.value;
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


