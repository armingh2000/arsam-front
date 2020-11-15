import React from "react";
import {
  Carousel,
  Image} from "antd";

const EventImages = (props) =>
{


    const imagesArray = props.images;
    return (<Carousel autoplay autoplaySpeed="50" speed="1000" fade className="carousel">
          {imagesArray.map((img) => {
              return <div>
              <Image src={img.src}  alt="event image"/>
              </div>
          })}
          </Carousel>
    );

}

export default EventImages;
