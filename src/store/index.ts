import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;