import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { cards, cardsDeal } from "./constants"
import { card } from "./types"

interface state {
    user: string,
    cardCounter: number,
    playerCard: card | null,
    computerCard: card | null,
    computerResult: number,
    playerResult: number,
    resultWord: string,
    page: string
}

const initialState: state = {
    user: '',
    cardCounter: 0,
    playerCard: null,
    computerCard: null,
    computerResult: 0,
    playerResult: 0,
    resultWord: '',
    page: '/game'
}

const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        user(state, action: PayloadAction<string>){
            state.user = action.payload;
        },
        nextCard(state) {
            if (state.cardCounter < cards.player.length - 1) {
                state.page = state.cardCounter === 24 ? '/finish' : '/game';
                const { playerCard, computerCard } = state;

                state.cardCounter = state.cardCounter + 1;
                state.playerCard = cards.player[state.cardCounter];
                state.computerCard = cards.computer[state.cardCounter];

                if (playerCard!.number > computerCard!.number) state.playerResult++;
                else if (playerCard!.number < computerCard!.number) state.computerResult++;

            } else {
                state.cardCounter = 0;
            }
        },
        winCheck(state) {
            state.page = '/game';
            if (state.computerResult > state.playerResult) state.resultWord = 'Lose';
            else if (state.computerResult < state.playerResult) state.resultWord = 'Win';
            else state.resultWord = 'Draw';
        },
        gameStart(state) {
            cardsDeal();
            state.playerCard = cards.player[0];
            state.computerCard = cards.computer[0];
            state.computerResult = 0;
            state.playerResult = 0;
        }
    }
})

export const { user, nextCard, winCheck, gameStart } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;