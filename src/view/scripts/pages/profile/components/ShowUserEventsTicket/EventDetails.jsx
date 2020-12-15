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
  FireOutlined
} from '@ant-design/icons';


const EventDetails = ({name, startDate, endDate, creator, categories}) =>
{
  const { Text, Title } = Typography;
  
  return (<div align="top" className="event-details">
    <div className="details-header">
      <Title level={2}>{name}</Title>
      <Title type="secondary" level={5}><UserOutlined /> {creator}</Title>
    </div>
    <br/>
    <Row justify="space-around" align="middle" gutter={[8,8]}>
      <Col xl={{span:12}}  md={{span:12}} sm={{span:12}} xs={{span:12}}>
        <Text className="text"><ClockCircleOutlined /> Start
          <br/>
          {new Date(startDate).toDateString()}
          <br/>
          <Text type="secondary">{new Date(startDate).getHours() + ":" + new Date(startDate).getMinutes()}</Text>
        </Text>
      </Col>
      <Col xl={{span:12}}  md={{span:12}} sm={{span:12}} xs={{span:12}}>
        <Text className="text"><ClockCircleOutlined /> End
          <br/>
          {new Date(endDate).toDateString()}
          <br/>
          <Text type="secondary">{new Date(endDate).getHours() + ":" + new Date(endDate).getMinutes()}</Text>
        </Text>
      </Col>
    </Row>

    <Text className="text tags">Tags:
    {categories.map((tag) => {
        switch (tag) {
          case 1:
          return <Tag color="magenta"><TrophyOutlined /> Race</Tag>;
          case 2:
            return <Tag color="gold"><SafetyOutlined /> Performance</Tag>;
          case 4:
            return <Tag color="purple"><SoundOutlined /> Conference</Tag>;
          case 8:
            return <Tag color="red"><DollarCircleOutlined /> Fundraiser</Tag>;

          case 16:
            return <Tag color="blue"><FireOutlined /> Festival</Tag>;
          case 32:
            return <Tag color="green"><TeamOutlined /> Social Event</Tag>;

          default:
            return null;
        }
      }
    )}
  </Text>
  </div>);
}

export default EventDetails;
