import {IProduct} from "./api";

export const getProductLocalStorage = (): IProduct[] | null => {
    const productString = localStorage.getItem('basketProduct');
    if (productString) {
        return JSON.parse(productString);
    } else {
        return null;
    }
}

export const setProductInLocalStorage = (product: IProduct): void => {
    const productString = JSON.stringify(product);
    localStorage.setItem('basketProduct', productString);
}