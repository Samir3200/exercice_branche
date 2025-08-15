
async function fetchCoordinates(Name) {
    try {
        const inputName = encodeURIComponent(Name);
        const url = `https://nominatim.openstreetmap.org/search?q=${inputName}&format=json&addressdetails=1&limit=1`;


        console.log(inputName)

        const response = await fetch(url);

        if (!response.ok) {
            switch (response.status) {
                case 400:
                    throw new Error("Requête incorrecte (400)");
                case 401:
                    throw new Error("Non autorisé (401)");
                case 403:
                    throw new Error("Accès interdit (403)");
                case 404:
                    throw new Error("Ressource non trouvée (404)");
                case 500:
                    throw new Error("Erreur serveur (500)");
                default:
                    throw new Error(`Erreur HTTP (${response.status})`);
            }
        }
        const data = await response.json();
        console.log(Name);


        if (data.length > 0) {
            return {
                lat: data[0].lat,
                lon: data[0].lon
            };
        } else {
            console.log("Aucune coordonnée trouvée");
            return null;
        }

    } catch (err) {
        console.error("Erreur lors de la requête :", err.message);
        return null;
    }
}

const inputCity = document.getElementById("cityInput");
const buttonOk = document.getElementById("button");
const gpsResult = document.getElementById("gps");

async function fetchWeather(lat, lon) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erreur HTTP Météo (${response.status})`);
        }

        const data = await response.json();

        if (data.current_weather) {
            return data.current_weather.temperature;
        } else {
            throw new Error("Données non disponibles");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

const tempResult = document.getElementById("temperature");

buttonOk.addEventListener("click", async (event) => {
    event.preventDefault();
    const Name = inputCity.value;

    if (Name === "") {
        alert("Veuillez entrer un nom de ville.");
        return;
    }

    gpsResult.textContent = "Recherche des coordonnées...";
    tempResult.textContent = "";

    try {
        const coords = await fetchCoordinates(Name);
        if (!coords) {
            gpsResult.textContent = "Coordonnées non trouvées.";
            return;
        }

        gpsResult.textContent = `Latitude : ${coords.lat}, Longitude : ${coords.lon}`;

        const temperature = await fetchWeather(coords.lat, coords.lon);
        tempResult.textContent = `Température = ${temperature} °C`;

    } catch (error) {
        gpsResult.textContent = "Une erreur";
        tempResult.textContent = "";
    }
});