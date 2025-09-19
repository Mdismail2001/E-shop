import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ products }) => {
    console.log(products)
    return (
        <div className=" w-[70%] mt-10">
            <ResponsiveContainer width="" height={300}>
                <LineChart data={products}>
                    <XAxis dataKey="title" />   {/* or product.title if nested */}
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="currentBidPrice" stroke="green" />
                    {/* <Line type="monotone" dataKey="" stroke="blue" />
                    <Line type="monotone" dataKey="" stroke="green" /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
