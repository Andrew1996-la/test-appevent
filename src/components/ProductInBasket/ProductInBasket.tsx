import { FC } from "react";
import Button from "../Button/Button";
import cn from './productInBasket.module.css';

interface IProductInBasket {
    title: string,
    urlImg: string,
    price: number,
    id: number,
}
const ProductInBasket: FC<IProductInBasket> = ({title, urlImg, price, id}) => {
    return (
        <div className={cn.productWrapper}>
            <div className={cn.productWrapper_imgContainer}>
                <img src={urlImg} alt="product"/>
            </div>
            <div>{title}</div>
            <div>Цена: {price} &#8381;</div>
            <Button>Удалить</Button>
        </div>
    )
}

export default ProductInBasket