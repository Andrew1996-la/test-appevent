import React from "react";
import ProductListInBasket from "../../components/ProductListInBasket/ProductListInBasket";
import CounterSum from "../../components/CounterSum/CounterSum";
import {useAppSelector} from "../../hooks";
import cn from './basketPage.module.css'

const BasketPage = () => {
    const productCount = useAppSelector(state => state.basket.basketProduct.length);
    return (
        <section>
            {productCount > 0 ?
                <>
                    <ProductListInBasket />
                    <CounterSum />
                </> :
                <div className={cn.basketList_empty}>Корзина пуста</div>
            }

        </section>
    )
}

export default BasketPage