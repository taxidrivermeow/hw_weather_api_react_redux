import * as Types from "./actionTypes";
import {apiKey, baseURL} from "../../constants";

export const requestWeatherAction = () => ({
    type: Types.REQUEST_WEATHER,
    payload: "Loading...",
});

export const errorCityWeatherAction = () => ({
    type: Types.ERROR_CITY_WEATHER,
    payload: "City not found",
});

export const errorWeatherAction = () => ({
    type: Types.ERROR_WEATHER,
    payload: "Server error",
});

export const putWeatherAction = (weather, weatherType) => ({
    type: Types.PUT_WEATHER,
    payload: {weather, weatherType},
});

export const getWeatherAction = city => {
    return (dispatch) => {
        dispatch(requestWeatherAction());
        fetch(`${baseURL}data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === "404") return dispatch(errorCityWeatherAction());
                dispatch(putWeatherAction(`
                    Temperature: ${Math.floor(data.main.temp)}°C - ${data.weather[0].main} -  
                    Feels like: ${Math.floor(data.main.feels_like)}°C
                `, data.weather[0].main));
            })
            .catch(err => {
                console.log("Error: " + err)
                dispatch(errorWeatherAction())
            });
    }
};
