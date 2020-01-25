import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// export const Search = () => (
//     <div>
//         <form action="#" className="header-search-field" method="post">
//             <input type="text" name="header-search" className="form-control search-fild" placeholder="Search Hotels in a sec" />
//             <button className="header-search-submit-icon" type="submit"><i className="fas fa-search"></i></button>
//         </form>
//     </div>
// )

class NavBar extends Component {

    render(){

        return(
            <div>
                <div className="modal left fade" id="ebooNavbar" tabIndex="-1" role="dialog" aria-labelledby="ebooNavbarLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">

                            <div className="modal-header">
                                
                                <a href="#" className="close navbar-close-btn" data-dismiss="modal" aria-label="Close"></a>

                                <Link className="navbar-brand eboologo" to="/">
                                    <img src={require("../../../img/myimg/eboohotel.png")} alt="logo" />
                                </Link>
                            </div>

                            <div className="modal-body">
                                <nav className="left-toggle-navbar">                            
                                    <ul className="list-unstyled components navbar-menu-items">
                                        {/* <p>Dummy Heading</p> */}
                                        <li className="active">
                                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Home</a>
                                            <ul className="list-unstyled collapse" id="homeSubmenu" >
                                                <li>
                                                    <a href=".#">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href=".#">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href=".#">Home 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href=".#">About</a>
                                        </li>
                                        <li>
                                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Pages</a>
                                            <ul className="list-unstyled collapse" id="pageSubmenu">
                                                <li>
                                                    <a href=".#">Page 1</a>
                                                </li>
                                                <li>
                                                    <a href=".#">Page 2</a>
                                                </li>
                                                <li>
                                                    <a href=".#">Page 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href=".#">Portfolio</a>
                                        </li>
                                        <li>
                                            <a href=".#">Contact</a>
                                        </li>
                                    </ul>
                                    
                                    <div className="left-navbar-number">
                                        <ul>
                                            <li>
                                                <span><i className="fas fa-phone-square-alt"></i></span>
                                                <a href="tel:+8801750673648" className="navbarcall"> +8801750673748</a>
                                            </li>
                                            <li>
                                                <span><i className="fas fa-envelope-open-text"></i></span>
                                                <a href="mailto:info@eboohotel.com" className="navbaremail"> info@eboohotel.com</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul className="list-unstyled navbar-download-btn">
                                        <li><a href=".#" className="googleAndroid"><i className="fab fa-google-play"></i> Google Play</a></li>
                                        <li><a href=".#" className="AppleStore"><i className="fab fa-app-store-ios"></i> Apple Store </a></li>
                                    </ul>
                                </nav>

                                <div class="navbar-footer">
                                    <ul className="list-unstyled navbar-help-links">
                                        <li><a href=".#">Privacy Policy</a></li>
                                        <li><a href=".#">Booking Policy</a></li>
                                        <li><a href=".#">Cookie Policy</a></li>
                                        <li><a href=".#">Terms & Condition</a></li>
                                    </ul>
                                    <p>
                                        © ebooHotel.com 2020.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default NavBar;