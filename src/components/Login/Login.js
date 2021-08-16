import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

export default function Login() {
  const [state, dispatch] = useStateValue();
  const SignIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <img
          src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={SignIn}>
        Sign In
      </Button>
    </div>
  );
}
