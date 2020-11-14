import React from 'react';
import {GoogleLogin} from 'react-google-login';
// refresh token
import {refreshTokenSetup} from '../utils/refreshToken';
import {sendGLoginPost} from "../../../../../core/login-signup/gLoginRequest";
import openNotificationWithIcon from "../../../../../core/login-signup/openNotificationWithIcon";
import {useHistory} from 'react-router-dom';

const clientId = '478986072183-a3b3l9p0p8bdn4ghjgr52m4ilu97v6fm.apps.googleusercontent.com';

function GLogin() {
  const history = useHistory();
  const onSuccess = (res) => {
    sendGLoginPost(res.tokenId).then(({data}) => {
      openNotificationWithIcon({history:history, type:"success", desc:false, dur:3});
    }).catch(() => {
      alert("Ran into problem. Please try logging in again!");
    });
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert("Unable to Login. Please try again!");
  };

  return (<div>
    <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} style={{
        marginTop: '100px'
      }}/>
  </div>);
}

export default GLogin;
