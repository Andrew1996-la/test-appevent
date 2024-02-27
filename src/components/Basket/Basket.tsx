import { useNavigate } from 'react-router-dom';
import cn from './basket.module.css';
const Basket = () => {
    const navigate = useNavigate();
    const goToBasket = () => {
        navigate('/basket');
    }

    return (
        <div className={cn.basketWrapper}>
            <button onClick={goToBasket}/> {/*button для доступности с клавиатуры*/}
        </div>
    )
}

export default Basket