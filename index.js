let button = document.querySelector("button");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48c7c157eemshd8d050773d9e0b1p15d4e1jsn52d2bff8646f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
let nombre_ciudad = document.querySelector(".title");
let icono_tiempo = document.querySelector(".icon");
let temperatura = document.querySelector(".temperature");
let estado_cielo = document.querySelector(".sky");



button.addEventListener('click', ()=> {
    let city = document.getElementById("search-bar").value
    console.log(city);
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        nombre_ciudad.innerHTML = response.location.name + ", " + response.location.country
        icono_tiempo.innerHTML = "<img src='"+response.current.condition.icon+"'>";
        temperatura.innerHTML = response.current.temp_c + "°"

    })
	.catch(err => console.error(err));
})
