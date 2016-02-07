window.onload = function(){
  console.log('App started');

  var iceland = {lat: 65, lng: -18.6};
  var map = new Map(iceland);
  var directions = new Directions(map.googleMap);

  var driver = new Driver();
  var driverJourneys = new JourneysView(document.querySelector('#driver-journeys'), 'Drivers');
  driver.onupdate = function(journeys){
    driverJourneys.display(journeys);

    var journey = journeys[0];
    directions.render(journey.from, journey.to);
  };

  var passenger = new Passenger();
  var passengerJourneys = new JourneysView(document.querySelector('#passenger-journeys'), 'Passengers');
  passenger.onupdate = function(journeys){
    passengerJourneys.display(journeys);
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


