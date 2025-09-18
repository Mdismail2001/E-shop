import React from 'react';

const Favorite = ({favorite}) => {
    // console.log(favorite)
    return (
        <div>
            <h1 className='mb-14' >Favorite Items: {0} </h1>
            <img className='h-[300px] w-[500px]' src={favorite.image} alt="" />
            <span>{favorite.title}</span>
            
        </div>
    );
};

export default Favorite;