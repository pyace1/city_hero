var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  document.getElementById("datetime").innerHTML = date + "/" + month + "/" + year + "<hr>" + t;
 
}
// --- forma unos ---
var heroji = [];
function unos(){
	var heroj = {
		ime : document.getElementById("name").value,
		grad : document.getElementById("city").value,
		delo : document.getElementById("delo").value,
	}
	heroji.push(heroj);
	upis(heroji);
}
function upis(){
	document.getElementById("upis").innerHTML = "<div>" + heroji[i].ime + " " + 
	heroji[i].grad + "<br>" + heroji[i].delo + "</div><br><hr>";
	
}