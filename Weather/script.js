// const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa59548e3bmshdc6a7a8069db696p1468dajsn3b776a719b3c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// sublit pe click krte he input ke value chahiye

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("London");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Pune_cloud_pct.innerHTML = response.cloud_pct;
    Pune_temp.innerHTML = response.temp;
    Pune_feels_like.innerHTML = response.feels_like;
    Pune_humidity.innerHTML = response.humidity;
    Pune_min_temp.innerHTML = response.min_temp;
    Pune_max_temp.innerHTML = response.max_temp;
    Pune_wind_speed.innerHTML = response.wind_speed;
    Pune_wind_degrees.innerHTML = response.wind_degrees;
    Pune_sunrise.innerHTML = response.sunrise;
    Pune_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Mumbai_cloud_pct.innerHTML = response.cloud_pct;
    Mumbai_temp.innerHTML = response.temp;
    Mumbai_feels_like.innerHTML = response.feels_like;
    Mumbai_humidity.innerHTML = response.humidity;
    Mumbai_min_temp.innerHTML = response.min_temp;
    Mumbai_max_temp.innerHTML = response.max_temp;
    Mumbai_wind_speed.innerHTML = response.wind_speed;
    Mumbai_wind_degrees.innerHTML = response.wind_degrees;
    Mumbai_sunrise.innerHTML = response.sunrise;
    Mumbai_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Banglore_cloud_pct.innerHTML = response.cloud_pct;
    Banglore_temp.innerHTML = response.temp;
    Banglore_feels_like.innerHTML = response.feels_like;
    Banglore_humidity.innerHTML = response.humidity;
    Banglore_min_temp.innerHTML = response.min_temp;
    Banglore_max_temp.innerHTML = response.max_temp;
    Banglore_wind_speed.innerHTML = response.wind_speed;
    Banglore_wind_degrees.innerHTML = response.wind_degrees;
    Banglore_sunrise.innerHTML = response.sunrise;
    Banglore_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Hyderabad_cloud_pct.innerHTML = response.cloud_pct;
    Hyderabad_temp.innerHTML = response.temp;
    Hyderabad_feels_like.innerHTML = response.feels_like;
    Hyderabad_humidity.innerHTML = response.humidity;
    Hyderabad_min_temp.innerHTML = response.min_temp;
    Hyderabad_max_temp.innerHTML = response.max_temp;
    Hyderabad_wind_speed.innerHTML = response.wind_speed;
    Hyderabad_wind_degrees.innerHTML = response.wind_degrees;
    Hyderabad_sunrise.innerHTML = response.sunrise;
    Hyderabad_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Kolkata_cloud_pct.innerHTML = response.cloud_pct;
    Kolkata_temp.innerHTML = response.temp;
    Kolkata_feels_like.innerHTML = response.feels_like;
    Kolkata_humidity.innerHTML = response.humidity;
    Kolkata_min_temp.innerHTML = response.min_temp;
    Kolkata_max_temp.innerHTML = response.max_temp;
    Kolkata_wind_speed.innerHTML = response.wind_speed;
    Kolkata_wind_degrees.innerHTML = response.wind_degrees;
    Kolkata_sunrise.innerHTML = response.sunrise;
    Kolkata_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Delhi_cloud_pct.innerHTML = response.cloud_pct;
    Delhi_temp.innerHTML = response.temp;
    Delhi_feels_like.innerHTML = response.feels_like;
    Delhi_humidity.innerHTML = response.humidity;
    Delhi_min_temp.innerHTML = response.min_temp;
    Delhi_max_temp.innerHTML = response.max_temp;
    Delhi_wind_speed.innerHTML = response.wind_speed;
    Delhi_wind_degrees.innerHTML = response.wind_degrees;
    Delhi_sunrise.innerHTML = response.sunrise;
    Delhi_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
