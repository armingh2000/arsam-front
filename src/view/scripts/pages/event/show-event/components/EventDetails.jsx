import React from "react";
import { Typography, Tag } from 'antd';


const EventDetails = ({name, startDate, endDate, creator, categories}) =>
{
  const { Text, Title } = Typography;


  return (<div align="top" style={{lineHeight:"2"}}>
    <Title level={2}>{name}</Title>
    <Title type="secondary" level={5}>{creator.email}</Title>
    <br />
    <Text>Start: {startDate}</Text>
    <br/>
    <Text>End: {endDate}</Text>
    <br/>
    <br/>
    <Text>TAGS: {categories.map(tag => {
        switch (tag) {
          case 1:
            return <Tag color="magenta">Race</Tag>;
          case 2:
            return <Tag color="gold">Performance</Tag>;
          case 4:
            return <Tag color="purple">Conference</Tag>;
          case 8:
            return <Tag color="orange">Fundraiser</Tag>;
          case 16:
            return <Tag color="blue">Festival</Tag>;
          case 32:
            return <Tag color="green">Social Event</Tag>;
        }
      }
    )}
  </Text>
  </div>);
}

export default EventDetails;
