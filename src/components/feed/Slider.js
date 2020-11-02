import React, {useState} from 'react'
import BusinessCard from './BusinessCard.js'
import './feed.css'

export default function Slider({businessArr}) {
    let [businesses, setBusinesses] = useState(businessArr);

    return (
        // Map Cards to Businesses
        // Add
        <div className="wrap"> 
            <div className="titles">
                <h3>Chain Restaurants</h3>
                <h5>Big name restaurants in your area</h5>
            </div>
            <div className="slider-wrapper">
                {businesses.map((curr) => (
                    <BusinessCard businessTitle={curr.name} backgroundPicture={curr.picture}/>
                ))}
                <div className="nextSlide">

                </div>
            </div>
        </div>
    )
}
