import React from "react";
import {
    WeatherNow as WeatherNowStyle,
    WeatherImageContainer,
    TempretureUnit,
    WhiteText,
    CityText
} from './css/WeatherNow.module.css';

const WeatherNow = ({weatherType, temperatureFeel, temperatureNow, tempretureUnit}) => {
    const definteText = () => {
        switch (weatherType) {
            case 'sunny_clouds':
            case 'night_clouds':
                return "Облачно"

            case 'sunny_rain':
            case 'night_rain':
                return "Дождь"
            
            case 'sunny_snow':
            case 'night_snow':
                return "Снег"
            
            case 'sunny_clear':
            case 'night_clear':
                return "Ясно"

            default:
                return "Погода не определена"
        }
    }

    return (
        <div className={WeatherNowStyle}>
            <h2 className={WhiteText}>Погода сейчас</h2>
            <h2 className={CityText}>Пермь</h2>
            <div className={[WeatherImageContainer, WhiteText].join(' ')}>
                <img src={`./assets/${weatherType}.png`} alt={weatherType} weight="128px" height="128px"/>
                <p>{temperatureNow}<span>&#176;</span><span className={TempretureUnit}>{tempretureUnit}</span></p>
            </div>
            <h3 className={WhiteText}>{definteText()}</h3>
            <h3>Ощущается как {temperatureFeel}<span>&#176;</span>{tempretureUnit}</h3>
        </div>
    )
}

export default WeatherNow
