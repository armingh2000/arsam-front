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
  Divider,
  Collapse,
  Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import CreateEventImg from "../Images/createevent.png";
import FilterEventImg from "../Images/filter.png";
import MembersImg from "../Images/members.png";
import JoinImg from "../Images/join.png";
import RequestsImg from "../Images/requests.png";
import EventTicketsImg from "../Images/event-tickets.png";
import CommentsImg from "../Images/comments.png";
import EventsImg from "../Images/events.png";
import CreateTicketsImg from "../Images/create-tickets.png";
import BuyTicketImg from "../Images/buy-tickets.png";
import TasksImg from "../Images/tasks.png";




const Features = () =>{

  const { Panel } = Collapse;

  const history = useHistory();

  return (
    <div id="features">

    <Divider orientation="left">Free</Divider>

    <Collapse>
      <Panel header="Events" key="1">
        <ul>
          <Row>
            <Col span={14}>
              <li>You can create your own events. (only 5/project or normal events)</li>
              <li>You can create project or normal event.</li>
              <li>You can create private or public event.</li>

            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={CreateEventImg}
              />
            </Col>

          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can search and filter among events.</li>
            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={200}
              src={FilterEventImg}
              />
            </Col>
          </Row>

          <br/>


          <Row>
            <Col span={14}>

              <li>You can buy tickets.</li>
            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={200}
              src={BuyTicketImg}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can send request to join events.</li>
            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={JoinImg}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can accept or reject requests of other people to join your events.</li>
            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={RequestsImg}
              />
            </Col>
          </Row>



          <br/>

          <Row>
            <Col span={14}>
              <li>You can add or remove members to your events.</li>
              <li>You can promote or demote members in your events.</li>

            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={MembersImg}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can ask your questions about an event or reply to other comments in comment part for each event.</li>

            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={CommentsImg}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can assign some tags to your events.</li>

            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={EventsImg}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can sell tickets for your events.(maximum 50)</li>
              <li>You can create/edit/delete different types of tickets.</li>

            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={CreateTicketsImg}
              />
            </Col>
          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>You can create tasks and assign them to your members or edit or delete them.</li>

            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={150}
              src={TasksImg}
              />
            </Col>
          </Row>





        </ul>


      </Panel>

      <Panel header="Profile" key="2">
        <ul>
          <li>You can charge your account.</li>
          <li>You can change your password or change your profile image.</li>
          <li>You can rate events.</li>

        </ul>
      </Panel>

    </Collapse>



    <Divider orientation="right">Premium</Divider>
      <ul>
        <li>You have all Free Version Features.</li>
        <li>You can create infinite events.</li>
        <li>You can create any number of tickets you want.</li>
      </ul>


    </div>
  );

}

export default Features;
