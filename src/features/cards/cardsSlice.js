import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice =  createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) =>{
            state.cards = {...state.cards, [action.payload.id]: {...action.payload}}
        }
    }
});
export const selectCards = id => state => state.cards.cards[id];
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;