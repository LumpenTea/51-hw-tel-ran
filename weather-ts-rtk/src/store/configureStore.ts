import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import messageReducer from "../reducers/messageReducer";
import weatherReducer from "../reducers/weatherReducer";

export const store = configureStore({
    reducer: {
        weatherInfo: weatherReducer,
        message: messageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;