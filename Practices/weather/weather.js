function showWeatherDetails(event) {
      event.preventDefault();

      const latitude = document.getElementById('latitude').value.trim();
      const longitude = document.getElementById('longitude').value.trim();

      if (!latitude || !longitude) {
        alert("Please enter both latitude and longitude.");
        return;
      }

      const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace with your API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Location not found');
          }
          return response.json();
        })
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `
            <h2>Weather at Latitude: ${latitude}, Longitude: ${longitude}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
          document.getElementById('weatherInfo').innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
    }

    document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);