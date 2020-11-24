var days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]

var allDays = document.getElementById("allDays");
allDays.innerHTML = days[0] + ", " + days[1] + ", " + days[2] + ", " + days[3] + ", " + days[4] + ", " + days[5] + ", " + days[6];

var workDays = document.getElementById("workDays");
workDays.innerHTML = days[0] + ", " + days[1] + ", " + days[2] + ", " + days[3] + ", " + days[4];

var weekendDays = document.getElementById("weekendDays");
weekendDays.innerHTML = days[5] + ", " + days[6];

var reversedDays = document.getElementById("reversedDays");
reversedDays.innerHTML = days[6] + ", " + days[5] + ", " + days[4] + ", " + days[3] + ", " + days[2] + ", " + days[1] + ", " + days[0];

var reversedWeekDays = document.getElementById("reversedWeekDays");
reversedWeekDays.innerHTML = days[4] + ", " + days[3] + ", " + days[2] + ", " + days[1] + ", " + days[0];

var reversedWeekendDays = document.getElementById("reversedWeekendDays");
reversedWeekendDays.innerHTML = days[6] + ", " + days[5];