import React from 'react';
import BostingSection from '../BostingSection/BostingSection';
import CaseStudies from '../CaseStudies/CaseStudies';
import Commitment from '../Commitment/Commitment';
import Growth from '../Growth/Growth';
import HeroSection from '../HeroSection/HeroSection';
import LatestMedia from '../LatestMedia/LatestMedia';
import OurPartner from '../OurPartner/OurPartner';
import ServiceSection from '../ServiceSection/ServiceSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Commitment></Commitment>
            <Growth></Growth>
            <ServiceSection></ServiceSection>
            <CaseStudies></CaseStudies>
            <BostingSection></BostingSection>
            <LatestMedia></LatestMedia>
            <Testimonial></Testimonial>
            <OurPartner></OurPartner>
        </>
    );
};

export default Home;