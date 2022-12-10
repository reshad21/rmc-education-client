import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetail = () => {
    const detail = useLoaderData();
    console.log(detail);
    return (
        <div className='flex justify-center items-center my-14'>
            <div className="card w-3/4 bg-base-100 shadow-xl">
                <figure><img src={detail?.photo} alt="Shoes" className='w-full h-[500px] object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{detail?.title}</h2>
                    <p>{detail?.content}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;