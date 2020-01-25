import React, { Component } from 'react';
import RoomThumbs from './RoomThumb';
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import ExpandCollapse from 'react-expand-collapse';

const ReactHint = ReactHintFactory(React)

export const RoomList = () => (
    
    <div className="search-listing-item innter-room-item d-flex">
        <div className="list-item-thum flex-fill">
            {/* <span className="item-ribbon featured-item-ribbon">Featured</span> */}
            <span className="item-ribbon featured-ribbon-three">Best Match </span> 
            <span className="item-ribbon featured-ribbon-two">Best</span>
            <RoomThumbs />
        </div>
        <div className="list-item-detail flex-fill d-flex flex-wrap">
            <div className="list-details-content d-flex h-100">
                <div className="list-detail-content-left d-flex flex-wrap flex-fill w-100">
                    <div className="list-details-top align-self-start w-100">
                        <h3 className="list-hotel-room"><a href="#rooms"> <img src={require('../../../img/eboohotel/hotel-room.svg')} alt=""/> King Room with window view</a></h3>
                        <ExpandCollapse previewHeight="55px" expandText="Show more" collapseText="Less" ellipsisText="...">
                        <p>Located in Dhaka, a 7-minute walk from Independent University Bangladesh, Gleneagles Grey Mansion - Prihan's Serviced Apartment provides accommodations with a shared lounge, free private parking, a garden and a terrace. Among the facilities at this property are room service and luggage storage space, along with free WiFi throughout the property. The property has a 24-hour front desk, a shared kitchen and currency exchange for guests. </p>

                        <p>A continental breakfast is available daily at the hotel. </p>

                        <p>The area is popular for cycling, and bike rental and car rental are available at Gleneagles Grey Mansion - Prihan's. </p>

                        <p>North South University is a 10-minute walk from the accommodation, while Bashundhara Group is 1.8 km away. </p>                        
                        </ExpandCollapse>

                        <ul className="room-feture-lists innter-room-feture">
                        <ExpandCollapse previewHeight="108px" expandText="Show All" collapseText="Less" ellipsisText="...">
                            <li>Size: 35 m²</li>
                            <li>1 King bed</li>
                            <li>Attach bath</li>
                            <li>LED TV</li>
                            <li>Free Wifi</li>
                            <li>Kitchen</li>
                            <li>Size: 35 m²</li>
                            <li>1 King bed</li>
                            <li>Attach bath</li>
                            <li>LED TV</li>
                            <li>Free Wifi</li>
                            <li>Kitchen</li>
                            <li>Size: 35 m²</li>
                            <li>1 King bed</li>
                            <li>Attach bath</li>
                            <li>LED TV</li>
                            <li>Free Wifi</li>
                            <li>Kitchen</li>
                            <li>Size: 35 m²</li>
                            <li>1 King bed</li>
                            <li>Attach bath</li>
                            <li>LED TV</li>
                            <li>Free Wifi</li>
                            <li>Kitchen</li>
                        </ExpandCollapse>
                        </ul>
                    </div>
                    <div className="list-details-bottom align-self-end w-100">
                        <ul className="ntWishlist-actions d-flex">
                            <div className="tooltip-container"><ReactHint autoPosition events delay/></div>
                            <li className="flex-fill"><a href=".#" data-rh="Chat with hotel receptionist for booking & details" data-rh-at="bottom"><i className="fas fa-comments"></i> Live Chat for Booking</a></li>
                            <li className="flex-fill"><a href=".#" data-rh="Direct call to hotel for booking" data-rh-at="bottom"><i className="fas fa-phone-square-alt"></i> Call for Booking</a></li>
                        </ul>
                    </div>
                </div>
                <div className="list-detail-content-right flex-fill d-flex flex-wrap h-100">
                    <div className="hotel-price-and-listing w-100">
                        <h4 class="hotel-listing-price"> <del className="hotel-listing-offer-price"> TK. 25000 </del> TK. 20000 <span>Per Night</span></h4>
                    </div>
                    <div className="hotel-extra-price-fetures align-self-end">
                        <ul>
                            <li>Breakfast included</li>
                            <li>Free cancellation</li>
                            <li>No Payment Needed</li>
                        </ul>
                    </div>
                    {/* <div className="hotel-make-deal-btn w-100 align-self-end text-center"> <a href=".#" className="gradient-button"> <i class="fas fa-hands-helping"></i> Make a deal</a> </div> */}
                </div>
            </div>
        </div>
    </div>

)

