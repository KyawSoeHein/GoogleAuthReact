import { autocompleteClasses } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { Navigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const clientId =
    "379185711737-u89oe8tr6cl9ncbpfsm3lft0igr1lg09.apps.googleusercontent.com";

  const responseGoogle = (response: any) => {
    if (!response.error) {
      console.log("response");
      <Navigate to={"/shopping"} replace />;
    }
  };

  return (
    <div
      className="center"
      // style={{
      //   display: "flex",
      //   flex: 1,
      //   justifyContent: "center",
      //   alignSelf: "center",
      // }}
    >
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
