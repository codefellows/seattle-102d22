'use strict'

let today = new Date();
let hourNow = today.getHours(); 
let greeting;

if (hourNow > 18) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
   {/* <h3>Good afternoon, Class</h3> */}
