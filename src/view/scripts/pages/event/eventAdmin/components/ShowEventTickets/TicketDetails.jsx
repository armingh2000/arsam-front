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


const TicketDetails = ({type, user}) =>
{
  const { Text, Title } = Typography;


  return (
  <div align="top" className="ticket-details">
    <div className="details-header">

      <Title level={2}>

      <ThunderboltTwoTone className="icon-place" twoToneColor="#fcb103"/>

      {type}
      </Title>
    </div>

    <br/>


    <div>
      <UserOutlined className="icon icon-place" twoToneColor="#fcdb03"/>
      <Text className="icon">{user}</Text>
    </div>

    <br/>

    <br/>


  </div>
);
}

export default TicketDetails;
