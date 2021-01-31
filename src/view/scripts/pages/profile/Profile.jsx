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
    props.dispatch(getUser({id: props.match.params.id, tokenId: localStorage.getItem("userToken")}))
  },
  []);


  console.log("userToken :" + localStorage.getItem("userToken"));
  return (<div id="components-form-profile">
  <Row
    justify="center"
    align="middle">
    <UserInfo user={props.user} status={props.status} changePasswordSuccess={props.changePasswordSuccess}/>
  </Row>
  {props.status==='Success'?<hr width="75%"/>:<div></div>}
  <Row>
    {props.status==='Success'?<UserEventsTickets />:<div></div>}
  </Row>

    </div>
  );
};

const mapStateToProps = (state) => {
  return{
      user: state.profile.user,
      status: state.profile.status,
      changePasswordSuccess: state.profile.changePasswordSuccess
  }
}

const ShowTheLocationWithRouter = withRouter(Profile);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
