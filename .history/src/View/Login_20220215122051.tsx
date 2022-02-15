import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

const Login = () => {
  const clientId =
    "379185711737-u89oe8tr6cl9ncbpfsm3lft0igr1lg09.apps.googleusercontent.com";

  const responseGoogle = (response: any) => {
    if (!response.error) {
      console.log(response);
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Login;
