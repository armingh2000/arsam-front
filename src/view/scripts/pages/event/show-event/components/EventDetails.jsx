import React from "react";
import { Typography, Space } from 'antd';


const EventDetails = ({name, startDate, endDate, creator}) =>
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
  </div>);
}

export default EventDetails;
