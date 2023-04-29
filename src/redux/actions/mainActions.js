import * as Types from "./actionTypes";

export const changeCity = city => ({
        type: Types.CHANGE_CITY,
        payload: city,
    });
