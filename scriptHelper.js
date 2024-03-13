require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.createElement('div');
    missionTargetDiv.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
    document.getElementById('missionTarget').innerHTML = missionTargetDiv.innerHTML;
}

 
function validateInput(testInput) {
    const inputAsString = String(testInput).trim();
    if (inputAsString === '') {
        return 'Empty';
    } else if (isNaN(inputAsString)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (
        validateInput(pilot) === "Empty" ||
        validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
            alert("All Field is required")
    } else if (

        validateInput(pilot) === "Is a Number" ||
        validateInput(copilot) === "Is a Number") {
            alert("Please enter a Name")
    } else if (
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Not a Number") {
            alert("Please enter in a Number")
    } else 

        launchStatus;

    if (fuelLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red"
    } else
        fuelStatus.innerHTML = ("Fuel level high enough for launch");

    if (cargoLevel > 10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red"
    } else
        cargoStatus.innerHTML = ("Cargo mass low enough for launch");

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    }   
        pilotStatus.innerHTML = (`Pilot ${pilot} is ready for launch`);
        copilotStatus.innerHTML = (`Co-pilot ${copilot} is ready for launch`); 

}    

 
async function myFetch() {
     let planetsReturned;
 
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function(response) {
            return response.json();
        })
        .catch(function(error) {
            console.error('Error fetching planets:', error);
            throw error; // Rethrow the error for proper error handling
        });

    return planetsReturned;
 }
 
 // Select a random planet from the list
function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;