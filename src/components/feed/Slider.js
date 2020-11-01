import React, {useState} from 'react'
import BusinessCard from './BusinessCard.js'
import './feed.css'

export default function Slider() {
    let [businesses, setBusinesses] = useState([
        {
            name: "Olive Garden",
            picture: "https://brooklynreporter.com/wp-content/uploads/2019/04/Copy-of-Olive_Garden_DSC_1032-1-1024x683.jpg"
        },
        {
            name: "Applebee's",
            picture: "https://www.applebees.com/-/media/applebees/campaigns-2/health-and-safety/sanitation-lower-module-desktop.jpg?la=en&hash=87F93C0DB6C15FF647D5C4BE3A8D9F5938E36C9E"
        },
        {
            name: "Chili's",
            picture: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/08/0/0/Chilis.jpg?ve=1&tl=1"
        }
    ]);

    return (
        <div className="slider-wrapper" style={{height : "auto", width : "auto", display : "flex"}}>
            {businesses.map((curr) => (
                <BusinessCard businessTitle={curr.name} backgroundPicture={curr.picture}/>
            ))}
            <div className="nextSlide">

            </div>
        </div>
    )
}
