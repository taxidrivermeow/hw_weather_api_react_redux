import * as Types from "./../actions/actionTypes";

function mainReducer(state, action) {
    switch (action.type) {
        case Types.CHANGE_CITY:
            return {
                ...state,
                city: action.payload,
            };

        case Types.REQUEST_WEATHER:
            return {
                ...state,
                weather: action.payload,
            };

        case Types.ERROR_CITY_WEATHER:
            return {
                ...state,
                weather: action.payload,
                weatherType: "default",
            };

        case Types.ERROR_WEATHER:
            return {
                ...state,
                weather: action.payload,
                weatherType: "default",
            };

        case Types.PUT_WEATHER:
            return {
                ...state,
                weather: action.payload.weather,
                weatherType: action.payload.weatherType,
            };

        default:
            return state;
    }
}

export default mainReducer;
