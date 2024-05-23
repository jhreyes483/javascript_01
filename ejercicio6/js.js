		var consultas = [];
		var cadenaNumero = "";

		buttons = document.querySelectorAll('button');			
		view_operaciones = document.getElementById('inputResult');

		buttons.forEach(function(el){
			el.addEventListener("click",function(){
				var valor = this.value;
				var state = "";
				switch(valor){
					case "0" : case "1" : case "2" : case "3" : case "4" : case "5" : case "6" : case "7" : case "8" : case "9" :
						cadenaNumero+=valor;
						state = "agregar"
					break;

					case "-" : case "/" : case "*" : case "+" :
						consultas.push(cadenaNumero);
						consultas.push(valor);
						cadenaNumero = "";
						state = "operacion"
					break;

					case "=" : 
						state = "finalizar";
						if (cadenaNumero != "") {
							consultas.push(cadenaNumero);
						}
						cadenaNumero = "";
					break;

					case "CE" : 
						state = "borrar";
						consultas = [];
						cadenaNumero = "";						
					break;

					default :
					break

				}
				if (consultas.length > 0) {
					vista = consultas.join("") + cadenaNumero;
				}else{
					vista = cadenaNumero;
				}

				if (state === "finalizar" && consultas.length >= 3 ) {
					consultas.forEach(function(item, idx){
						if (idx%2 == 0) {
							item = parseInt(item);
							switch(consultas[idx-1]){
								case "+":
								console.log("suma")
								result += item;
								break ; 
								case "-":
								result -= item;
								break;
								case "/":
								result /= item;
								break;
								case "*":
								result *= item;
								break;
							}
						}
						if (idx == 0) {
							result = parseInt(item);
						}
						
					});

					vista = result;
					
					consultas = [];
					cadenaNumero = "";

					cadenaNumero = vista;

				}
				view_operaciones.value = vista;
			});
		});