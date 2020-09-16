/* Displays div with more languages */
//onclick Event Listener 
var button = document.getElementById("btn-lang");

if (button) {
	button.addEventListener("click", showMoreLanguages);
}

function showMoreLanguages() {
	var div = document.getElementById("moreLang");
	
	if (div.style.display === "block") {
		div.style.display = "none";	
	}
	else {
		div.style.display = "block";	
	}
}
