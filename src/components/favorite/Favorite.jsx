import React from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";

const Favorite = ({favorite, removeBtn}) => {
    // console.log(favorite)
    return (
        <div className='mt-14'>
            <div className="relative w-[500px] h-[300px]">
                <img
                className="h-full w-full object-cover "
                src={favorite.image}
                alt=""
                />

                <button 
                    onClick={() => removeBtn(favorite.id)} 
                    className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 mr-5">
                    <RiDeleteBin2Line size={24} />
                </button>
            </div>

            <span>{favorite.title}</span>
        </div>
    );
};

export default Favorite;