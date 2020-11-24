var numbers = [2, 4, 6, 8];

function multiplication(numbers){

	var container = document.getElementById("container");
	for(var i = 0; i < numbers.length; i++){
		container.innerHTML += "<h2>De tafel van "+numbers[i]+":</h2>";
		for(var n = 1; n < 11; n++){
			container.innerHTML += n + " * " + numbers[i] + " = " + (n * numbers[i]) + "<br>";
		}
	}
}
multiplication(numbers);