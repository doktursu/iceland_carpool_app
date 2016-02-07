window.onload = function(){
  console.log('App started');

  var iceland = {lat: 65, lng: -18.6};
  var map = new Map(iceland);

  var driver = new Driver();
  var driverJourneys = new JourneysView(document.querySelector('#driver-journeys'));
  console.log(document.querySelector('#driver-journeys'));

  driver.onupdate = function(){
    driverJourneys.display(this.journeys);
  };

  driver.populate();

  var passenger = new Passenger();
  passenger.populate();

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


