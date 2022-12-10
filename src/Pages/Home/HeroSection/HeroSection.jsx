import React from 'react';
import Jump from 'react-reveal/Jump';
const HeroSection = () => {
    return (
        <div>
            {/* <Fade bottom>
                <h1>React Reveal</h1>
            </Fade> */}
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center">
                <h1 className='text-center'>
                    <span className='text-orange-500 font-bold'>Grow Digitally</span><br />
                    <span className='text-5xl font-bold'>Boosts your</span> <br /> <span className='text-orange-500 text-5xl font-bold'>website traffic!</span>
                </h1>
                <div className="hero-rght mt-20">
                    <Jump bottom>
                        {/* <h1>React Reveal</h1> */}
                        <img src="https://improvedigitally.com/wp-content/uploads/2021/10/laptop-home-2.webp" alt="" />
                    </Jump>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;