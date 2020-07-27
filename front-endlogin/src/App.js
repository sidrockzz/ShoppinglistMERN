import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./components/pages/Home"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

export default function App(){
    return <div>
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/register"} component={Register}/>
            </Switch>
        </Router>
    </div>;
}