var registro = document.getElementById("registroPublico");

var publico-si = document.getElementById("publico-si").value;
var publico-no = document.getElementById("publico-no").value;

function mostrar(){
	publico-si.addEventListener('click',function(){
		registro.style.display = "block";
	})
	publico-no.addEventListener('click',function(){
		registro.style.display = "none";
	}
}

