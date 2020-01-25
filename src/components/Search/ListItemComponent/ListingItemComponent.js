import React, { Component } from 'react';
import ListItemThums from './ListItemThumb';
import ListingPopupContent from './ListingPopupModule';
import RatingStats from './../../Rating/RatingStats';
import ReactTooltip from 'react-tooltip'
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'

const ReactHint = ReactHintFactory(React)

export const ListingItems = () => (
    
    <div className="search-listing-item d-flex">
        <ListingPopupContent />
        <div className="list-item-thum flex-fill">
        <a href="#photos" data-toggle="modal" data-target="#detailsModal" >

            {/* <span className="item-ribbon featured-item-ribbon">Featured</span> */}
            <span className="item-ribbon featured-ribbon-three">Best Match </span> 
            <span className="item-ribbon featured-ribbon-two">Best</span>

            <ListItemThums />
        </a>
        </div>
        <div className="list-item-detail flex-fill d-flex flex-wrap" data-toggle="modal" data-target="#detailsModal">
            <div className="list-details-content d-flex h-100">
                <div className="list-detail-content-left d-flex flex-wrap flex-fill w-100">
                    <div className="list-details-top align-self-start w-100">
                        <h2 className="list-hotel-name"><a href="#overview" data-toggle="modal" data-target="#detailsModal">Royal Tulip Sea Pearl Beach Resort Cox's Bazar</a> <span>5 <i className="fas fa-star"></i> Hotel</span> </h2>
                        <a className="list-hotel-location" href="#location" data-toggle="modal" data-target="#detailsModal"><i className="fas fa-map-marker-alt"></i> Uttara Dhaka, Myrtle Beach, right by the beach. <span>  <i class="fas fa-location-arrow"></i> View on map</span> </a>
                        <h3 className="list-hotel-room"><a href="#rooms" data-toggle="modal" data-target="#detailsModal"> <img src={require('../../../img/eboohotel/hotel-room.svg')} alt=""/> King Room with window view</a></h3>
                        <ul className="room-feture-lists">
                            <li><a href="#rooms" data-toggle="modal" data-target="#detailsModal">Size: 35 m²</a></li>
                            <li><a href="#rooms" data-toggle="modal" data-target="#detailsModal">1 King bed</a></li>
                            <li><a href="#rooms" data-toggle="modal" data-target="#detailsModal">Attach bath</a></li>
                            <li><a href="#rooms" data-toggle="modal" data-target="#detailsModal">LED TV</a></li>
                            <li><a href="#rooms" data-toggle="modal" data-target="#detailsModal">Free Wifi</a></li>
                            <li><a href="#rooms" data-toggle="modal" data-target="#detailsModal">Kitchen</a></li>
                            <li><a className="room-feture-button" href="#rooms" data-toggle="modal" data-target="#detailsModal">View all details</a></li>
                        </ul>
                    </div>
                    <div className="list-details-bottom align-self-end w-100">
                        <ul className="ntWishlist-actions d-flex">
                            <div className="tooltip-container"><ReactHint autoPosition events delay/></div>
                            <li className="flex-fill"><a href=".#" data-rh="Chat with hotel receptionist for booking & details" data-rh-at="bottom"><i className="fas fa-comments"></i> Live Chat for Booking</a></li>
                            <li className="flex-fill"><a href=".#" data-rh="Direct call to hotel for booking" data-rh-at="bottom"><i className="fas fa-phone-square-alt"></i> Call for Booking</a></li>
                            <li className="flex-fill hide-in-mids"><a href=".#" data-rh="Save on your Wishlist" data-rh-at="bottom"><i className="fas fa-heart"></i> Add to Wishlist</a></li>
                        </ul>
                    </div>
                </div>
                <div className="list-detail-content-right flex-fill d-flex flex-wrap h-100">
                    <div className="hotel-price-and-listing w-100">
                        <h4 class="hotel-listing-price"> <del className="hotel-listing-offer-price"> TK. 25000 </del> TK. 20000 <span>Per Night</span></h4>
                    </div>
                    <div className="hotel-listing-review w-100">
                        <a href="#reviews" data-toggle="modal" data-target="#detailsModal" data-tip="View Reviews">
                            <RatingStats ratingAverage={3.8} raterCount={67} />
                        </a>
                        <div className="review-tooltip"><ReactTooltip place="bottom" type="info" effect="float"/></div>
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

