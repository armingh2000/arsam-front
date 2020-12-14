import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Modal, Card, Row, Col, Tag, Avatar, Image, Statistic, Button, Spin, Typography, } from 'antd';
import { UserOutlined, MailOutlined, EditOutlined,
    ClockCircleOutlined,
    TrophyOutlined,
    DollarCircleOutlined,
    TeamOutlined,
    SoundOutlined,
    SafetyOutlined,
    FireOutlined,
    KeyOutlined } from '@ant-design/icons';
import EditProfile from './EditUserProfile';
import { updateProfile } from '../../../../../core/api/actions/UserProfileActions';

const { Title } = Typography;
const UserInfo = ({user, status, dispatch}) => {

    const [editProfile, setEditProfile] = useState(false);
    const [changePassword, setChangePassword] = useState(false);

    const handleOk = () => {
        setEditProfile(false);
      };

      const handleCancel = () => {
        setEditProfile(false);
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

    return(
        <div id="components-profile-User-Info">
            <Card>
                <Modal
                title="Edit profile"
                visible={editProfile}
                onOk={handleOk}
                onCancel={handleCancel}>
                <EditProfile/>
                </Modal>
                <Row span={24}>
                    <Col className="image">
                        {user.image ?
                            <Avatar
                            src={<Image src={`data:image/jpeg;base64,${user.image}`} />}
                            size={160}>
                            </Avatar> : <Avatar
                            icon={<UserOutlined />}
                            size={160}>
                            </Avatar>
                        }
                    </Col>
                    <Col className="infoPart">

                    <Row className="info">
                        <Col span={18}>
                            <Title level={4}>{user.firstName} {user.lastName}</Title>
                        </Col>
                        <Button className="editButton" size='small' style={{fontSize:'16px'}}
                        onClick={() => {setEditProfile(true)}}><EditOutlined /></Button>

                        <Button className="editButton" size='small' style={{fontSize:'16px'}}><KeyOutlined /></Button>
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
}

const mapStateToProps = (state) => {
    return{
        user: state.profile.user,
        status: state.status
    }
  }

export default connect(mapStateToProps)(UserInfo);
