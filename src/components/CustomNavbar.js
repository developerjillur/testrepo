import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Sticky from 'react-stickynode';
import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';
import Search from '../components/Common/Header/Search';
import { UserWishList, UserWishListIfNo, UserNofitication, UserMessage, UserLoginForm, NofiticationIfNo, UserMessageIfNo } from '../components/Common/Header/Notification';
import NavBar from '../components/Common/Header/HeaderNavbar';

class CustomNavbar extends Component {
    componentDidMount() {
        this.jQueryfun();
    }

    jQueryfun() {
        $(window).on("load", function () {
            //  Bootstrap Dropdown Toggle
            $('.dropdown-menu').on('click', function(e) {
                if($(this).hasClass('toggle-hover-box')) {
                    e.stopPropagation();
                }
            });

            // Bootstrap Tab
            $(".account-tab-btn").click(function(){
                $(this).tab('show');
                return false;
              });

        
        })
    }


    render() {
        var { mClass, cClass, slogo } = this.props;
        return (
        <div>
            <NavBar />    
            <header className="header_area" ref={node => {this.node = node; }}>
                <div className="header-top">
                    <div className={`container ${cClass}`}>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="header-top-nav">
                                    <li className="nav-item"> <a href=".#"> <i className="fas fa-hotel"></i> Add Your Hotel </a></li>
                                    <li className="nav-item"> <a href=".#"> <i className="fab fa-android"></i> Download App</a></li>
                                    <li className="nav-item"> <a href=".#"> <i className="far fa-newspaper"></i> News Feed</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="header-help-link text-right">
                                    <ul className="top-help-link">
                                        <li className="nav-item"> <a href=".#">  How it work <i className="fas fa-question-circle"></i> </a> </li>
                                        <li className="nav-item"> <a href=".#">  Help / Support <i className="fas fa-life-ring"></i> </a> </li>
                                    </ul>
                                </div>
                                <div className="top-social-icons text-right">
                                    <ul className="social-icon-list text-right">
                                        <li><a target="_blank" href=".#"> <i className="fab fa-facebook"></i> </a></li>
                                        <li><a target="_blank" href=".#"> <i className="fab fa-instagram"></i> </a></li>
                                        <li><a target="_blank" href=".#"> <i className="fab fa-youtube"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`primary-header ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <div className="primary-header-item d-flex align-content-center">
                            <div className="primary-header-logo flex-fill d-flex align-items-center">
                                <Link className={`navbar-brand eboologo ${slogo}`} to="/">
                                    <img src={require("../img/myimg/eboohotel.png")} alt="logo" />
                                </Link>
                                <div className="left-navbar-icon">
                                    <div className="header-navbar-icon" data-toggle="modal" data-target="#ebooNavbar">
                                        <i className="fa fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="primary-header-search flex-fill">
                                <Search />
                            </div>
                            <div className="header-right-panels flex-fill d-flex align-items-center text-right">
                                <div className="header-right-item dropdown header-wish-list flex-fill">
                                    <div className="nofication-toggle-btn" data-toggle="dropdown"><i className="fas fa-heart"></i> <span>2</span></div>
                                    <UserWishList />
                                </div>
                                <div className="header-right-item dropdown header-notification flex-fill">
                                    <div className="nofication-toggle-btn" data-toggle="dropdown"><i className="fas fa-bell"></i> <span>3</span></div>
                                    <UserNofitication />
                                </div>
                                <div className="header-right-item dropdown header-messenger flex-fill">
                                    <div className="nofication-toggle-btn" data-toggle="dropdown"><i className="fas fa-comment-alt"></i> <span>5</span></div>
                                    <UserMessage />
                                </div>
                                <div className="header-right-item dropdown header-account flex-fill">
                                    <div className="nofication-toggle-btn" data-toggle="dropdown"><i className="fas fa-user"></i></div>
                                    <UserLoginForm />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        );
    }
}

export default CustomNavbar;