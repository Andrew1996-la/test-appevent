import {configureStore, createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import basketReducer, {addToBasket, removeFromBasket} from "./basketSlice";
import {setProductInLocalStorage} from "../localstorageApi";
import {IProduct} from "../api";

export const listenerMiddleware = createListenerMiddleware();
const actions = [addToBasket, removeFromBasket];

listenerMiddleware.startListening({
    matcher: isAnyOf(...actions),
    effect: (_, listenerApi) => {
        const state = listenerApi.getState() as RootState;
        setProductInLocalStorage(state.basket.basketProduct as unknown as IProduct);
    },
});


const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(listenerMiddleware.middleware),
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;