import {
  sendGLoginPost
} from "../../../../../core/login-signup/gLoginRequest";


export const refreshTokenSetup = (res) => {

  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    // saveUserToken(newAuthRes.access_token);  <-- save new token
    sendGLoginPost(res.tokenId).then(({data}) => {
      localStorage.setItem("userToken", data.token);
    }).catch(() => {
      alert("Ran into problem. Please try logging in again!");
      localStorage.clear();
    });

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};
