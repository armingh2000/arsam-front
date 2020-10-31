import React from 'react';
import {GoogleLogout} from 'react-google-login';
import {useHistory} from 'react-router-dom';

const clientId = '478986072183-a3b3l9p0p8bdn4ghjgr52m4ilu97v6fm.apps.googleusercontent.com';

function GLogout() {

  const history = useHistory();

  const onSuccess = () => {
    history.replace("/");
    alert("Successfully logged Out");
    localStorage.clear();
  };

  return (<div>
    <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess}></GoogleLogout>
  </div>);
}

export default GLogout;
