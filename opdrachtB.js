var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function sum(arrayEen, arrayTwee){
	var sumText = document.getElementById("sumText");
	for(var i = 0; i < arrayEen.length; i++){
		sumText.innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]) + "<br>";
	}
}
sum(arrayEen, arrayTwee);

function subtract(arrayEen, arrayTwee){
	var subtractText = document.getElementById("subtractText");
	for(var i = 0; i < arrayEen.length; i++){
		subtractText.innerHTML += arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i] - arrayEen[i]) + "<br>";
	}
}
subtract(arrayEen, arrayTwee);

function multiplication(arrayEen, arrayTwee){
	var multiplicationText = document.getElementById("multiplicationText");
	for(var i = 0; i < arrayEen.length; i++){
		multiplicationText.innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]) + "<br>";
	}
}
multiplication(arrayEen, arrayTwee);


function division(arrayEen, arrayTwee){
	var divisionText = document.getElementById("divisionText");
	for(var i = 0; i < arrayEen.length; i++){
		divisionText.innerHTML += arrayTwee[i] + " / " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i]) + "<br>";
	}
}
division(arrayEen, arrayTwee);