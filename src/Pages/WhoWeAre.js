import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
// import Sservice from '../components/Service/Sservice/Sservice';
// import AgencyAbout from '../components/About/AgencyAbout';
// import Partner from '../components/Partner';
// import FooterTwo from '../components/Footer/FooterTwo';
// import ServiceData from '../components/Service/ServiceData';
import WhoWeAre from '../components/WhoWe/WhoWeAre';
// import FooterData from '../components/Footer/FooterData';

const WhoWe = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <WhoWeAre />
        </div>
    )
}
export default WhoWe;