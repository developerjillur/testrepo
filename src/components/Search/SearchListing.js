import React, {Component} from 'react';
import './listingPageStyle.css';
import "react-image-gallery/styles/css/image-gallery.css";

// import DayPicker from './FilterComponent/DatePicker';
import ReactDatePicker from './FilterComponent/DatePicker';
import PriceSlider from './FilterComponent/NumberSlider';
import {ListingItems} from './ListItemComponent/ListingItemComponent';
// import HeaderSelecta from './FilterComponent/PrimarySelectOpction';
// import {App} from './FilterComponent/PrimarySelectOpction';
import {SelectPerson, SelectBudget} from './FilterComponent/SelectOpctions';
import Trend from 'react-trend';

class SearchListing extends Component {
   
    render(){
        return(
            <div>
                <div className="search-page-wrap">
                    <div className="container custom_container p0">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="search-left-sidebar pr-4 my-4">
                                    <div id="slider"></div>

                                    <Trend
                                        smooth
                                        autoDraw
                                        autoDrawDuration={3000}
                                        autoDrawEasing="ease-out"
                                        data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
                                        gradient={['#42b3f4']}
                                        radius={10}
                                        strokeWidth={4}
                                        strokeLinecap={'round'}
                                    />

                                    <PriceSlider />

                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="search-right-container">
                                    <div className="search-primary-filter my-4">

                                        <div className="search-info-and-filter-data d-flex justify-content-between">
                                            <div className="checkin-cehckout-date primary-search-filter-item">
                                                <div className="select-dates empty-strong-date">

                                                    <ReactDatePicker />
                                                    
                                                    {/* <span>Check-in <strong>  20/05/2020 </strong> </span> <span> Check-out <strong> 20/05/2020 </strong> </span> */}
                                                </div> 
                                            </div> 
                                            <div className="addisonal-filters-data primary-search-filter-item">
                                                <SelectPerson />
                                            </div>
                                            <div className="budgetin-primary-filter primary-search-filter-item">
                                                <SelectBudget />
                                            </div>  
                                            {/* <div className="submit-search-button">
                                                <button className="search-button">Search</button>
                                            </div>  */}
                                        </div>
                                    </div>
                                    <div className="search-view-on-map d-flex my-4">
                                        <div className="search-view-on-map-left flex-fill">
                                            <h3> <span>Dhaka: </span> 130 Hotels are available on your filter. <a href="./" data-toggle="tab">Clear all filter</a> </h3>
                                            <div className="selected-filters">
                                                <ul>
                                                    <li>Free Wifi</li>
                                                    <li>Breakfast included</li>
                                                    <li>Pool</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="search-view-on-map-right flex-fill  align-items-center float-right">
                                            <button className="btn">  <i class="fas fa-map-marker"></i> Map View </button>
                                        </div>
                                    </div>
                                    <div className="search-listing-container">
                                        <ListingItems />
                                        <ListingItems />
                                        <ListingItems />
                                        <ListingItems />
                                        <ListingItems />

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchListing;