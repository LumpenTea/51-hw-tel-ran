import { createSlice } from "@reduxjs/toolkit"

interface Info{
    temp?: number,
    city?: string,
    country?: string,
    pressure?: number,
    sunset?: number | 0
}

const defaultWeather: Info = {}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: defaultWeather,
    reducers: {
        putWeatherInfo(weatherInfo, action){
           weatherInfo.temp = action.payload.main.temp;
           weatherInfo.city = action.payload.name;
           weatherInfo.country = action.payload.sys.country;
           weatherInfo.pressure = action.payload.main.pressure;
           weatherInfo.sunset = action.payload.sys.sunset;
        }
    }
})

export const {putWeatherInfo} = weatherSlice.actions;
export default weatherSlice.reducer;