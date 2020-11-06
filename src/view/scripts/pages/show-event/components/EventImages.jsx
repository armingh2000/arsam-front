import React from "react";
import {Carousel} from "antd"; 

const EventImages = (props) =>
{           
    const imagesArray = props.images;
    return (
        <Carousel autoplay>
        {imagesArray.map((img) => {
            return <div><img src={img.src} /></div>
        })}        
        </Carousel>
    );

}

export default EventImages;
