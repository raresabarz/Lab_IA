// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")



// Add event listener
button.addEventListener("click", altaViata)


// Define function
function altaViata() {
	nume.innerHTML = "Software Engineer"
	prenume.innerHTML = "Endava"
	educatie.innerHTML = "Experiente"
	asteptari.innerHTML = "<ul><li>Libertate financiara</li><li>Educatie superioara</li</ul>"
	
	img.src = "poza2.jpg"
	img.style.opacity = "70%"
	img.style.width = "600px"
	img.style.height = "400px"
	img.style.border = "3px solid black"

	body.style.backgroundImage = "url('pisica2.jpg')"
	body.style.backgroundRepeat = "no-repeat"
	body.style.backgroundSize = "cover"

}