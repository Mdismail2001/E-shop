import React, { useEffect, useState } from 'react';
import { GiSelfLove } from "react-icons/gi";

import Product from '../product/Product';
import Favorite from '../favorite/Favorite';
import Chart from '../chart/Chart';
const Products = () => {
    const [products, setProducts]= useState([]); // this is for api
    const [favorite, setFavorite]= useState([]); // this is for bid btn to show favorite items


// data fetch function
useEffect(()=>{                         
    fetch("/public/products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
// console.log(products)

// bid button function
const handleBidBtn =(product)=>{         
// console.log( product)
    setFavorite([...favorite , product])
    alert("add to favorite")
    // console.log(favorite)
}

// favorite remove function
const removeBtn =(id)=>{
    // console.log("remove button added", id);
const remainingFavorite = favorite.filter(favorite =>favorite.id !==id );
    setFavorite(remainingFavorite);
    alert("Remove successful");

};                                   

    return (
        <div className='w-11/12 mx-auto mt-10 mb-10 '> 
            <div className="flex gap-5">
                {/* product table */}
                 <Product products={products}
                        handleBidBtn = {handleBidBtn} 
                ></Product>

                 {/* favorite items section */}
                <div className='text-3xl w-[30%] text-center  '>
                    <h1>Favorite Items:</h1>
                        {
                            favorite.map(favorite => <Favorite favorite={favorite}
                                                         key={favorite.id}
                                                         removeBtn = {removeBtn} 
                                                         ></Favorite>)                            
                        }
                 </div>   
            </div>         
                 <Chart products={products} key={products.id}></Chart>
        </div>
    );
};

export default Products;