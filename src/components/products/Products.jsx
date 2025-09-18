import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
const Products = () => {
   const [products, setProducts]= useState([]);

useEffect(()=>{
    fetch("/public/products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
// console.log(products)
    return (
        <div className='w-11/12 mx-auto'> 
            <div className="">
                <h1>Active auctions</h1>
                <p>Discover and bid on extraordinary items</p>
                
                 <Product products={products}></Product>
                
            </div>
        </div>
    );
};

export default Products;