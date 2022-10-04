import { createSlice } from "@reduxjs/toolkit";

const defaultMessage: string = 'Enter city name';

const messageSlice = createSlice({
    name: 'message',
    initialState: defaultMessage,
    reducers: {
        putMessage(message, action){
            return action.payload
        }
    }
})

export const {putMessage} = messageSlice.actions;
export default messageSlice.reducer;

