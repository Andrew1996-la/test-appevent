import {getProduct, IProduct, IProductList} from "../../api";
import {useEffect, useState} from "react";
import Product from "../Product/Product";
import cn from './productList.module.css';

const ProductList = () => {

    const [products, setProducts] = useState<IProduct[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productList: IProductList = await getProduct();

                setProducts(productList.items);
            } catch (error) {
                console.error("Error fetching product list:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className={cn.productList}>
            {products.map((product: IProduct) => (
                <Product
                    key={product.id}
                    urlImg={product.image}
                    title={product.name}
                    price={product.price}
                />
            ))}
        </section>
    )
}

export default ProductList