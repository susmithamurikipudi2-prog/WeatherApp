function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = 
    "";
  if (city === "") {
    document.getElementById("result").innerText = "Please enter city name";
    return;
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <h3>${data.name}</h3>
          <p>🌡 Temperature: ${data.main.temp} °C</p>
          <p>☁ Weather: ${data.weather[0].main}</p>
          <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
      } else {
        document.getElementById("result").innerText = "City not found";
      }
    })
    .catch(error => {
      document.getElementById("result").innerText = "Error fetching data";
    });
}
