import React from "react";
import {
  Card,
  Typography,
  Avatar,
  Row,
  Col,
  Tooltip,
  message
} from "antd";
import {
  UserOutlined,
  UpCircleTwoTone,
  DownCircleTwoTone,
  CloseCircleTwoTone
} from "@ant-design/icons";
import { setAdmin, setMember, kickMember } from "../../../../../../core/api/actions/EventActions";
import EventAdminInvite from "./EventAdminInvite";

const EventAdminMembers = ({eventId, admins, members, dispatch, creator}) =>
{

  const {Text} = Typography;
  const { Meta } = Card;
  const key = 'updatable';

  const openLoadMessage = () => {
    message.loading({ content: 'Loading...', key, duration: 10 });
  };

  const openSuccessMessage = () => {
      message.success({ content: 'Updated!', key, duration: 2 });
  };

  const openErrorMessage = () => {
      message.error({ content: 'Error!', key, duration: 2 });
  };


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

  return (
    <div className="admin-cards-div">
      <EventAdminInvite olm={openLoadMessage} oem={openErrorMessage} osm={openSuccessMessage} eventId={eventId} dispatch={dispatch}/>
      <div>
      <Row gutter={[20,10]}>
        {admins && admins.map((admin) => {
          return (
            <Col lg={8} xs={22} md={10}>
              <Card
                className="card"
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
              {admin.email !== creator.email &&
                <div>
                  <Tooltip title="demote to member" placement="right" color="red">
                  <DownCircleTwoTone
                  twoToneColor="#eb2f96"
                  style={{fontSize:40, margin:"10px 10px 0 0"}}
                  onClick={() => {
                    dispatch(setMember({payload:{eventId, email:admin.email, oem:openErrorMessage, olm:openLoadMessage, osm: openSuccessMessage}}))
                  }}/>
                </Tooltip>
                <Tooltip title="remove member" placement="left" color="red" className="right-aligned-button">
                  <CloseCircleTwoTone
                    twoToneColor="red"
                    style={{fontSize:40, margin:"10px 10px 0 0"}}
                    onClick={() => {
                      dispatch(kickMember({payload:{eventId, email:admin.email, oem:openErrorMessage, olm:openLoadMessage, osm: openSuccessMessage}}))
                    }}
                    />
                </Tooltip>
              </div>}
              </Card>
            </Col>
          );
        })}
        {members && members.map((member) => {
          return (
            <Col  lg={8} xs={22} md={10} >
              <Card
                className="card"
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
                  style={{fontSize:40, margin:"10px 10px 0 0"}}
                  onClick={() => {
                    dispatch(setAdmin({payload:{eventId, email:member.email, oem:openErrorMessage, olm:openLoadMessage, osm: openSuccessMessage}}))
                  }}/>
              </Tooltip>
              <Tooltip title="remove member" placement="left" color="red" className="right-aligned-button">
                <CloseCircleTwoTone
                  twoToneColor="red"
                  style={{fontSize:40, margin:"10px 10px 0 0"}}
                  onClick={() => {
                    dispatch(kickMember({payload:{eventId, email:member.email, oem:openErrorMessage, olm:openLoadMessage, osm: openSuccessMessage}}))
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
