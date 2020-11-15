import React from "react";
import { Typography, Tag, Col, Row } from 'antd';


const EventDetails = ({name, startDate, endDate, creator, categories}) =>
{
  const { Text, Title } = Typography;


  return (<div align="top" className="event-details">
    <div className="details-header">
      <Title level={2}>{name}</Title>
      <Title type="secondary" level={5}>{creator.email}</Title>
    </div>
    <br/>
    <Row justify="space-around" align="middle" gutter={[8,8]}>
      <Col>
        <Text className="text">Start<br/>{new Date(startDate).toDateString()}</Text>
      </Col>
      <Col>
        <Text className="text">End<br/>{new Date(endDate).toDateString()}</Text>
      </Col>
    </Row>
    <br/>
    <br/>
    <Text className="text tags">Tags: {categories.map((tag) => {
        switch (tag) {
          case 1:
            return <Tag color="magenta">Race</Tag>;
          case 2:
            return <Tag color="gold">Performance</Tag>;
          case 4:
            return <Tag color="purple">Conference</Tag>;
          case 8:
            return <Tag color="red">Fundraiser</Tag>;
          case 16:
            return <Tag color="blue">Festival</Tag>;
          case 32:
            return <Tag color="green">Social Event</Tag>;
          default:
            return null;
        }
      }
    )}
  </Text>
  </div>);
}

export default EventDetails;
