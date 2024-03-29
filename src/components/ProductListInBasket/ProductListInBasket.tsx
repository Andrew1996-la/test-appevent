import { useAppSelector } from "../../hooks";
import { IProduct } from "../../api";
import ProductInBasket from "../ProductInBasket/ProductInBasket";
import cn from './productListInBasket.module.css';

const ProductListInBasket = () => {
    const productList: IProduct[] | [] = useAppSelector(state => state.basket.basketProduct);
    {/*соре, не понимаю почему в этом компоненте консоль высвечивает ошибку о не уникальном key, фактически уникальный*/}
    return (
        <div className={cn.productList}>
            {productList.map((product: any) => {
                return (
                    <ProductInBasket
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        urlImg={product.urlImg}
                        price={product.price}/>
                )
            })}
        </div>
    )
}

export default ProductListInBasket