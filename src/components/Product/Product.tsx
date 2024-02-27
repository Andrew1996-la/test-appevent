import Button from "../Button/Button";
import { FC } from "react";
import cn from './product.module.css';

interface IProduct {
    title: string,
    urlImg: string,
    price: number,
}
const Product: FC<IProduct> = ({title, urlImg, price}) => {
    return (
        <div className={cn.product}>
            <div className={cn.product_title} data-full-text={title}>{title}</div> {/*data-full-text - хак для отображения обрезных заголовков при наведении */}
            <div className={cn.product_img}>
                <img src={urlImg} alt="product img"/>
            </div>
            <div className={cn.product_buy}>
                <div className={cn.product_buy_price}>Цена: {price} &#8381;</div>
                <Button>В корзину</Button>
            </div>
        </div>
    )
}

export default Product