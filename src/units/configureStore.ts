import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        game: gameReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;