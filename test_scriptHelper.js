require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
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
        <img src="${imageUrl}" alt="Mission Target Image">
    `;
    document.getElementById('missionTarget').appendChild(missionTargetDiv);
}

// Validate input values
// Validate input values
function validateInput(testInput) {
    const inputAsString = String(testInput); // Convert to a string

    if (inputAsString.trim() === '') {
        return 'Empty';
    } 
    else if (isNaN(inputAsString)) {
        return 'Not a Number';
    } 
    else {
        return 'Is a Number';
    }
}



// Update shuttle requirements based on user input
function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    // Validate pilot name
    const pilotValidation = validateInput(pilot);
    if (pilotValidation === 'Empty') {
        alert('Please enter a valid pilot name.');
        return;
    } 
    else if (pilotValidation === 'Not a Number') {
        alert('Pilot name must be a valid string.');
        return;
    }

    // Validate co-pilot name (similar logic as above)
    const copilotValidation = validateInput(copilot);
    if (copilotValidation === 'Empty') {
        alert('Please enter a valid co-pilot name.');
        return;
    } 
    else if (copilotValidation === 'Not a Number') {
        alert('Co-pilot name must be a valid string.');
        return;
    }

    // Validate fuel level (similar logic as above)
    const fuelValidation = validateInput(fuelLevel);
    if (fuelValidation === 'Empty') {
        alert('Please enter a valid fuel level.');
        return;
    } 
    else if (fuelValidation === 'Not a Number') {
        alert('Fuel level must be a valid number.');
        return;
    }

    // Validate cargo mass (similar logic as above)
    const cargoValidation = validateInput(cargoMass);
    if (cargoValidation === 'Empty') {
        alert('Please enter a valid cargo mass.');
        return;
    } 
    else if (cargoValidation === 'Not a Number') {
        alert('Cargo mass must be a valid number.');
        return;
    }

    // Update pilot and co-pilot names
    document.querySelector('#pilotStatus').textContent = `Pilot: ${pilot}`;
    document.querySelector('#copilotStatus').textContent = `Co-pilot: ${copilot}`;

    // Check fuel level
    if (fuelLevel < 10000) {
        document.querySelector('#faultyItems').style.visibility = 'visible';
        document.querySelector('#fuelStatus').textContent = 'Not enough fuel for the journey';
        document.querySelector('#launchStatus').textContent = 'Shuttle not ready for launch';
        document.querySelector('#launchStatus').style.color = 'red';
        alert('Not enough fuel for the journey! Please refuel.');
        return;
    }

    // Check cargo mass
    if (cargoMass > 10000) {
        document.querySelector('#faultyItems').style.visibility = 'visible';
        document.querySelector('#cargoStatus').textContent = 'Too much mass for takeoff';
        document.querySelector('#launchStatus').textContent = 'Shuttle not ready for launch';
        document.querySelector('#launchStatus').style.color = 'red';
        alert('Cargo mass exceeds safe limits! Adjust the cargo.');
        return;
    }

    // If everything is okay, shuttle is ready for launch
    document.querySelector('#launchStatus').textContent = 'Shuttle is ready for launch';
    document.querySelector('#launchStatus').style.color = 'green';
    alert('Shuttle is ready for launch!');
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        // Handle the response
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
