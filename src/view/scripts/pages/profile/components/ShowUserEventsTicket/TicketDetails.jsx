import React, { useState } from "react";
import { Typography, Tag, Col, Row, Rate, message } from 'antd';
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
import { now } from "moment";
import { connect } from "react-redux";
import { ticketRating } from '../../../../../../core/api/actions/EventActions';
import moment from 'moment';

const TicketDetails = ({title, price, ticketTypeName, eventId, eventEndDate, dispatch}) =>
{
  const { Text, Title } = Typography;
  const onchangeScore = (e) => {
    dispatch(ticketRating({
      Id: eventId,
      Stars: e
    }, handleFail, handleSuccess))
  }

  const handleFail = () => {
    message.error('You can not rate this event')
  }

  const handleSuccess = () => {
    message.success(`Your vote for ${title} event is submited successfully`)
  }

  return (
  <div align="top" className="ticket-details">
    <div className="details-header">

      <Title level={2}>

      <ThunderboltTwoTone className="icon-place" twoToneColor="#fcb103"/>

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

    { moment().isAfter(eventEndDate)  && 
    <div>
      <Rate onChange={onchangeScore}></Rate>
    </div>
  }

    <br/>


  </div>
);
}

export default connect()(TicketDetails);
