import React, {useState} from 'react';
import Slider from './Slider'
import BusinessModal from '../BusinessModal'

export default function Feed(){
    let [sliders, setSliders] = useState([
        {
            title : "Nearby",
            subtitle : "Businesses near you",
            places : [
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
            ]
        },
        {
            title : "Female + Veteran",
            subtitle : "Businesses owned by females, veterans, and racial minorities",
            places : [
                {
                    name: "Wendy's",
                    picture: "https://www.daytondailynews.com/resizer/E_dmSKC5XVtTxxScATT3XeN8oec=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/coxohio/JP2KJLY5HYHYYW5PODZ7Y2FJBE.jpg"
                },
                {
                    name: "McDonald's",
                    picture: "https://cdn.winsightmedia.com/platform/files/public/2020-06/background/shutterstock_1181606473_1592329384.jpg?MZY8yYT5e2RM7arx_lljn.LNxSM78_C9"
                },
                {
                    name: "Chik-Fil-A",
                    picture: "https://cdn.vox-cdn.com/thumbor/OjzSXakiY5zpa1yFsu43TaTM81g=/0x317:3800x2217/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/16306251/GettyImages_929122544__1_.jpg"
                },
                {
                    name: "Burger King",
                    picture: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200902125558-02-burger-king-new-restaurant-design---rendering.jpg"
                }
            ]
        }
    ]);

    return (
        <>
        {
            sliders.map(curr => (
                <Slider
                    businessArr={curr.places}
                    businessCategory={curr.title}
                    businessDescrip={curr.subtitle}
                />
            ))
        }
        <BusinessModal/>
        </>
    )
}