import React, {useState} from 'react';
import Slider from './Slider'

export default function Feed(){
    let [sliders, setSliders] = useState([
    [
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
        },
        {
            name: "Chipotle",
            picture: "https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/chipotle-hackers-dined-out-on-most-restaurants-showcase_image-8-a-9951.jpg"
        }
    ],
    [
        {
            name: "McDonald's",
            picture: "https://static01.nyt.com/images/2020/05/14/business/14mcdonalds-1/14mcdonalds-1-mobileMasterAt3x.jpg"
        },
        {
            name: "Wendy's",
            picture: "https://www.meatpoultry.com/ext/resources/MPImages/11-2018/11082018/wendys-exterior.jpg?t=1541774773&width=1080"
        },
        {
            name: "Chik-Fil-A",
            picture: "https://thechickenwire.chick-fil-a.com/-/media/amazon-cloudfront/images/cfacom/stories-images/press/finaloption3.ashx"
        },
        {
            name: "Burger King",
            picture: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200902125558-02-burger-king-new-restaurant-design---rendering.jpg"
        }
    ]
    ]);

    return (
        <>
        {
            sliders.map(curr => (
                <Slider businessArr={curr}/>
            ))
        }
        </>
    )
}