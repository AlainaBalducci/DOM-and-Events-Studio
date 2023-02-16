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
  shuttleHeight.innerHTML = 10000;
 }
})

const landButton = document.getElementById('landing');
landButton.addEventListener('click', function() {
 let newResponse = window.alert('The shuttle is landing. Landing gear engaged');
  paragraph.innerHTML = 'The shuttle has landed.';
  shuttleB.style.backgroundColor = 'green';
  shuttleHeight.innerHTML = 0; 
})



})