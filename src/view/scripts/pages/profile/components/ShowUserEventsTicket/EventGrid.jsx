import React from "react";
import {
    Row,
    Col,
    Card} from "antd";
import EventDetails from "./EventDetails";
import EventMembersList from "./EventMembersList";
import EventDescription from "./EventDescription";

const EventGrid = ({event, dispatch, eventId}) =>
{
  console.log(localStorage.getItem("userToken"));
  // console.log(eventId);
  return (<div>
            <Card className="card">
              <Row justify="space-around" align="middle" gutter={[8,8]}>
                
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

            <Card className="card">
              <EventDescription description={event.description}/>
            </Card>
          </div>
  );
}

export default EventGrid;
