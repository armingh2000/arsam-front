import React from "react";
import {
  Carousel,
  Image} from "antd";

const EventImages = (props) =>
{


    const imagesArray = props.images;
    return (<Carousel autoplay dotPosition="top" autoplaySpeed="50" speed="1000" fade width="100%">
          {imagesArray.map((img) => {
              return <div>
              <Image src={img.src} width="100%" alt="event image"/>
              </div>
          })}
          </Carousel>
    );

}

export default EventImages;
