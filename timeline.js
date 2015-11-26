/**
 * Created by Joshua on 11/10/15.
 */
var date_Object = new Date();
//var date_Object = new Date("February 15, 2024 11:13:00");
var month_Array = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
var days_of_week_Array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days_per_month_Array = ["31","28","31","30","31","30","31","31","30","31","30","31"];
var timeline_cursor = 0;
var number_Days = 30;

function leapyear_Check(){
    if(date_Object.getFullYear()%4==0){
        days_per_month_Array[1]=29;
    }
    else{
        days_per_month_Array[1]=28;
    }
}

function populate_Timeline(){
    leapyear_Check();
    var day_timeline = date_Object.getDate();
    var month_timeline = date_Object.getMonth();
    var year_timeline = date_Object.getFullYear();

    var table = document.getElementById("timeline");
    var row_days = table.insertRow(0);
    var row_months = table.insertRow(1);
    var row_years = table.insertRow(2);

    // now do the loop to populate time line
    for( var i = 0; i<number_Days; i++){
        var cell_day= row_days.insertCell(i);
        var cell_month=row_months.insertCell(i);
        var cell_year= row_years.insertCell(i);

        cell_day.innerHTML = day_timeline.toString();

        if(i==0 || day_timeline==1) {
            cell_month.innerHTML = month_Array[month_timeline];
        }
        else{}
        if(i==0 || (month_timeline==0)&&day_timeline==1) {
            cell_year.innerHTML = year_timeline.toString();
        }
        day_timeline++;
        if (day_timeline > days_per_month_Array[month_timeline]) {
            if(month_timeline<11) {
                month_timeline++;
            }
            else{
                year_timeline++;
                month_timeline=0;
            }
            day_timeline = 1;
        }
    }
    return number_Days;
}

var timeline_advance_event = setInterval(timeline_advance, 500);

function timeline_advance() {
    if (timeline_cursor < number_Days) {
        document.getElementById("timeline").rows[0].cells[timeline_cursor].style.backgroundColor = "red";
    }
    else{
        timeline_cursor=0;
    }
    if(timeline_cursor==0){
        document.getElementById("timeline").rows[0].cells[number_Days-1].style.backgroundColor = "";
        document.getElementById("timeline").rows[0].cells[0].style.backgroundColor = "red";
    }
    else{
        document.getElementById("timeline").rows[0].cells[timeline_cursor-1].style.backgroundColor = "";
    }
    timeline_cursor++;
}