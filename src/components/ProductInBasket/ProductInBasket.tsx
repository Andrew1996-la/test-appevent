import { FC } from "react";
import Button from "../Button/Button";
import cn from './productInBasket.module.css';
import {useAppDispath} from "../../hooks";
import {removeFromBasket} from "../../store/basketSlice";

interface IProductInBasket {
    title: string,
    urlImg: string,
    price: number,
    id: number,
}
const ProductInBasket: FC<IProductInBasket> = ({title, urlImg, price, id}) => {

    const dispatch = useAppDispath();

    const handleDelete = (id: number) => {
        dispatch(removeFromBasket(id));
    }

    return (
        <div className={cn.productWrapper}>
            <div className={cn.productWrapper_imgContainer}>
                <img src={urlImg} alt="product"/>
            </div>
            <div>{title}</div>
            <div>Цена: {price} &#8381;</div>
            <Button callback={() => handleDelete(id)}>Удалить</Button>
        </div>
    )
}

export default ProductInBasket