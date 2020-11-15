import React from "react";
import { Avatar, Typography } from 'antd';

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
          maxCount={20}
          size="large"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          {members.map((member) => {
            return (
              <Avatar
                style={{
                  backgroundColor: getRandomColor(),
                }}
              >
                {member.email.charAt(0)}
              </Avatar>
            );
          })}
        </Avatar.Group>
    </div>
  );
}

export default EventMembersList;
