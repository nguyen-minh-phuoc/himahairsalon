import React from 'react';
import Footer from '../../Shared/Footer';
import AwesomeServices from './AwesomeServices';
import Banner from './Banner';
import QualityService from './QualityService';
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <AwesomeServices />
            <QualityService />
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;