import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./slices/balance.slice";

const store = configureStore({
    reducer: {
        balance: balanceReducer,
    }
})

export default store;