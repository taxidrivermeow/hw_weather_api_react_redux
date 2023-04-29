import {applyMiddleware, createStore} from "redux";
import mainReducer from "../reducers/mainReducer";
import thunk from "redux-thunk";

const initialState = {
    city: null,
    weather: null,
    weatherType: "default",
}

const store = createStore(
    mainReducer,
    initialState,
    applyMiddleware(thunk),
);

export default store;
