const apiKey = '17d76df31690ad33cc7dc125b5cd642c';

async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const weatherData = await response.json();

        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = '';

    const cityName = document.createElement('h2');
    cityName.textContent = data.name;

    const highLow = document.createElement('p');
    const high = (data.main.temp_max - 273.15) * 9/5 + 32;
    const low = (data.main.temp_min - 273.15) * 9/5 + 32;
    highLow.textContent = `High: ${high.toFixed(2)}°F, Low: ${low.toFixed(2)}°F`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const forecast = document.createElement('p');
    forecast.textContent = `Weather: ${data.weather[0].main}`;

    weatherResult.appendChild(cityName);
    weatherResult.appendChild(highLow);
    weatherResult.appendChild(humidity);
    weatherResult.appendChild(forecast);
}
