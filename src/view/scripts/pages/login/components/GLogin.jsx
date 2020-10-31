import React from 'react';
import {GoogleLogin} from 'react-google-login';
// refresh token
import {refreshTokenSetup} from '../utils/refreshToken';
import {useHistory} from 'react-router-dom';
import {sendGLoginPost} from "../../../../../core/login-signup/gLoginRequest";

const clientId = '478986072183-a3b3l9p0p8bdn4ghjgr52m4ilu97v6fm.apps.googleusercontent.com';

function GLogin() {
  const history = useHistory();
  const onSuccess = (res) => {
    sendGLoginPost(res.tokenId)
    .then(({data}) => {localStorage.setItem("userToken", data.token);history.replace("/account");})
    .catch(() => {alert("Ran into problem. Could not log you in. Please try again!");});
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert("Unable to Login. Please try again!");
  };

  return (<div>
    <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} style={{
        marginTop: '100px'
      }} isSignedIn={true}/>
  </div>);
}

export default GLogin;
