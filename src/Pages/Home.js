import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import DesignBanner from '../components/Banner/DesignBanner';
import Features from '../components/Features/Features';
import Service from '../components/Service/Service';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
//import WhoWeAre from '../components/WhoWe/WhoWeAre';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
        <DesignBanner/>
        <Features/>
        <Service/>
        <Subscribe FooterData={FooterData}/>
        <Footer FooterData={FooterData}/>
    </div>
)