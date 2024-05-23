var frutas =  {
	mora : {
		cantidad:"",
		valor : ""
	},
	durazno : {
		cantidad:"",
		valor : ""
	},
	fresa : {
		cantidad:"",
		valor : ""
	},
	cereza : {
		cantidad:"",
		valor : ""
	},
	mandarina : {
		cantidad:"",
		valor : ""
	}
}
var tituloTabla = document.getElementById('titulo');
var select = document.getElementById('frutas');
var content = document.getElementById('contenido');
var button = document.getElementsByTagName('button')[0];
var cantFrutas = Object.keys(frutas).length;
var contar = 0;

while(cantFrutas > contar){
	tituloTabla.innerHTML += Object.keys(frutas)[contar] + " ";
	contar ++ ;
}

cargarActualizarContent();
completarContenido();

button.addEventListener("click", function(){
	var cantidadComprar = document.getElementById('cantidad').value;
	var frutaSeleccionada = select.value;

	if (cantidadComprar <= 0 || frutaSeleccionada == 0 ) {
		alert("Por favor seleccione una fruta o ingrese una cantidad mayor a 0 a  comprar");
		return;
	}
	if (cantidadComprar != 0 && frutaSeleccionada != 0 && cantidadComprar != "" && frutas[frutaSeleccionada]["cantidad"] >= cantidadComprar) {
		frutas[frutaSeleccionada]["cantidad"] =  frutas[frutaSeleccionada]["cantidad"] - cantidadComprar;
		completarContenido();
		var valorUnitarioFruta = frutas[frutaSeleccionada].valor;
		var costo = valorUnitarioFruta * cantidadComprar;

		alert("Felidades a comprado " + cantidadComprar + " unidades de " + frutaSeleccionada + " por un valor de " +  costo);
	}else{
		alert("la fruta actual no tiene stock para esa cantidad por favor seleccione una cantidad menor o igual a " + frutas[frutaSeleccionada]["cantidad"])
	}
});

function cargarActualizarContent(){
	Object.keys(frutas).forEach(function(key) {
		switch(key){
			case "mandarina" : 
			frutas[key]["cantidad"] = 20;
			frutas[key]["valor"] = 2000;
			break;
			case "durazno" : 
			frutas[key]["cantidad"] = 35;
			frutas[key]["valor"] = 5000;
			break;
			case "mora" : 
			frutas[key]["cantidad"] = 11;
			frutas[key]["valor"] = 3000;
			break;
			case "cereza" : 
			frutas[key]["cantidad"] = 25;
			frutas[key]["valor"] = 1500;
			break;
			case "fresa" : 
			frutas[key]["cantidad"] = 32;
			frutas[key]["valor"] = 2700;
			break;
		}
	});
}

function completarContenido(){
	content.innerHTML = "";
	select.innerHTML = "<option value='0'>Seleccione la fruta a comprar</option>";
	Object.keys(frutas).forEach(function(key) {
		content.innerHTML += "<td> " + key +"</td>" + "<td>" + frutas[key]["cantidad"] + "</td>" + "<td>" + frutas[key]["valor"] + "</td>";

		select.innerHTML += "<option value='"+ key +"'>"+ key  +"</option>"

	});
}
















