import React from "react";
import {
  Carousel,
  Image} from "antd";

const EventImages = (props) =>
{


    const imagesArray = props.images;
    return (<Carousel autoplay autoplaySpeed="50" speed="1000" fade >
          {imagesArray.map((img) => {
              return <div>
              <Image src={img.src} width="50vw" alt="event image"  height="50vh"/>
              </div>
          })}
          </Carousel>
    );

}

export default EventImages;
