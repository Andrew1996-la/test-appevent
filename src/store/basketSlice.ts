import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../api";

interface IInitState {
    basketProduct: IProduct[] | [],
}

const initialState: IInitState = {
    basketProduct: [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<IProduct>): void {
            state.basketProduct = [...state.basketProduct, action.payload];
        },

        removeFromBasket(state, action: PayloadAction<number>): void {
            state.basketProduct = state.basketProduct.filter(product => product.id !== action.payload);
        }
    }
})

export const {addToBasket, removeFromBasket } = basketSlice.actions
export default basketSlice.reducer