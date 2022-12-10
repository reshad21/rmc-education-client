import React from 'react';
import Fade from 'react-reveal/Fade';
const Commitment = () => {
    return (
        <div>
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center align-middle lg:px-36 md:px-8 sm:px-1">
                <div className="hero-rght mt-20">
                    <Fade bottom>
                        <img src="https://improvedigitally.com/wp-content/uploads/2021/10/Grow-your-business-digitally.webp" alt="" />
                    </Fade>

                </div>
                <div className="">
                    <h1 className='text-center'>
                        <span className='text-orange-500 font-bold'>Our Business Commitment</span><br />
                        <span className='text-5xl font-bold'>Grow your</span> <br /> <span className='text-orange-500 text-5xl font-bold'>business</span> <span className='text-5xl font-bold'>digitally</span>
                    </h1>
                    <div className="grid gap-3 grid-cols-3 justify-center w-[67%] mx-auto mt-4">
                        <div className="">
                            <h2 className='text-3xl font-bold text-green-500'>10x</h2>
                            <p>Increase in Website Organic Traffic</p>
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold text-orange-500'>5x</h2>
                            <p>Increase in Website Organic Traffic</p>
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold text-blue-500'>45%</h2>
                            <p>Increase in Website Organic Traffic</p>
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold text-green-500'>33%</h2>
                            <p>Increase in Website Organic Traffic</p>
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold text-orange-500'>18x</h2>
                            <p>Increase in Website Organic Traffic</p>
                        </div>
                        <div className="">
                            <h2 className='text-3xl font-bold text-blue-500'>55%</h2>
                            <p>Increase in Website Organic Traffic</p>
                        </div>
                    </div>
                    {/* <button className='btn btn-ghost px-14'>Get Free  Consultation</button> */}
                </div>


            </div>
        </div>
    );
};

export default Commitment;