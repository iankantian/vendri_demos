/**
 * Created by Joshua on 11/10/15.
 */

/* Bring in the date and assign variables to it */
var dateObject = new Date();
var monthArray = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
document.getElementById("day").innerHTML = dateObject.getDate();
document.getElementById("month").innerHTML = monthArray[dateObject.getMonth()];
document.getElementById("year").innerHTML = dateObject.getFullYear();