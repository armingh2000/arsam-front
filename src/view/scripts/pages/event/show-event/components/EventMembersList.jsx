import React from "react";
import { Avatar, Typography, Tooltip } from 'antd';

const EventMembersList = ({members, maximumNumberOfMembers, isLimitedMember}) =>
{
  const { Title } = Typography;

  function getRandomColor(firstLetter) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[(firstLetter.charCodeAt(0) * i + 14) % 16];
  }
  return color;
  }


  return (
    <div style={{textAlign:"center"}}>
      <Title level={5}>Attendies: {members.length}
        <br/>
        {isLimitedMember && <div>Limit: {maximumNumberOfMembers}</div>}</Title>
      <Avatar.Group
          maxCount={3}
          size="medium"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          {members.map((member, index) => {
            return (
              <Tooltip title={member.email} placement="top">
                <Avatar
                  style={{
                    backgroundColor:getRandomColor(member.email.charAt(0)),
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
