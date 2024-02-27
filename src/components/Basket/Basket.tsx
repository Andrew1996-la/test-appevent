import { useNavigate } from 'react-router-dom';
import cn from './basket.module.css';
import {useAppSelector} from "../../hooks";
const Basket = () => {
    const navigate = useNavigate();
    const productCountInBasket:number = useAppSelector(state => state.basket.basketProduct.length);
    const goToBasket = () => {
        navigate('/basket');
    }

    return (
        <div className={cn.basketWrapper}>
            <span className={cn.basketWrapper_counter}>{productCountInBasket}</span>
            <button onClick={goToBasket}/> {/*button для доступности с клавиатуры*/}
        </div>
    )
}

export default Basket