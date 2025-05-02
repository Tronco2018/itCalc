function calculate(){
	var max = parseFloat(document.getElementById("interLenghtInput").value, 10);
	var min = parseFloat(document.getElementById("interInput").value, 10);
	var result = max/min;	
	document.getElementById("resultLabel").innerText = result;
}
