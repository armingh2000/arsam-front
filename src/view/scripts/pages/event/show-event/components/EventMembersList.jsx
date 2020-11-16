import React from "react";
import { Avatar, Typography, Tooltip } from 'antd';

const EventMembersList = ({members}) =>
{

  const { Title } = Typography;

  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  return (
    <div style={{textAlign:"center"}}>
      <Title level={5}>Attendies: {members.length}</Title>
      <Avatar.Group
          maxCount={3}
          size="large"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          {members.map((member) => {
            return (
              <Tooltip title={member.email} placement="top">
                <Avatar
                  style={{
                    backgroundColor: getRandomColor(),
                  }}
                >
                  {member.email.charAt(0)}
                </Avatar>
              </Tooltip>
            );
          })}
        </Avatar.Group>
    </div>
  );
}

export default EventMembersList;
