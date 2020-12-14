import React from "react";
import { Typography, Tag, Col, Row } from 'antd';
import {
  ClockCircleOutlined,
  UserOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  SoundOutlined,
  SafetyOutlined,
  FireOutlined,
  AlertOutlined,
  ThunderboltOutlined,
  ThunderboltTwoTone,
  DollarCircleTwoTone,
  StarTwoTone
} from '@ant-design/icons';


const TicketDetails = ({title, price, ticketTypeName, isEvent}) =>
{
  const { Text, Title } = Typography;


  return (
  <div align="top" className="ticket-details">
    <div className="details-header">

      <Title level={2}>

      {isEvent?<ThunderboltTwoTone className="icon-place" twoToneColor="#fcb103"/>:<UserOutlined className="icon-place"/>}

      {title}
      </Title>
    </div>

    <br/>


    <div>
      <StarTwoTone className="icon icon-place" twoToneColor="#fcdb03"/>
      <Text className="icon">{ticketTypeName}</Text>
    </div>

    <br/>

    <div>
      <DollarCircleTwoTone className="icon icon-place" twoToneColor="#52c41a"/>
      <Text className="icon">{price}$</Text>
    </div>

    <br/>


  </div>
);
}

export default TicketDetails;
