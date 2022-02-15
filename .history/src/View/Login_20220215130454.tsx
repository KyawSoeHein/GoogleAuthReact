import { autocompleteClasses } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const clientId =
    "379185711737-u89oe8tr6cl9ncbpfsm3lft0igr1lg09.apps.googleusercontent.com";

  const navigate = useNavigate();

  const responseGoogle = (response: any) => {
    if (!response.error) {
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <div className="center">
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
