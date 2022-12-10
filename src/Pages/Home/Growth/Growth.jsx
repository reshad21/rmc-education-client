import React from 'react';
import Fade from 'react-reveal/Fade';

const Growth = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center lg:px-36 md:px-8 sm:px-1">
                <h1 className='text-left'>
                    <span className='text-orange-500 font-bold'>Organic Search Growth</span><br />
                    <span className='text-5xl font-bold'>Enhance your</span> <br />
                    <span className='text-orange-500 font-bold text-5xl'>Organic Search</span> <br /> <span className='text-5xl font-bold'>Visibility!</span>
                </h1>
                <div className="hero-rght mt-20">
                    <Fade bottom>
                        <img src="https://improvedigitally.com/wp-content/uploads/2021/10/Enhance-your-Organic-Search.webp" alt="" />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Growth;