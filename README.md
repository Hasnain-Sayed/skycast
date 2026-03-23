# Skycast 🌤️

A clean, real-time weather app built with Vanilla JS and the OpenWeatherMap API.

## Preview

> Search any city and instantly get live weather data including temperature, humidity, wind speed, and coordinates.

## Features

- 🌍 Real-time weather data for any city in the world
- 🌡️ Temperature in Celsius with weather description
- 💧 Humidity and wind speed display
- 📍 Latitude & Longitude coordinates
- 🖼️ Dynamic weather icons based on current conditions
- ⚠️ Error handling for invalid city names
- ⌨️ Search by clicking the button or pressing Enter
- 🎨 Animated gradient background

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api)

## Weather Conditions Supported

| Condition | Icon |
|-----------|------|
| Clear | ☀️ |
| Clouds | ⛅ |
| Rain | 🌧️ |
| Drizzle | 🌦️ |
| Thunderstorm | ⛈️ |
| Snow | 🌨️ |
| Mist / Fog | 🌫️ |
| Haze / Smoke / Dust | 🌁 |

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/skycast.git
```

2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

3. Replace the API key in `script.js`
```javascript
const apiKey = "your_api_key_here";
```

4. Open `index.html` in your browser — done!

## Project Structure

```
skycast/
├── index.html
├── style.css
├── script.js
└── images/
    ├── clear.png
    ├── clouds.png
    ├── rainy.png
    ├── drizzle.png
    ├── thunderstorm.png
    ├── snow.png
    ├── mist.png
    ├── haze.png
    └── utils/
        ├── search.png
        ├── humidity.png
        ├── windy.png
        ├── lat.png
        └── long.png
```

## License

MIT License — feel free to use and modify.

---

Made with ❤️ by Blaze
