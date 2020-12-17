import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import ErrorPic from '../Image/right.png'
import WelcomePic from '../Image/welcome.png'
import {useHistory} from 'react-router-dom';
import { message, Card, Row, Col, Tag, Avatar, Image, Statistic, Button, Spin, Typography, Dropdown, Menu } from 'antd';
import { UserOutlined, MailOutlined, EditOutlined,
    SettingOutlined,
    TrophyOutlined,
    DollarCircleOutlined,
    TeamOutlined,
    SoundOutlined,
    SafetyOutlined,
    FireOutlined,
    KeyOutlined,
    LogoutOutlined} from '@ant-design/icons';
import EditProfile from './EditUserProfile';
import ChangePasswrod from './ChangePasswrod';
import LogoutButton from './LogoutButton'

const { Title } = Typography;
const UserInfo = ({user, status, changePasswordSuccess}) => {

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    const handleOk = () => {
        setEditProfile(false);
      };

      const handleCancel = () => {
        setEditProfile(false);
      };

    const handleOkPass = () => {
        setChangePassword(false);
    };

    const handleCancelPass = () => {
        setChangePassword(false);
    };

    const changeFields = (fields) => {
        switch(fields){
            case 1:
            return <Tag color="magenta"><TrophyOutlined /> Race</Tag>;
          case 2:
            return <Tag color="gold"><SafetyOutlined /> Performance</Tag>;
          case 4:
            return <Tag color="purple"><SoundOutlined /> Conference</Tag>;
          case 8:
            return <Tag color="red"><DollarCircleOutlined /> Fundraiser</Tag>;
          case 16:
            return <Tag color="blue"><FireOutlined /> Festival</Tag>;
          case 32:
            return <Tag color="green"><TeamOutlined /> Social Event</Tag>;
          default:
            return null;
        }
    }
    const history = useHistory();
    function logout() {
        localStorage.clear();
        history.replace("/");
        message.success("Successfully logged out")
    }
    const handleMenuClick = (e) => {
        
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1">
          <Button type="link" style={{color:'black'}} className="editButton" onClick={() => {setChangePassword(true)}}><KeyOutlined /> Change Passwrod</Button>
          </Menu.Item>
          <Menu.Item key="2">
          <LogoutButton></LogoutButton>
          </Menu.Item>
         
        </Menu>
      );

    switch (status) {
        case 'Success':
            return(
                <div id="components-profile-User-Info">
                <Card>
                       <EditProfile visible={editProfile} 
                       handleCancel={handleCancel} 
                       handleOk={handleOk}
                       user={user}></EditProfile>
                       <ChangePasswrod visible={changePassword}
                       handleCancel={handleCancelPass}
                       handleOk={handleOkPass}
                       changePasswordSuccess={changePasswordSuccess}></ChangePasswrod>
                       <Row span={24}>
                           <Col className="image">
                               {user.image ? 
                                   <Avatar
                                   src={<Image src={`data:image/jpeg;base64,${user.image}`} />}
                                   size={180} style={{lineHeight:'150px'}}>
                                   </Avatar> : <Avatar
                                   icon={<UserOutlined />}
                                   size={180} style={{lineHeight:'150px'}}>
                                   </Avatar>
                               }
                           </Col>
                           <Col className="infoPart">
       
                           <Row className="info">
                               <Col span={15}>
                                   <Title level={4}>{user.firstName} {user.lastName}</Title>
                               </Col>
                               <Button className="editButton" size='small' style={{fontSize:'14px'}}
                               onClick={() => {setEditProfile(true) }}><EditOutlined />Edit profile</Button>
                               <Dropdown overlay={menu}>
                               <Button size='small' style={{fontSize:'14px'}}>
                               <SettingOutlined />
                               </Button>
                             </Dropdown>
                               
                               
                               
                           </Row>
       
                           <Row>
                           <Col span={8}
                           className="statics">
                               <Statistic title="Created Events" value={user.createdEvents.length} />
                           </Col>
                           <Col  span={8}
                           className="statics">
                               <Statistic title="In Events" value={user.inEvents.length} />
                           </Col>
                           
                           </Row>
                           
                           <Row className="info">
                                   {user.description}
                           </Row>
                           <Row className="info">
                               <h3 style={{marginRight:'2%'}}>Fields: </h3>
                               <Col>
                                   {user.fields.map((fields) => {
                                       return(changeFields(fields))
                                   })}
                               </Col>
                           </Row>
                           <Row className="info">
                               <Col style={{fontSize:'16px'}} span={2}><MailOutlined/></Col>
                               <Col>
                               <a>{user.email}</a>
                               </Col>
                           </Row>
                           </Col>
                       </Row>
       
                   </Card>
               </div>
           )
        case 'Loading':
            return (
                <div style={{marginTop: '10%'}}><Spin size='large'></Spin></div>
            )
        case 'Error':
            return (
                <div id="components-profile-User-Info" >
                    <Card
                    >

                        <div >
                        <Row
                        justify="center" align="middle"
                        level={1}
                        ><Title justify='center'>Whoops!</Title></Row>
                        <Row>
                        <Image src={WelcomePic}
                            height='40vh'
                            width='30vh'/>
                            <Col span={10}><Row 
                            
                            style={{margin:'3%'}}
                            justify="center" align="middle">
                            
                            <Title level={4}>Something went wrong!</Title> 
                            <Title level={4}>I think your're lost! </Title>
                            
                            </Row>
                           </Col>
                            </Row>
                            
                            <Row 
                            justify="center" align="middle">
                            <Col offset={10}>
                           <Button onClick={() => window.location.reload(false)}>Refresh Page</Button></Col>
                            <Image src={ErrorPic} height='200px' width='320px' style={{marginBottom:'8%'}}/></Row>
                            
                        </div>
                            
                    </Card>
                    
                </div>
            )
    
        default:
            return(
                <div></div>
            )
    }
}



export default connect()(UserInfo)
