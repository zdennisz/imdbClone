import React, { useState } from "react";
import SignInDropDownMenu from "../SignInDropDownMenu/SignInDropDownMenu";
import "./SignIn.css";
const SignIn = (props) => {
  const { userName } = props;

  const signInHandler = () => {
    props.signInHandler();
  };

  return (
    <button className="sign_in_btn" onClick={signInHandler}>
      {userName ? <SignInDropDownMenu userName={userName} /> : "Sign in"}
    </button>
  );
};

export default SignIn;
