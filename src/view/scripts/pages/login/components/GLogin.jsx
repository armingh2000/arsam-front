import React from 'react';
import {GoogleLogin} from 'react-google-login';
// refresh token
import {refreshTokenSetup} from '../utils/refreshToken';
import {sendGLoginPost} from "../../../../../core/login-signup/gLoginRequest";
import {useHistory} from 'react-router-dom';

const clientId = '954565604142-p1jfaq5vjiv53trikffe58q6qpphgc52.apps.googleusercontent.com';

function GLogin() {
  const history = useHistory();
  const onSuccess = (res) => {
      sendGLoginPost(res.tokenId).then(({data}) => {
          console.log("glog");
          localStorage.setItem("userToken", data.token);
          localStorage.setItem("userId", data.id);
          localStorage.setItem("g", true);
          console.log("glog");
          history.replace(`/profile/${data.id}`);

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
