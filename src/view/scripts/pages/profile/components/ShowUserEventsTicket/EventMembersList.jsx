import React from "react";
import { Avatar, Typography, Tooltip } from 'antd';

const EventMembersList = ({members}) =>
{

  const { Title } = Typography;

  // function getRandomColor(firstLetter) {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[(firstLetter.charCodeAt(0) * i + 14) % 16];
  //   }
  //   return color;
  // }

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
              <Tooltip title={member} placement="top">
                <Avatar
                  style={{
                    backgroundColor:getRandomColor(member),
                  }}
                >
                  {member.charAt(0)}
                </Avatar>
              </Tooltip>
            );
          })}
        </Avatar.Group>
    </div>
  );
}

export default EventMembersList;
