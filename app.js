//Jquery

$(".botonPopUp").click(
    function(){
        $(".contenido-pagina").hide()
        $(".flex-container").hide()
        $(".ContenedorPopUp").hide()
        $(".Ops-error").show()
    }
)

$(".ahoraNoPopUp").click(
    function(){
        $(".ContenedorPopUp").hide()
        $(".Ops-error").hide()
    }
)

//Javascript

const contenedor = document.querySelector(".flex-container");

function mostrarperrito(nimagen, nombre, edad, ubicacion){
	imagen = `<span><img class="imagenperrito"src="imagenes/Perritos/${nimagen+1}.jpg"></span>`;
	nombre = `<h3><b>Nombre:</b> ${nombre}</h3>`;
	edad = `<h4><b>Años:</b> ${edad}</h4>`;
	ubicacion = `<h4><b>Ubicación:</b> ${ubicacion}</h4>`;
	return [imagen, nombre, edad, ubicacion];
}

nombresp = ["Cerbero", "Austin", "Carmelita", "Akira", "Taco", "Tasha", "Inugami", "Doty", "Dasher", "Blitzen"];
edadesp = [3, 4, 5, 10, 5, 5, 5, 0, 0, 0];
ubicaciones = ["Chapinero", "Teusaquillo", "Kenedy", "Engativá", "Suba","Chapinero", "Teusaquillo", "Kenedy", "Engativá", "Suba"];

let documentFragment = document.createDocumentFragment();

for (var i = 0; i < 20; i++){
	let numero = Math.round(Math.random()*8 + 1);
	const perrito = mostrarperrito(numero, nombresp[numero], edadesp[numero], ubicaciones[numero]);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{
	document.querySelector(".sku-dog-data").value = numero;
	});
	div.tabIndex = i+1;
	div.classList.add("flex-item", `sku:${i+1}`);
	div.innerHTML += perrito[0] + perrito[1] + perrito[2] + perrito[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);