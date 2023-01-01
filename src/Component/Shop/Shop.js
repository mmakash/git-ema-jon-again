import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='shop-contaier'>
           <div className="product-container">
           {
            products.map(product =><Product key={product.id}
            product={product}
            ></Product>)
           }
           </div>
           <div className="cart-container">
            <h2>This is for order</h2>
           </div>
        </div>
    );
};

export default Shop;