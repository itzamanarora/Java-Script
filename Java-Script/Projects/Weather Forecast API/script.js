// Add API to the
const apiURL = "https://api.open-meteo.com/v1/forecast";

// Select input fields and button
const latitude_input = document.getElementById("latitude");
const longitude_input = document.getElementById("longitude");
const fetch_Weather_Button = document.getElementById("fetch_weather_btn");

// Weather display elements
const temperature_Element = document.querySelector("#temperature");
const description_Element = document.querySelector("#weather-description");
const wind_Speed_Element = document.querySelector("#wind-speed");
const wind_direction_Element = document.querySelector("#wind-direction");
const city_Name_Element = document.querySelector("#city-name");

//Function to fetch weather data with dynamic latlon
async function fetchWeatherData(latitude, longitude) {
  const URL = `${apiURL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  try {
    const response = await fetch(URL); //get the API response
    const data = await response.json(); //get the response data

    // Extracting weather data
    const temperature = data.current_weather.temperature;
    const description = data.current_weather.weathercode;
    const windSpeed = data.current_weather.windspeed;
    const windDirection = data.current_weather.winddirection;

    // Updating the UI with the fetched data
    temperature_Element.textContent = `${temperature}`;
    description_Element.textContent = description;
    wind_Speed_Element.textContent = windSpeed;
    wind_direction_Element.textContent = windDirection;

    // Update city name (optional, you can fetch city name using reverse geocoding API)
    city_Name_Element.textContent = `Coordinates: ${latitude}, ${longitude}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Event listener for button click to fetch weather data
fetch_Weather_Button.addEventListener("click", () => {
  const latitude = parseFloat(latitude_input.value);
  const longitude = parseFloat(longitude_input.value);

  if (!isNaN(latitude) && !isNaN(longitude)) {
    fetchWeatherData(latitude, longitude);
  } else {
    alert("Please enter valid latitude and longitude values");
  }
});
