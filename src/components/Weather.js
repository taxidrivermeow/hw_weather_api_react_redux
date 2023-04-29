import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state.weather);
    return (
        <div className="weather">
            {weather}
        </div>
    );
};

export default Weather;
