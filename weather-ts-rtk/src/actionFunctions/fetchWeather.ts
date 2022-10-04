import { putMessage } from "../reducers/messageReducer"
import { putWeatherInfo } from "../reducers/weatherReducer";
import { AppDispatch } from "../store/configureStore";
import { api_key, base_url } from "../units/constants";


export const fetchWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            dispatch(putMessage(null))
            dispatch(putWeatherInfo(data));
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Enter correct city name'));
        }
    }
}