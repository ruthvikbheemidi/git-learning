import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        amount: 0,
    },
    reducers: {
        addMoney: (state, action) => {
            state.amount += action.payload;
        }
    }
});

export const { addMoney } = balanceSlice.actions;
export default balanceSlice.reducer;