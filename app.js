let feet = document.getElementById("feet")
let meters = document.getElementById("meters")
let liters = document.getElementById("liters")
let gallons = document.getElementById("gallons")
let kilos = document.getElementById("kilos")
let pounds = document.getElementById("pounds")
let footConversion = document.getElementById("foot-conversion")
let meterConversion = document.getElementById("meter-conversion")
let literConversion = document.getElementById("liter-conversion")
let gallonConversion = document.getElementById("gallon-conversion")
let kiloConversion = document.getElementById("kilo-conversion")
let poundConversion = document.getElementById("pound-conversion")

let input = document.getElementById("input")

input.addEventListener("input", updateValues)

function updateValues(e) {
    feet.textContent = e.target.value
    meterConversion.textContent = Math.round(e.target.value / 3.28084 * 1000) / 1000
    meters.textContent = e.target.value
    footConversion.textContent = Math.round(e.target.value * 3.28084 * 1000) / 1000
    liters.textContent = e.target.value
    gallonConversion.textContent = Math.round(e.target.value / 3.78541 * 1000) / 1000
    gallons.textContent = e.target.value
    literConversion.textContent = Math.round(e.target.value * 3.78541 * 1000) / 1000
    kilos.textContent = e.target.value
    poundConversion.textContent = Math.round(e.target.value * 2.20462 * 1000) / 1000
    pounds.textContent = e.target.value
    kiloConversion.textContent = Math.round(e.target.value / 2.20462 * 1000) / 1000
}