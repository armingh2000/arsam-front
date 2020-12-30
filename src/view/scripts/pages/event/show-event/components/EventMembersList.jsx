import React from "react";
import { Avatar, Typography, Tooltip } from 'antd';

const EventMembersList = ({members, maximumNumberOfMembers, isLimitedMember}) =>
{
  const { Title } = Typography;

  function getRandomColor(email) {
  var letters = '0123456789ABCDEF';
  var color = '#';

  if(email.length<6){

    for(var i = 0; i<6; i++ ){
      color += letters[(email.charCodeAt(i%email.length)) % 16];
    }
  }
  else {
    for (var i = 0; i < 6; i++) {
      color += letters[(email.charCodeAt(i)) % 16];
    }
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
          size="large"
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
                    backgroundColor:getRandomColor(member.email),
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
