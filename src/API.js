const API_KEY = "f279df88f01232850ddff621c125603d"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"
const APP_ID = `&appid=${API_KEY}`


const getUserLocation = (lat, lon) => {
    return `onecall?lat=${lat}&lon=${lon}`
}

const ApiSettings = {
    fetchWeatherData:  async (lat,lon) => { 
 
    const endpoint =  `${BASE_URL}${getUserLocation(25.74983,89.2269401)}&exclude=current,minutely,hourly,daily,alerts&${APP_ID}`
    // const endpoint = `${BASE_URL}onecall?lat=25.7498342&lon=89.2269401&exclude=current,minutely,hourly,daily,alerts${APP_ID}`
    console.log("endpoint",endpoint)
      return await (await fetch(endpoint)).json();
    },
}

export default ApiSettings; 


//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// 25.7498342,89.2269401,13z/data=!3m1!4b1!4m5!3m4!1s0x39e32de6fca6019b:0x9fa496e687f818c8!8m2!3d25.7438916!4d89.275227