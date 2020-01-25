import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import Search from '../Common/Header/Search';

const DesignBanner = () => {
    return(
        <section className="seo_home_area">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../../img/seo/triangle_one.png')} alt=""/></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../../img/seo/triangle_two.png')} alt=""/></div>
                <div className="triangle b_nine"><img src={require('../../img/seo/triangle_three.png')} alt=""/></div>
            </div>
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2> Get Perfect Hotel in a min</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">
                                10000+ hotel are listed in all over asia, Just type what you are looking for
                                <br/> Doing Chat, Calling, Discuss, Bargaining and Book the Hotel. Easy, Simple & Useful... </p></Reveal>

                            <div className="home-banner-search">
                                <Search />
                            </div>

                        </div>
                    </div>
                    <div className="saas_home_img">
                        {/* <Reveal effect="fadeInUp" duration={1400}><img src={require('../../img/eboohotel/banner.jpg')} alt=""/></Reveal> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DesignBanner;
