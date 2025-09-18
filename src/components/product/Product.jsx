import React from 'react';

const Product = ({products}) => {
    // console.log(products)
    return (
        <div className='w-[70%]'>
            <table className="table-auto border-collapse border border-gray-400 w-full">
            {/* Table Header (only once) */}
            <thead>
                <tr className="bg-gray-500">
                <th className="border border-gray-400 px-4 py-2">Items</th>
                <th className="border border-gray-400 px-4 py-2">Current Bid</th>
                <th className="border border-gray-400 px-4 py-2">Time Left</th>
                <th className="border border-gray-400 px-4 py-2">Bid Now</th>
                </tr>
            </thead>

            {/* Table Body (dynamic rows) */}
            <tbody>
                {products.map((product) => (
                <tr key={product.id} className='text-center'>
                    {/* Image + Title in one column */}
                    <td className="border border-gray-400 px-4 py-2 flex items-center gap-3 text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-12 h-12 object-cover rounded"
                    />
                    <h1 className="font-medium">{product.title}</h1>
                    </td>

                    {/* Current Bid */}
                    <td className="border border-gray-400 px-4 py-2">
                    {product.currentBidPrice}
                    </td>

                    {/* Time Left */}
                    <td className="border border-gray-400 px-4 py-2">
                    {product.timeLeft}
                    </td>

                    {/* Bid Now (you can add a button or icon here) */}
                    <td className="border border-gray-400 px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Bid Now
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default Product;