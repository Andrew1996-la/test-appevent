import Button from "../Button/Button";
import {FC, useState} from "react";
import cn from './product.module.css';
import {useAppDispath} from "../../hooks";
import {addToBasket} from "../../store/basketSlice";
import {useNavigate} from "react-router-dom";

interface IProduct {
    id: number
    title: string,
    urlImg: string,
    price: number,
}
const Product: FC<IProduct> = ({title, urlImg, price, id}) => {
    const dispatch = useAppDispath();
    const navigate = useNavigate();
    const [buttonMessage, setButtonMessage] = useState('В корзину');
    const addProductToBasket = (product: any): void => {
        if(buttonMessage === 'Оформить заказ') {
            navigate('/basket');
        } else {
            dispatch(addToBasket(product))
            setButtonMessage('Оформить заказ');
        }
    }

    return (
        <div className={cn.product}>
            <div className={cn.product_title} data-full-text={title}>{title}</div> {/*data-full-text - хак для отображения обрезных заголовков при наведении */}
            <div className={cn.product_img}>
                <img src={urlImg} alt="product img"/>
            </div>
            <div className={cn.product_buy}>
                <div className={cn.product_buy_price}>Цена: {price} &#8381;</div>
                <Button callback={() => addProductToBasket({title: title, urlImg: urlImg, price: price, id: id})}>
                    {buttonMessage}
                </Button>
            </div>
        </div>
    )
}

export default Product