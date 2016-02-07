window.onload = function(){
  console.log('App started');

  var map = new Map({lat: 0, lng: 0});

  var driver = new Driver();
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


