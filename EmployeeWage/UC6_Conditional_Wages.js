// UC6 Canditional based wage calculation
console.log("[ Checking employee attendance and display wage per day ]");
var dailyWage = 0;
var monthWage = 0;
var wagePerHr = 20;
var WorkHrs;
var maxWorkingDays = 20;
var maxWorkingHrs = 100;
var totalEmpHrs = 0;
var totalWorkingDays = 0;
while (totalEmpHrs < maxWorkingHrs && totalWorkingDays < maxWorkingDays) {
    var empAttendance = Math.floor(Math.random() * 3);
    switch (empAttendance) {
        case 1:
            WorkHrs = 4;
            break;
        case 2:
            WorkHrs = 8;
            break;
        default:
            WorkHrs = 0;
            break;
    }
    dailyWage = WorkHrs * wagePerHr;
    monthWage = monthWage + dailyWage;
    totalWorkingDays++;
    totalEmpHrs = totalEmpHrs + WorkHrs;
    console.log("Days: " + totalWorkingDays + " Wage: " + dailyWage + " Hrs: " + totalEmpHrs);
}
console.log("Total Working Days: " + totalWorkingDays + " Total working Hours: " + totalEmpHrs);
console.log("Total Wage: " + monthWage);
