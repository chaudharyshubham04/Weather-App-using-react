import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='265f4450b9bbcd9999a175e4dd835946';

export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}
