import React, {useState} from 'react';
import axios from "axios";
import {
  Tabs,
  Layout,
  Row,
  Col,
  Form,
  Input,
  Image,
  Button,
  Typography,
  Checkbox,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Space,
  Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import RaceImg from "../Images/race.png";
import PerformanceImg from "../Images/sax-performance.jpg";
import ConferenceImg from "../Images/conference.jpg";
import FundraiserImg from "../Images/fundraiser.jpg";
import FestivalImg from "../Images/festival.jpg";
import SocialEventImg from "../Images/social-event.jpg";



const EventTypes = () =>{

  const history = useHistory();

  return (
    <div id="event-types">
      <Row>

          <Col span={16}>
            <div>
              <h3>Race</h3>
            </div>
          </Col>

          <Col span={2}>

          </Col>

          <Col span={6}>
            <Image
            height={150}
            src={RaceImg}
            />
          </Col>

      </Row>

      <hr/>

      <Row>

        <Col span={6}>
          <Image
          height={150}
          src={PerformanceImg}
          />
        </Col>

        <Col span={2}>

        </Col>

        <Col span={16}>
          <div>
            <h3>Performance</h3>
          </div>
        </Col>

      </Row>

      <hr/>

      <Row>

        <Col span={16}>
          <div>
            <h3>Conference</h3>
          </div>
        </Col>

        <Col span={2}>

        </Col>

        <Col span={6}>
          <Image
          height={150}
          src={ConferenceImg}
          />
        </Col>

      </Row>

      <hr/>

      <Row>

        <Col span={6}>
          <Image
          height={150}
          src={FundraiserImg}
          />
        </Col>

        <Col span={2}>

        </Col>

        <Col span={16}>
          <div>
            <h3>Fundraiser</h3>
          </div>
        </Col>

      </Row>

      <hr/>

      <Row>

        <Col span={16}>
          <div>
            <h3>Festival</h3>
          </div>
        </Col>

        <Col span={2}>

        </Col>

        <Col span={6}>
          <Image
          height={150}
          src={FestivalImg}
          />
        </Col>

      </Row>

      <hr/>

      <Row>

        <Col span={6}>
          <Image
          height={150}
          src={SocialEventImg}
          />
        </Col>

        <Col span={2}>

        </Col>

        <Col span={16}>
          <div>
            <h3>Social Event</h3>
          </div>
        </Col>

      </Row>


    </div>
  );

}

export default EventTypes;
