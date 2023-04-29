import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../redux/actions/mainActions";
import {getWeatherAction} from "../redux/actions/weatherActions";

const Form = () => {
    const dispatch = useDispatch();
    const city = useSelector(state => state.city);

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Enter city name"
                onChange={e=>dispatch(Actions.changeCity(e.currentTarget.value))}
            />
            <button onClick={()=>dispatch(getWeatherAction(city))}>Get weather</button>
        </div>
    );
};

export default Form;
