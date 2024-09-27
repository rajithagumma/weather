import React, {useEffect,useState,useRef} from 'react'
import './Weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloudy_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import windy_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const Weather = () => {
    const inputRef=useRef();
    const [weatherData, setWeatherData]=useState(false);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloudy_icon,
        "02n": cloudy_icon,
        "03d": cloudy_icon,
        "03n": cloudy_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
        "50d": windy_icon,
        "50n": windy_icon,
    }
    const search=async (city)=>{
        if (city===""){
            alert("Enter City Name");
            return;
        }
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            const response= await fetch(url);
            const data= await response.json();
            if (!response.ok){
                alert(data.message);
                return;
            }
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location: data.name,   
                icon: icon,       
            })
        }
        catch(error){
            setWeatherData(false);
            console.log("error");
        }
    }
    useEffect(()=>{
        search("America");
    },[])
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type="text" placeholder="search" />
        <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)} />
      </div>
      {
        weatherData?<>
        <img src={weatherData.icon} alt="weather-icon" />
      <p className='temperature'>{weatherData.temperature}°c </p>
      <p className='location'>{weatherData.location}</p>
      <div className="weather-data">
        <div className='col'>
            <img src={humidity_icon} alt="humidity-icon" />
            <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className='col'>
            <img src={windy_icon} alt="wind-icon" />
            <div>
                <p>{weatherData.windspeed} Km/h</p>
                <span>Windspeend</span>
            </div>
        </div>
      </div>
        </>:<></>
      }
      
    </div>
  );
}

export default Weather
