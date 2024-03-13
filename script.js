// Write your JavaScript code here!
formSubmission(document, document.getElementById("missionTarget"), "name", "diameter", "star", "distance", "moons", "imageUrl");
// script.js

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    const listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
        // Below this comment, call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        const selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.imageUrl
        );
    });
});

