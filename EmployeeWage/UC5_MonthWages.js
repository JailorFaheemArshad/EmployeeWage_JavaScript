//UC5 Calculate one month wage
console.log("[Checking employee attendance and display wage per day]");
var dailyWage;
var monthWage = 0;
var workHrs;
var wagePerHrs = 20;
var empAttendance = Math.floor(Math.random() * 3);
var numOfDays = 20;
for (var day = 1; day <= numOfDays; day++) {
    
    switch (empAttendance) {
        case 1:
            workHrs = 4;
            break;
        case 2:
            workHrs = 8;
            break;
        default:
            workHrs = 0;
            break;
    }
   
}
dailyWage = workHrs*wagePerHrs;
console.log(" "+dailyWage+" ");
monthWage = monthWage + dailyWage;
console.log("Total wage: "+ monthWage);
