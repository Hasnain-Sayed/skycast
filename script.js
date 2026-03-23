
const apiKey = "d2ec50b9d10d46371601658b5dd26bca";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

let btn = document.getElementById('caller');

let city = document.getElementById('cityInput');

btn.addEventListener('click', (e) =>{
 console.log('from btn: ',city.value);
 getWeather(city.value);
});
city.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        console.log('from enter: ',city.value);
        getWeather(city.value)
    }
});

async function getWeather(city){
  

try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
    if (response.status == 404) {
        document.getElementById('errorMessage').innerText = "City not found. Please enter a valid city name.";
        document.querySelector('.errBlock').style.display = "flex";
         document.querySelector('.content').style.display = "none";
        return;
    }
    const data = await response.json();
    console.log(data);

    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('wind').innerText = data.wind.speed + " m/s";
    document.getElementById('humidity').innerText = data.main.humidity + "%";
    document.getElementById('latitude').innerText = "Latitude: " + data.coord.lat;
    document.getElementById('longitude').innerText = "Longitude: " + data.coord.lon;

    document.getElementById('weatherStatus').src = `images/${data.weather[0].main.toLowerCase()}.png`;
    document.querySelector('.content').style.display = "flex";
    document.querySelector('.errBlock').style.display = "none";

} catch (error) {
    console.error("Error fetching weather data:", error);
}
}
// getWeather("Karachi");
function github(){
    window.open('https://github.com/Hasnain-Sayed/skycast.git', "_blank")
}