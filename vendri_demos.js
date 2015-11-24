/**
 * Created by Joshua on 11/10/15.
 */

// Global for timeline:
var dateObject = new Date();
var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
var weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* Bring in the date and assign variables to it */
function initTimeline(){
    var timeChunks = 86400000; // milliseconds per chunk, I'm thinking a day long chunk
    var numberChunks = 10; // how many chunks, I'm thinking 10
    var endTime = numberChunks * timeChunks;
    var futureDateObject = new Date(); // this one we'll edit.
    //document.getElementById("month").innerHTML = monthArray[dateObject.getMonth()];
    //only happens once a page load
    populateTimeline(numberChunks, timeChunks);
}

// The function tha populates the timeline
function populateTimeline(numberChunks, timeChunks){
    var day_it = dateObject.getDate();
    // now do the loop to populate time line
    for( var i = 0; i<40; i++){
        var row_days = document.getElementById("table_Days");
        var x = row_days.insertCell(i);
        if(i<31){
            dateObject.setDate(i);
        }
        else {
            i=1;
            dateObject.setDate(i);
        }
        x.innerHTML=(dateObject.getDate()).toString();
    }
}

initTimeline();

/*
// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 25, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("Hello, World!",15,175);
    */