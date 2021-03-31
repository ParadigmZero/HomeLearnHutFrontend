import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "../LoginButton/LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={css.Button1} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;