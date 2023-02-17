// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {
 const paragraph = document.getElementById('flightStatus');
 const shuttleB = document.getElementById('shuttleBackground');
 const shuttleHeight = document.getElementById('spaceShuttleHeight');
 const takeOffButton = document.getElementById('takeoff');


 takeOffButton.addEventListener('click', function() {
 let response = window.confirm("Confirm that the shuttle is ready for takeoff");
 if (response) {
  paragraph.innerHTML = 'Shuttle in flight.';
  shuttleB.style.backgroundColor = 'blue';
  shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
 }
})

const landButton = document.getElementById('landing');
landButton.addEventListener('click', function() {
 window.alert('The shuttle is landing. Landing gear engaged!');
  paragraph.innerHTML = 'The shuttle has landed.';
  shuttleB.style.backgroundColor = 'green';
  shuttleHeight.innerHTML = "0"; 
})

const abortMissButton = document.getElementById('missionAbort');
abortMissButton.addEventListener('click', function () {
 let response = window.confirm('Confirm that you want to abort the mission.');
 if (response) {
  paragraph.innerHTML = 'Mission aborted';
  shuttleB.style.backgroundColor = 'green';
  shuttleHeight.innerHTML = "0";
  rocket.style.left = '300px';
 rocket.style.right = '0px';
 rocket.style.bottom = '0px';
 rocket.style.top = '250px';
 }
})

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const rocket = document.getElementById('rocket');
rocket.style.position = 'absolute';
rocket.style.left = '300px';
rocket.style.right = '0px';
rocket.style.bottom = '0px';
rocket.style.top = '250px';

upButton.addEventListener('click', function () {
 shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000;
 let movement = parseInt(rocket.style.top) - 10 +'px';
 rocket.style.top = movement;
 console.log(movement)
})

downButton.addEventListener('click', function () {
 shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)-10000;
 let movement = parseInt(rocket.style.top) + 10 +'px';
 rocket.style.top = movement;
 console.log(movement)
})


leftButton.addEventListener('click', function() {
 let movement = parseInt(rocket.style.left) - 10 +'px';
 rocket.style.left = movement;
 console.log(movement)
})

rightButton.addEventListener('click', function() {
 let movement = parseInt(rocket.style.left) + 10 +'px';
 rocket.style.left = movement;
})

})