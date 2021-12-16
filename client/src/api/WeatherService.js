import axios from "axios";

export default class WeatherService {
    constructor() {
        this.token = '4a6530e623e2b188f9cadf9f8f0eada5'
        this.axiosInstance = axios.create({
            'baseURL': 'https://api.openweathermap.org/data/2.5/',
        })
    }
    async GetCurrentWeather(cityName) {
        const response = await this.axiosInstance.get('weather', {
            params: {
                q: cityName,
                appid: this.token
            }
        })
        return await response.data
    }
}
