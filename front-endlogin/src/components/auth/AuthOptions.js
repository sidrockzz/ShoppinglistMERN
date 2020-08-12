import React from 'react';
import {useHistory} from "react-router-dom";

export default function AuthOptions(){
    //Array
    const history = useHistory();

    const register = ()=> history.push("/register");
    const login = ()=> history.push("/login");

    return(
      <nav className={"auth-options"}>
          <button onClick={register}>register</button>
          <button onClick={login}>Log in</button>
      </nav>
    );
}