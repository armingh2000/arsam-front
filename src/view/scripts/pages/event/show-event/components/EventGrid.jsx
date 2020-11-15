import React from "react";
import {
    Row,
    Col,
    Card} from "antd";
import EventImages from "./EventImages";
import EventDetails from "./EventDetails";

const EventGrid = ({event, dispatch, eventId}) =>
{
  const images = [
    {
      src:"https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/28feb7a52009.png"
    },
    {
      src:"https://afremov.com/images/product/image_907.jpeg"
    },
    {
      src:"https://images-na.ssl-images-amazon.com/images/I/812l%2BQx3JuL._AC_SL1454_.jpg"
    }
  ];

  return (<div>
            <Card className="card">
              <Row justify="space-around" align="middle" gutter={[8,8]}>
                <Col span={11}>
                    <EventImages images={images}/>
                </Col>
                <Col span={9} className="details-col">
                  <EventDetails
                    name={event.name}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    creator={event.creator}
                    categories={event.categories}/>
                </Col>
              </Row>
            </Card>
            <Card className="card">
              <h1>MELIKA</h1>
            </Card>
            <Card className="card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus. Scelerisque in dictum non consectetur a erat nam at lectus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Libero volutpat sed cras ornare arcu dui vivamus. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Non enim praesent elementum facilisis leo vel fringilla. Amet mattis vulputate enim nulla aliquet porttitor lacus.
              <br/>
              <br/>
              Lacus sed turpis tincidunt id aliquet risus feugiat in. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ullamcorper sit amet risus nullam eget felis eget nunc. Mi sit amet mauris commodo quis imperdiet massa. Elementum sagittis vitae et leo duis.
            </Card>

          </div>
  );
}

export default EventGrid;
