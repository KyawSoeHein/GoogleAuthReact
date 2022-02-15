import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

const Login = () => {
  const clientId =
    "379185711737-rkisb0di7hedmviujghufq14c8vf3qfl.apps.googleusercontent.com";

  const responseGoogle = (response: any) => {
    if (!response.error) {
      console.log(response);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
