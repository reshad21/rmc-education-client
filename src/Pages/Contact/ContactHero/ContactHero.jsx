import React from 'react';

const ContactHero = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div className="w-full lg:w-[1440px] px-7 py-10">
                        <h1 className="mb-5 text-5xl font-bold">Contact</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;