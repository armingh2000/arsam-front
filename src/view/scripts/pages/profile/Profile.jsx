import React, { useEffect } from "react";
import ProfileForm from "./components/ProfileForm";
import UserInfo from "./components/UserProfile";
import {Row, Col, Button} from 'antd';
import { connect } from "react-redux";
import { getUser } from '../../../../core/api/actions/UserProfileActions';
import { withRouter } from "react-router";
import UserEventsTickets from "./components/UserProfile-Events-Ticket";
import LogoutButton from "./components/LogoutButton";



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

        <LogoutButton />
        <UserEventsTickets />
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
