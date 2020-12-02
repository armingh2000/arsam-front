import React from "react";
import {
  Card,
  Typography,
  Avatar,
  Row,
  Col,
  Tooltip
} from "antd";
import {
  UserOutlined,
  UpCircleTwoTone,
  DownCircleTwoTone,
  CloseCircleTwoTone
} from "@ant-design/icons";
import { setAdmin, setMember, kickMember } from "../../../../../../core/api/actions/EventActions";
import EventAdminInvite from "./EventAdminInvite";
import openNotificationWithIcon from "../../../../../../core/login-signup/openNotificationWithIcon";



const EventAdminMembers = ({eventId, admins, members, dispatch}) =>
{

  const {Text} = Typography;
  const { Meta } = Card;

  function getRandomColor(firstLetter) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[(firstLetter.charCodeAt(0) * i + 14) % 16];
    }
    return color;
  }

  function getUserInfo(user) {
    return <div>
      <UserOutlined/>
      {" " + user.email}
    </div>
  }

  const onFailure = (err) => {
    console.log(err.response);
  }

  const onSuccess = (data) => {
    console.log(data);
  }

  return (
    <div style={{width:"90%", margin:"20px auto"}}>
      <EventAdminInvite eventId={eventId} dispatch={dispatch}/>
      <div>
      <Row gutter={[10,10]}>
        {admins.map((admin) => {
          return (
            <Col span={5} offset={2} >
              <Card
                style={{ width:250 , height:150 }}
              >
                <Meta
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor:getRandomColor(admin.email.charAt(0)),
                        height: 40,
                        width: 40
                      }}
                    >
                      {admin.email.charAt(0)}
                    </Avatar>
                  }
                  title={getUserInfo(admin)}
                  description="admin"
                />
                <Tooltip title="demote to member" placement="right" color="red">
                  <DownCircleTwoTone
                  twoToneColor="#eb2f96"
                  style={{fontSize:40, margin:"10px"}}
                  onClick={() => {
                    dispatch(setMember({payload:{eventId, email:admin.email}}))
                  }}/>
                </Tooltip>
                <Tooltip title="remove member" placement="left" color="red">
                  <CloseCircleTwoTone
                    twoToneColor="red"
                    style={{fontSize:40}}
                    onClick={() => {
                      dispatch(kickMember({payload:{eventId, email:admin.email}}))
                    }}
                    />
                </Tooltip>
              </Card>
            </Col>
          );
        })}
        {members.map((member) => {
          return (
            <Col span={5} offset={2} >
              <Card
                style={{ width:250 , height:150 }}
              >
                <Meta
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor:getRandomColor(member.email.charAt(0)),
                        height: 40,
                        width: 40
                      }}
                    >
                      {member.email.charAt(0)}
                    </Avatar>
                  }
                  title={getUserInfo(member)}
                  description="member"
                />
              <Tooltip title="promote to admin" placement="right" color="green">
                <UpCircleTwoTone
                  twoToneColor="#52c41a"
                  style={{fontSize:40, margin:"10px"}}
                  onClick={() => {
                    dispatch(setAdmin({payload:{eventId, email:member.email}}))
                  }}/>
              </Tooltip>
              <Tooltip title="remove member" placement="left" color="red">
                <CloseCircleTwoTone
                  twoToneColor="red"
                  style={{fontSize:40, margin:"auto 10px auto auto"}}
                  onClick={() => {
                    dispatch(kickMember({payload:{eventId, email:member.email}}))
                  }}
                  />
              </Tooltip>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
    </div>
  );
}

export default EventAdminMembers;
