import React from 'react';
import RatingStats from './../../Rating/RatingStats';

export const UserWishList = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTcard-wish-list">
            <div className="card-header">
                Wish List
            </div>
            <div className="card-body">

                <div className="ntWishlist-wrapper">

                    <div className="ntWishlist-item">
                        <div className="ntWishlist-content d-flex">
                            <div className="ntWishlist-image">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image1.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="ntWishlist-text flex-grow-1">
                                <h2><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                <div className="ntWishlist-price-reviews">
                                    <h4 className="ntWishlist-hotel-price">TK. 20000 <span>Per Night</span></h4>
                                    <div className="ntWishlist-review">
                                        <RatingStats ratingAverage={3.8} raterCount={67} />
                                    </div>
                                </div>
                                <p className="ntWishlist-description">3 beds, 3 baths, 2,450 sqft</p>
                            </div>
                        </div>
                        <div className="ntWishlist-footer">
                            <ul className="ntWishlist-actions d-flex">
                                {/* <li className="flex-fill"><a href=".#"><i className="fas fa-external-link-square-alt"></i></a></li> */}
                                <li className="flex-fill"><a href=".#"><i className="fab fa-facebook-messenger"></i> Chat</a></li>
                                <li className="flex-fill"><a href=".#"><i className="fas fa-phone-square-alt"></i> Call</a></li>
                                <li className="flex-fill ntWishlist-close"><a href=".#"><i className="fas fa-times"></i> Close</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="ntWishlist-item">
                        <div className="ntWishlist-content d-flex">
                            <div className="ntWishlist-image">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image2.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="ntWishlist-text flex-grow-1">
                                <h2><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                <div className="ntWishlist-price-reviews">
                                    <h4 className="ntWishlist-hotel-price">TK. 20000 <span>Per Night</span></h4>
                                    <div className="ntWishlist-review">
                                        <RatingStats ratingAverage={3.8} raterCount={67} />
                                    </div>
                                </div>
                                <p className="ntWishlist-description">3 beds, 3 baths, 2,450 sqft</p>
                            </div>
                        </div>
                        <div className="ntWishlist-footer">
                            <ul className="ntWishlist-actions d-flex">
                                {/* <li className="flex-fill"><a href=".#"><i className="fas fa-external-link-square-alt"></i></a></li> */}
                                <li className="flex-fill"><a href=".#"><i className="fab fa-facebook-messenger"></i> Chat</a></li>
                                <li className="flex-fill"><a href=".#"><i className="fas fa-phone-square-alt"></i> Call</a></li>
                                <li className="flex-fill ntWishlist-close"><a href=".#"><i className="fas fa-times"></i> Close</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="ntWishlist-item">
                        <div className="ntWishlist-content d-flex">
                            <div className="ntWishlist-image">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image3.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="ntWishlist-text flex-grow-1">
                                <h2><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                <div className="ntWishlist-price-reviews">
                                    <h4 className="ntWishlist-hotel-price">TK. 20000 <span>Per Night</span></h4>
                                    <div className="ntWishlist-review">
                                        <RatingStats ratingAverage={3.8} raterCount={67} />
                                    </div>
                                </div>
                                <p className="ntWishlist-description">3 beds, 3 baths, 2,450 sqft</p>
                            </div>
                        </div>
                        <div className="ntWishlist-footer">
                            <ul className="ntWishlist-actions d-flex">
                                {/* <li className="flex-fill"><a href=".#"><i className="fas fa-external-link-square-alt"></i></a></li> */}
                                <li className="flex-fill"><a href=".#"><i className="fab fa-facebook-messenger"></i> Chat</a></li>
                                <li className="flex-fill"><a href=".#"><i className="fas fa-phone-square-alt"></i> Call</a></li>
                                <li className="flex-fill ntWishlist-close"><a href=".#"><i className="fas fa-times"></i> Close</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <div className="card-footer text-right">
                <a href=".#" className="btn btn-light">View All</a>
            </div>
        </div>
    </div>
)

export const UserWishListIfNo = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTcard-ifno-wish-list">
            <div className="card-header">
                Wish List
            </div>
            <div className="card-body d-flex flex-wrap align-items-center">

                <div className="ifno-ntWishlist-wrapper text-center">
                    <img src={require('../../../img/eboohotel/001-wishlist.png')} alt=""/>
                    <h3>There are no wishlist yet</h3>
                </div>

            </div>
            <div className="card-footer text-right">
                <a href=".#" className="btn btn-light">View All</a>
            </div>
        </div>
    </div>
)

export const UserNofitication = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTcard-notification">
            <div className="card-header">
                Notification
            </div>
            <div className="card-body">
                <div className="notification-wrapper">

                    <div className="notification-item d-flex">
                        <div className="notification-content d-flex">
                            <div className="notification-image align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image3.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="notification-text align-items-center flex-grow-1">
                                <p>Thank you for placing your order to Dhamaka 2020 Cashback 100%. Our customer manager will contact you soon.</p>
                                <span className="notification-time">1 Day ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="notification-item d-flex">
                        <div className="notification-content d-flex">
                            <div className="notification-image align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image3.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="notification-text align-items-center flex-grow-1">
                                <p>Thank you for placing your order to <a href=".#">Dhamaka 2020 Cashback offer</a> . Our customer manager will contact you soon.</p>
                                <span className="notification-time">1 Min ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="notification-item d-flex">
                        <div className="notification-content d-flex">
                            <div className="notification-image align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image3.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="notification-text align-items-center flex-grow-1">
                                <p>Thank you for placing your order to Dhamaka 2020 Cashback 100%. Our customer manager will contact you soon.</p>
                                <span className="notification-time">20 Min ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="notification-item d-flex">
                        <div className="notification-content d-flex">
                            <div className="notification-image align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image3.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="notification-text align-items-center flex-grow-1">
                                <p>Thank you for placing your order to Evaly Dhamaka 2020 Cashback 100%. Our customer manager will contact you soon.</p>
                                <span className="notification-time">20 Min ago</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)

export const NofiticationIfNo = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTNofiticationIfNo">
            <div className="card-header">
                Notification
            </div>
            <div className="card-body d-flex flex-wrap align-items-center">

                <div className="ifno-ntWishlist-wrapper text-center">
                    <img src={require('../../../img/eboohotel/002-bell.png')} alt=""/>
                    <h3>There are no Notification yet</h3>
                </div>

            </div>
            <div className="card-footer text-right">
                <a href=".#" className="btn btn-light">View All</a>
            </div>
        </div>
    </div>
)

export const UserMessage = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTcard-message">
            <div className="card-header">
                Message
            </div>
            <div className="card-body">
                <div className="header-message-wrapper">

                    <div className="header-message-item d-flex">
                        <div className="header-message-content d-flex">
                            <div className="header-message-image ifcustomersend align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image1.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="header-message-text align-items-center flex-grow-1">
                                <div className="header-message-text flex-grow-1">
                                    <h2 className="header-message-hotel-name"><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                    <h4 className="header-message-hotel-location">Cox's Bazar, BD <span className="header-message-time">1 Min ago</span></h4>
                                    <p className="header-recent-message">3 beds, 3 baths, 2,450 sqft 3 beds, 3 baths, 2,450 sqft</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-message-item d-flex">
                        <div className="header-message-content d-flex">
                            <div className="header-message-image ifhotelownarsend align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image2.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="header-message-text align-items-center flex-grow-1">
                                <div className="header-message-text flex-grow-1">
                                    <h2 className="header-message-hotel-name"><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                    <h4 className="header-message-hotel-location">Cox's Bazar, BD <span className="header-message-time">1 Min ago</span></h4>
                                    <p className="header-recent-message">3 beds, 3 baths, 2,450 sqft 3 beds, 3 baths, 2,450 sqft</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-message-item d-flex">
                        <div className="header-message-content d-flex">
                            <div className="header-message-image ifhotelownarsend align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image3.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="header-message-text align-items-center flex-grow-1">
                                <div className="header-message-text flex-grow-1">
                                    <h2 className="header-message-hotel-name"><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                    <h4 className="header-message-hotel-location">Cox's Bazar, BD <span className="header-message-time">1 Min ago</span></h4>
                                    <p className="header-recent-message">3 beds, 3 baths, 2,450 sqft 3 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-message-item d-flex">
                        <div className="header-message-content d-flex">
                            <div className="header-message-image ifcustomersend align-items-center">
                                <a href=".#">
                                    <img className="float-left" src={require('../../../img/eboohotel/hotel/image4.jpg')} alt=""/>
                                </a>
                            </div>
                            <div className="header-message-text align-items-center flex-grow-1">
                                <div className="header-message-text flex-grow-1">
                                    <h2 className="header-message-hotel-name"><a href=".#">Royal Tulip Sea Pearl Beach Resort & Spa Cox's Bazar</a></h2>
                                    <h4 className="header-message-hotel-location">Cox's Bazar, BD <span className="header-message-time">1 Min ago</span></h4>
                                    <p className="header-recent-message">3 beds, 3 baths, 2,450 sqft 3 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="card-footer text-right">
                <a href=".#" className="btn btn-light">View All</a>
            </div>
        </div>
    </div>
)

export const UserMessageIfNo = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTNofiticationIfNo">
            <div className="card-header">
                Notification
            </div>
            <div className="card-body d-flex flex-wrap align-items-center">

                <div className="ifno-UserMessageIfNo-wrapper  text-center">
                    <img src={require('../../../img/eboohotel/undraw_newsletter_vovu.svg')} alt=""/>
                    <h3>There are no Message yet</h3>
                </div>

            </div>
            <div className="card-footer text-right">
                <a href=".#" className="btn btn-light">View All</a>
            </div>
        </div>
    </div>
)

export const UserAccountAfterLogin = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTcard-account-login">
            <div className="card-header">
                Account
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href=".#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
)

export const UserLoginForm = () => (
    <div className="toggle-hover-box text-left dropdown-menu">
        <div className="card nTcard-login-form">
            <div className="card-header">
                {/* nav-tabs */}
                <ul className="nav nav-pills nav-fill card-header-tabs"> 
                    <li className="nav-item">
                        <a className="nav-link account-tab-btn active" data-toggle="tab" href="#login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link account-tab-btn" data-toggle="tab" href="#register">Register</a>
                    </li>
                </ul>

            </div>
            <div className="card-body">

                <div className="tab-content">
                  <div className="tab-pane active" id="login">
                    <div className="user-login-form">
                        <form action="#" method="post">
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text" className="form-control" name="username" placeholder="Phone / E-mail" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary user-login-btn btn-block">Sign in</button>
                            </div>
                            <div className="clearfix forgot-password-section">
                                <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                                <a href=".#" className="login-forgot-password float-right">Forgot Password?</a>
                            </div>
                            <div className="or-seperator"><span>or</span></div>
                            {/* <p className="text-center">Login with your social media account</p>  */}
                            <div className="text-center social-login-btn">
                                <a href=".#" className="btn btn-danger"><i className="fab fa-google"></i> Google</a>
                                <a href=".#" className="btn btn-primary"><i className="fab fa-facebook-f"></i> Facebook</a>
                            </div>
                        </form>
                        <p className="text-center text-muted small">Hotel Owner ? <a data-toggle=""  href=".#">Login Here</a></p>
                    </div>
                 </div>
                 <div className="tab-pane" id="register">
                    <div className="user-login-form registration-form-also">
                        <form action="#" method="post">
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text" className="form-control" name="fullname" placeholder="Name" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-mobile-alt"></i></span>
                                <input type="text" className="form-control" name="fullname" placeholder="Phone" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                <input type="text" className="form-control" name="fullname" placeholder="Email" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary user-login-btn btn-block">Register</button>
                            </div>
                            <div className="or-seperator"><span>or</span></div>
                            {/* <p className="text-center">Login with your social media account</p>  */}
                            <div className="text-center social-login-btn">
                                <a href=".#" className="btn btn-danger"><i className="fab fa-google"></i> Google</a>
                                <a href=".#" className="btn btn-primary"><i className="fab fa-facebook-f"></i> Facebook</a>
                            </div>
                        </form>
                        <p className="text-center text-muted small">Want to add your hotel? <a href=".#"> Sign up here!</a></p>
                    </div>
                 </div>
                </div>

            </div>
        </div>
    </div>
)


// class Search extends Component {

//     render() {

//         return (
//             <div>
//                 <div className="toggle-hover-box text-left">
//                     <div className="card card-wish-list">
//                         <div className="card-header">
//                             Featured
//                         </div>
//                         <div className="card-body">
//                             <h5 className="card-title">Special title treatment</h5>
//                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                             <a href=".#" className="btn btn-primary">Go somewhere</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

// }

// export default Search;


