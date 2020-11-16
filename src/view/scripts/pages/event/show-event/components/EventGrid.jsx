import React from "react";
import {
    Row,
    Col,
    Card} from "antd";
import EventImages from "./EventImages";
import EventDetails from "./EventDetails";
import EventMembersList from "./EventMembersList";
import EventDescription from "./EventDescription";

const EventGrid = ({event, dispatch, eventId}) =>
{
  // const images = [
  //   {
  //     src:"https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/28feb7a52009.png"
  //   },
  //   {
  //     src:"https://afremov.com/images/product/image_907.jpeg"
  //   },
  //   {
  //     src:"https://images-na.ssl-images-amazon.com/images/I/812l%2BQx3JuL._AC_SL1454_.jpg"
  //   }
  // ];

  return (<div>
            <Card className="card">
              <Row justify="space-around" align="middle" gutter={[8,8]}>
                <Col xs={24} md={11}>
                    <EventImages images={event.imagesPath}/>
                </Col>
                <Col xs={24} md={9} className="details-col">
                  <EventDetails
                    name={event.name}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    creator={event.creator}
                    categories={event.categories}/>
                </Col>
              </Row>
            </Card>
            <Row justify="space-around" align="middle" gutter={[8,8]}>
              <Col xs={24} md={18}>
                <Card className="card">
                  Melika
                </Card>
              </Col>
              <Col xs={24} md={4}>
                <Card className="card">
                  <EventMembersList members={event.eventMembers}/>
                </Card>
              </Col>
            </Row>
            <Card className="card">
              <EventDescription/>
            </Card>

          </div>
  );
}

export default EventGrid;
