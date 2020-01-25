import React from "react";
import $ from 'jquery/';
import './ListingPopupModule.css';
import ModuleThumb from './ModuleThumb';
// import NewGallerys from './ImageGridGallery';
import RatingStats from './../../Rating/RatingStats';
import ExpandCollapse from 'react-expand-collapse';

import {RoomList} from './RoomsComponent';

import ReactTooltip from 'react-tooltip'

class ListingPopupContent extends React.Component {

    componentDidMount() {
        this.jQueryTabfun();
    }

    jQueryTabfun() {
        $(window).on("load", function () {

            // Bootstrap Tab
            $(function() {
                $("#detailsModal").on('shown.bs.modal', function(e) {
                    var tab = e.relatedTarget.hash;
                    $('.listing-module-nav a[href="'+tab+'"]').tab('show');
                });
            });
        
        })
    }

  render() {
    return (

        <div className="modal fade listing-popup-module" id="detailsModal" tabindex="-1" role="dialog" aria-labelledby="detailsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-header-menu d-flex">
                        <div className="modal-menu-left flex-fill text-left">
                            <ul className="listing-module-nav nav">
                                <li className="nav-item"><a className="active" href="#overview" data-toggle="tab">Overview</a></li>
                                <li className="nav-item"><a href="#rooms" data-toggle="tab">Rooms</a></li>
                                <li className="nav-item"><a href="#photos" data-toggle="tab">Photos</a></li>
                                <li className="nav-item"><a href="#location" data-toggle="tab">Location</a></li>
                                <li className="nav-item"><a href="#reviews" data-toggle="tab">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="modal-menu-right flex-fill text-right">
                            <ul className="listing-module-nav">
                                <li className="nav-item"><a target="_blank" href=".#"> Full View  <i class="fas fa-arrow-right"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <h5 className="modal-title" id="detailsModalLabel">Modal title</h5> */}



                    <a href="#" className="close navbar-close-btn" data-dismiss="modal" aria-label="Close"></a>

                </div>
                <div className="modal-body">

                    <div className="tab-content">
                        <div id="overview" className="tab-pane in active">
                            <div className="modal-overview">

                                <div className="overview-image-description d-flex">
                                    <div className="flex-fill overview-left-image"> <ModuleThumb /> </div>
                                    <div className="flex-fill overview-left-description">
                                        <h2 className="list-hotel-name"><a href="#overview" data-toggle="tab">Royal Tulip Sea Pearl Beach Resort Cox's Bazar</a> <span>5 <i className="fas fa-star"></i> Hotel</span> </h2>
                                        <a className="list-hotel-location mb-2" href="#location" data-toggle="tab"><i className="fas fa-map-marker-alt"></i> Uttara Dhaka, Myrtle Beach, right by the beach. <span>  <i class="fas fa-location-arrow"></i></span> View on map </a>

                                        <ExpandCollapse previewHeight="400px" expandText="Show more" collapseText="Less
                                        " ellipsisText="...">
                                            <p>Located in Dhaka, a 7-minute walk from Independent University Bangladesh, Gleneagles Grey Mansion - Prihan's Serviced Apartment provides accommodations with a shared lounge, free private parking, a garden and a terrace. Among the facilities at this property are room service and luggage storage space, along with free WiFi throughout the property. The property has a 24-hour front desk, a shared kitchen and currency exchange for guests. </p>

                                            <p>Located in Dhaka, a 7-minute walk from Independent University Bangladesh, Gleneagles Grey Mansion - Prihan's Serviced Apartment provides accommodations with a shared lounge, free private parking, a garden and a terrace. Among the facilities at this property are room service and luggage storage space, along with free WiFi throughout the property. The property has a 24-hour front desk, a shared kitchen and currency exchange for guests. </p>

                                            <p>Located in Dhaka, a 7-minute walk from Independent University Bangladesh, Gleneagles Grey Mansion - Prihan's Serviced Apartment provides accommodations with a shared lounge, free private parking, a garden and a terrace. Among the facilities at this property are room service and luggage storage space, along with free WiFi throughout the property. The property has a 24-hour front desk, a shared kitchen and currency exchange for guests. </p>

                                            <p>A continental breakfast is available daily at the hotel. </p>

                                            <p>The area is popular for cycling, and bike rental and car rental are available at Gleneagles Grey Mansion - Prihan's. </p>

                                            <p>North South University is a 10-minute walk from the accommodation, while Bashundhara Group is 1.8 km away. </p>

                                            <p>We speak your language! </p>
                                        </ExpandCollapse>

                                    </div>
                                </div>
                                <div className="overview-suitable-room mt-5 mb-5">
                                    <h3>Suitable Room for you, Related your search</h3>
                                    <RoomList />
                                </div>
                                <div className="overview-location mt-5">
                                    <div className="location-google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29713.272456580362!2d91.96603642911691!3d21.42299224029849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc87b77eee12b%3A0xe54c5b81620c1bd4!2sHotel%20Marine%20Plaza!5e0!3m2!1sen!2sbd!4v1579314485864!5m2!1sen!2sbd"></iframe>
                                    </div>
                                </div>
                                <div className="overview-reviews mt-5 mb-4">
                                    <RatingStats ratings={[20, 25, 12, 7, 3]} ratingAverage={3.8} raterCount={67} />
                                </div>
                            </div>

                        </div>
                        <div id="rooms" className="tab-pane">
                            <h3 className="rooms-hotel-name"><a href="#overview">Rooms of Royal Tulip Sea Pearl Beach Resort Cox's Bazar</a> <span>5 <i className="fas fa-star"></i> Hotel</span> </h3>
                            <RoomList />
                            <RoomList />
                            <RoomList />
                            <RoomList />
                        </div>
                        <div id="photos" className="tab-pane">

                            <ModuleThumb />

                        </div>
                        <div id="location" className="tab-pane">
                            <h3>Location</h3>
                            <div className="location-google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29713.272456580362!2d91.96603642911691!3d21.42299224029849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc87b77eee12b%3A0xe54c5b81620c1bd4!2sHotel%20Marine%20Plaza!5e0!3m2!1sen!2sbd!4v1579314485864!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                        <div id="reviews" className="tab-pane">
                            <h3>Reviews</h3>
                            <RatingStats ratings={[20, 25, 12, 7, 3]} ratingAverage={3.8} raterCount={67} />
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <div className="modal-footer-menu d-flex">
                        <div className="modal-menu-left flex-fill text-left">
                            <ul className="ntWishlist-actions d-flex">
                                {/* <div className="review-tooltip"><ReactTooltip place="bottom" type="info" effect="solid"/></div> */}

                                <li className="flex-fill"><a href=".#"><i className="fas fa-comments"></i>Live Chat for Booking</a></li>

                                <li className="flex-fill"><a href=".#"><i className="fas fa-phone-square-alt"></i>Call for Booking</a></li>

                                <li className="flex-fill"><a href=".#"><i className="fas fa-heart"></i> Add to Wishlist</a></li>


                            </ul>
                        </div>
                        <div className="modal-menu-right flex-fill text-right">
                            <button type="button" className="btn btn-primary"> Full View  <i className="fas fa-arrow-right"></i></button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal"> <i className="fas fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );
  }
}

export default ListingPopupContent;