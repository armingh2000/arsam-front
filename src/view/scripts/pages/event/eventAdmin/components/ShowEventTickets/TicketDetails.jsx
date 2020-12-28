import React from "react";
import { Typography, Tag, Col, Row } from 'antd';
import {
  UserOutlined,
  ContainerTwoTone,
  DollarCircleTwoTone
} from '@ant-design/icons';


const TicketDetails = ({type, user, price}) =>
{
  const { Text, Title } = Typography;


  return (
  <div align="top" className="ticket-details">
    <div className="details-header">

      <Title level={2}>

      <ContainerTwoTone className="icon-place" twoToneColor="#006d75"/>

      {type}
      </Title>
    </div>

    <br/>


    <div>
      <UserOutlined className="icon icon-place" twoToneColor="#fcdb03"/>
      <Text className="icon">{user}</Text>
    </div>

    <br/>

      <div>
        <DollarCircleTwoTone twoToneColor="#52c41a"/>
        <Text> {price} $</Text>
      </div>

    <br/>


  </div>
);
}

export default TicketDetails;
