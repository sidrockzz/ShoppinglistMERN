import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Card from "react-bootstrap/Card";

export default function Login() {
    const [Unique_ID, setUnique_ID] = useState();
    const [Password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { Unique_ID, Password };
            const loginRes = await Axios.post(
                "http://localhost:5000/users/login",
                loginUser
            );
            //console.log(loginRes.data.user);
            setUserData({
                token: loginRes.data.token,
                user:loginRes.data.user,
            });
            console.log(loginRes.data.user.Type);
            localStorage.setItem("auth-token", loginRes.data.token);
            const userType = loginRes.data.user.Type;
            if(userType==="user")
                history.push("/student");
            else if(userType==="Admin")
                history.push("/admin");
            else
                history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return(
        <div className="page">
            <h2>Log In</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
                        <form className="form" onSubmit={submit}>
                            <label htmlFor="login-email">User ID</label>
                            <input
                                id="login-email"
                                type="text"
                                onChange={(e) => setUnique_ID(e.target.value)}
                            />
                            <label htmlFor="login-password">Password</label>
                            <input
                                id="login-password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input type="submit" value="Log in" />
                        </form>
        </div>
    );
}