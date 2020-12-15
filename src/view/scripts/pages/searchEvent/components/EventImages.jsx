import React from "react";
import {
  Carousel,
  Image} from "antd";

const EventImages = (props) =>
{


    const imagesArray = props.images;
    if(imagesArray.length > 0)
    {
      return (<Carousel autoplay autoplaySpeed="50" speed="1000" fade className="carousel">
            {
              imagesArray.map((img) => {
                return <div className="image-div">
                  {
                    <Image src={`data:image/jpeg;base64,${img.image}`}  alt="event image"/>
                  }
                </div>
            })
          }
              </Carousel>
            );
    }
    else{
      return (<div>
          <Image src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"} />
        </div>);
    }
}

export default EventImages;
