import React from "react";
import { Typography, Tag, Col, Row, Tooltip } from 'antd';
import {
  ClockCircleOutlined,
  UserOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  SoundOutlined,
  SafetyOutlined,
  FireOutlined,
  StarTwoTone
} from '@ant-design/icons';


const EventDetails = ({name, startDate, endDate, creator, categories, rate, rateCount}) =>
{
  const { Text, Title } = Typography;
  const tooltipTitle = `${rateCount} users rated`

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

    <div id="tag-space">
    <Text className="text tags">Tags:
      {categories.map((tag) => {
          switch (tag) {
            case 1:
            return <Tag color="magenta" className="spc"><TrophyOutlined /> Race</Tag>;
            case 2:
              return <Tag color="gold" className="spc"><SafetyOutlined /> Performance</Tag>;
            case 4:
              return <Tag color="purple" className="spc"><SoundOutlined /> Conference</Tag>;
            case 8:
              return <Tag color="red" className="spc"><DollarCircleOutlined /> Fundraiser</Tag>;

            case 16:
              return <Tag color="blue" className="spc"><FireOutlined /> Festival</Tag>;
            case 32:
              return <Tag color="green" className="spc"><TeamOutlined /> Social Event</Tag>;

            default:
              return null;
          }
        }
      )}
    </Text>
  </div>
  <Row justify='center' align='middle' style={{marginTop: '5%'}}>
  <Tooltip title={tooltipTitle}>
    <span><StarTwoTone twoToneColor="#f0c20c" style={{fontSize:'18px'}} /> {rate}</span>
  </Tooltip></Row>
  </div>);
}

export default EventDetails;
