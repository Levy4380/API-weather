let button = document.querySelector("button");
let nombre_ciudad = document.querySelector(".title");
let icono_tiempo = document.querySelector(".icon");
let temperatura = document.querySelector(".temperature");
let estado_cielo = document.querySelector(".sky");
let searchbar = document.getElementById("search-bar");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48c7c157eemshd8d050773d9e0b1p15d4e1jsn52d2bff8646f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

//Realizando request inicial
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20Aires', options)
.then(response => response.json())
.then(response => {
    nombre_ciudad.innerHTML = response.location.name + ", " + response.location.country
    icono_tiempo.innerHTML = "<img src='"+response.current.condition.icon+"'>";
    temperatura.innerHTML = response.current.temp_c + "°"

})
.catch(err => console.error(err));

//Seteando los valores iniciales de la barra de busqueda y su comportamiento
searchbar.addEventListener('click',()=>{
    document.getElementById("search-bar").value='';
})
searchbar.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        button.click();
    }else if(event.key === 'Backspace'){
        event.preventDefault();
        document.getElementById("search-bar").value='';
    }
})

//Estableciendo funcionamiento del boton
button.addEventListener('click', ()=> {
    let city = document.getElementById("search-bar").value
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
	.then(response => response.json())
	.then(response => {
        nombre_ciudad.innerHTML = response.location.name + ", " + response.location.country
        icono_tiempo.innerHTML = "<img src='"+response.current.condition.icon+"'>";
        temperatura.innerHTML = response.current.temp_c + "°"

    })
	.catch(err => console.error(err));
    document.getElementById("search-bar").value='Ingrese ciudad'
})