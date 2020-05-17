var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
var heroji = [];
function unos(){
	var heroj = {
		ime = document.getElementById("name").value,
		grad = document.getElementById("city").value,
		delo = document.getElementById("delo").value,
	}
	heroji.push(heroj);
}