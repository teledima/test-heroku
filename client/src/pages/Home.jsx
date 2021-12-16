import React, { useContext, useRef } from "react"
import WeatherNow from "../components/WeatherNow";
import Characteristic from "../components/Characteristic";
import ClothesRecommendation from "../components/ClothesRecommendation";
import UpdateButton from "../components/UpdateButton";

import {
    Home as HomeStyle,
    HomeList
}
from './css/Home.module.css';

import { Animation } from '../components/css/UpdateButton.module.css'
import { WeatherContext } from "../components/context";
import { useTempreture } from "../components/hooks";

const Home = () => {
    const weather = useContext(WeatherContext)
    const [tempretureUnit, tempretureConverter] = useTempreture()
    const buttonRef = useRef(null)
    const handlerUpdate = () => {
        if (buttonRef.current.className.length !== 0) {
            buttonRef.current.className = ''
        }
        else 
            buttonRef.current.className = Animation
    }
    const GetTime = () => {
        const hours = new Date(weather.dt * 1e3).getHours()
        if (0 <= hours && hours <= 11)
            return 'night'
        else
            return 'sunny'
    }

    const GetWeatherName = () => {
        const mainWeather = weather.weather.at(0).main
        switch (mainWeather.toLowerCase()) {
            case 'thunderstorm':
                return 'clouds'

            case 'drizzle':
                return 'rain'
            
            case 'atmosphere':
                return 'clouds'
            default:
                return mainWeather.toLowerCase();
        }
    }

    const GetClothesName = () => {
        const weatherName = GetWeatherName()
        const tempreture = tempretureConverter(weather.main.temp)
        if (weatherName === 'rain')
            return weatherName
        else if ((weatherName === 'clear' || weatherName === 'clouds') && tempreture >= 303)
            return 'hot'
        else if ((weatherName === 'clear' || weatherName === 'clouds') && tempreture >= 293)
            return 'sunny'
        else if ((weatherName === 'clear' || weatherName === 'clouds') && tempreture >= 273 && tempreture <= 293)
            return 'normal'
        else if (weatherName !== 'rain' && tempreture < 273)
            return 'snow'
    }
    const clothesName = GetClothesName()

    return (
        <div className={HomeStyle}>
            <div className={HomeList}>
                <WeatherNow temperatureFeel={ tempretureConverter(weather.main.feels_like) } 
                            weatherType={`${GetTime()}_${GetWeatherName()}`} 
                            temperatureNow={ tempretureConverter(weather.main.temp) }
                            tempretureUnit={ tempretureUnit }/>
                <div>
                    <ClothesRecommendation clothesWomen={`${clothesName}_woman`} clothesMan={`${clothesName}_man`}/>
                    <UpdateButton ref={buttonRef} handlerClick={handlerUpdate}/>
                </div>
            </div>
            <div className={HomeList}>
                <Characteristic image='pressure.png' value={Math.round(weather.main.pressure * 0.75)} unitMeasure='мм рт.ст.'/>
                <Characteristic image='water_drop.png' value={weather.main.humidity} unitMeasure='%'/>
                <Characteristic image='wind.png' value={weather.wind.speed} unitMeasure='м/с'/>
            </div>
        </div>
    )
}

export default Home;
