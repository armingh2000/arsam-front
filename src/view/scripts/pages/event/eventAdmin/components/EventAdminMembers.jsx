import React from "react";
import {
  Card,
  Typography,
  Avatar,
  Row,
  Col
} from "antd";


const EventAdminMembers = ({members}) =>
{

  const {Text} = Typography;

  function getRandomColor(firstLetter) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[(firstLetter.charCodeAt(0) * i + 14) % 16];
    }
    return color;
  }

  const { Meta } = Card;

  return (<div style={{width:"90%", margin:"20px auto"}}>
            <Row gutter={[10,10]}>
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
                              height: 50,
                              width: 50
                            }}
                          >
                            {member.email.charAt(0)}
                          </Avatar>
                        }
                        title="Role"
                        description={member.email}
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
  );
}

export default EventAdminMembers;
