import React, {useState} from 'react'
import BusinessCard from './BusinessCard.js'

export default function Slider() {
    let [businesses, setBusinesses] = useState([
        {
            name: "Olive Garden",
        },
        {
            name: "Applebee's",
        },
        {
            name: "Chili's",
        }
    ]);

    return (
        <div style={{height : "auto", width : "auto", display : "flex"}}>
            {businesses.map((curr) => (
                <BusinessCard businessTitle={curr.name}/>
            ))}
            <div style={{height: "1rem", width: "1rem", backgroundColor: "blue"}} className="nextSlide">

            </div>
        </div>
    )
}
