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
import { UploadOutlined, InboxOutlined, IdcardOutlined, ProjectOutlined , CrownOutlined , ContactsOutlined } from '@ant-design/icons';
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

    <Divider orientation="left"><div><ContactsOutlined /> Free</div></Divider>

    <Collapse className="get-border-radius">
      <Panel header={<div><ProjectOutlined/> Events</div>} key="1">
        <ul>
          <Row>
            <Col span={14}>
              <li>Create events (only 5) + Project/normal event + Private/public event</li>
            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={200}
              src={CreateEventImg}
              />
            </Col>

          </Row>

          <br/>

          <Row>
            <Col span={14}>
              <li>Search and Filter among events</li>
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

              <li>Buy tickets</li>
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
          {
          // <Row>
          //   <Col span={14}>
          //     <li>Send request to join events</li>
          //   </Col>
          //   <Col span={2}>
          //
          //   </Col>
          //
          //   <Col span={8}>
          //     <Image
          //     height={150}
          //     src={JoinImg}
          //     />
          //   </Col>
          // </Row>
          //
          // <br/>
          }

          <Row>
            <Col span={14}>
              <li>Accept or reject requests to join + Add or remove members + Promote or demote members + Ask your questions in comments
              + Send request to join events + Add tags to filter events + create tasks and assign them
              + Sell tickets(maximum 50) + Create/Edit/Delete different types of tickets
              </li>
            </Col>
            <Col span={2}>

            </Col>

            <Col span={8}>
              <Image
              height={200}
              src={RequestsImg}
              />
            </Col>
          </Row>



          <br/>

          {
          // <Row>
          //   <Col span={14}>
          //
          //
          //   </Col>
          //   <Col span={2}>
          //
          //   </Col>
          //
          //   <Col span={8}>
          //     <Image
          //     height={150}
          //     src={MembersImg}
          //     />
          //   </Col>
          // </Row>
          //
          // <br/>


          // <Row>
          //   <Col span={14}>
          //     <li>You can ask your questions about an event or reply to other comments in comment part for each event.</li>
          //
          //   </Col>
          //   <Col span={2}>
          //
          //   </Col>
          //
          //   <Col span={8}>
          //     <Image
          //     height={150}
          //     src={CommentsImg}
          //     />
          //   </Col>
          // </Row>
          //
          // <br/>


          // <Row>
          //   <Col span={14}>
          //     <li>You can assign some tags to your events.</li>
          //
          //   </Col>
          //   <Col span={2}>
          //
          //   </Col>
          //
          //   <Col span={8}>
          //     <Image
          //     height={150}
          //     src={EventsImg}
          //     />
          //   </Col>
          // </Row>
          //
          // <br/>
          }

          {
          // <Row>
          //   <Col span={14}>
          //     <li></li>
          //
          //   </Col>
          //   <Col span={2}>
          //
          //   </Col>
          //
          //   <Col span={8}>
          //     <Image
          //     height={150}
          //     src={CreateTicketsImg}
          //     />
          //   </Col>
          // </Row>
          //
          // <br/>
          }

          {
          // <Row>
          //   <Col span={14}>
          //     <li>You can create tasks and assign them to your members or edit or delete them.</li>
          //
          //   </Col>
          //   <Col span={2}>
          //
          //   </Col>
          //
          //   <Col span={8}>
          //     <Image
          //     height={150}
          //     src={TasksImg}
          //     />
          //   </Col>
          // </Row>
          }




        </ul>


      </Panel>

      <Panel header={<div><IdcardOutlined/> Profile</div>} key="2">
        <ul>
          <li>Charge your account</li>
          <li>Change your password or change your profile image</li>
          <li>Rate events</li>

        </ul>
      </Panel>

    </Collapse>



    <Divider orientation="right"><div><CrownOutlined/> Premium</div></Divider>
      <ul>
        <li>You have all Free Version Features.</li>
        <li>Create Infinite Events</li>
        <li>Create Infinite Tickets</li>
      </ul>


    </div>
  );

}

export default Features;
