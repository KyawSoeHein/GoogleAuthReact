import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

const Login = () => {
  const clientId =
    "379185711737-a9ht5dg14q2v1ehq7nn1rp62fqpfo19u.apps.googleusercontent.com";

  const responseGoogle = (response: any) => {
    console.log(response);
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
