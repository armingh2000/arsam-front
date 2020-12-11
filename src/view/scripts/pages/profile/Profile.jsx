import React, { useEffect } from "react";
import ProfileForm from "./components/ProfileForm";
import UserInfo from "./components/UserProfile";
import {Row, Col} from 'antd';
import { connect } from "react-redux";
import { getUser } from '../../../../core/api/actions/UserProfileActions';
import { withRouter } from "react-router";
import UserEventsTickets from "./components/UserProfile-Events-Ticket";


const Profile = (props) =>
{

  useEffect(() => {
    props.dispatch(getUser({email: props.match.params.email, tokenId: localStorage.getItem("userToken")}))
  },
  []);

  console.log("userToken :" + localStorage.getItem("userToken"));
  return (
    <div id="components-form-profile">

      <Row
        justify="center"
        align="middle">
        <UserInfo/>
      </Row>

      <Row>
        <UserEventsTickets />
      </Row>

      <Row
      style={{
          minHeight: '100vh'
      }}
      justify="center" align="middle">
        <Col span={16}>
          <ProfileForm />
        </Col>
      </Row>

    </div>
  );
};

const mapStateToProps = (state) => {
  return{
      user: state.profile.user
  }
}

const ShowTheLocationWithRouter = withRouter(Profile);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
