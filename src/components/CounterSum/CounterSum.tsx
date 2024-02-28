import {IProduct} from "../../api";
import {useAppSelector} from "../../hooks";
import cn from './counterSum.module.css';

const CounterSum = () => {
    const productList: IProduct[] | [] = useAppSelector(state => state.basket.basketProduct);
    let sum = 0;
    for (let i = 0; i < productList.length; i++) {
        sum += productList[i].price;
    }
    return (
        <div className={cn.sum}>
            Итого: {sum}
        </div>
    )
}

export default CounterSum