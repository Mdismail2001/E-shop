import React, { useEffect, useState } from 'react';
import { GiSelfLove } from "react-icons/gi";

import Product from '../product/Product';
import Favorite from '../favorite/Favorite';
const Products = () => {
   const [products, setProducts]= useState([]); // this is for api
   const [favorite, setFavorite]= useState([]); // this is for bid btn to show favorite items


useEffect(()=>{                         // data fetch
    fetch("/public/products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
// console.log(products)


const handleBidBtn =(product)=>{         // bid button function
// console.log( product)
    setFavorite([...favorite , product])
    // console.log(favorite)
}


    return (
        <div className='w-11/12 mx-auto mt-10  '> 
            <div className="flex gap-5">
                {/* product table */}
                 <Product products={products}
                        handleBidBtn = {handleBidBtn} 
                ></Product>

                 {/* favorite items section */}
                <div className='text-3xl w-[30%] text-center  '>
                        {
                            favorite.map(favorite => <Favorite favorite={favorite}
                                                         key={favorite.id} >
                                                    </Favorite>)                            
                        }
                 </div>   
            </div>
        </div>
    );
};

export default Products;