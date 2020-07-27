import React from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from "./components/pages/Home"

export default function App(){
    return <div>
        <Router>
            <Switch>
                <Route path={"/"} component={Home}/>
            </Switch>
        </Router>
    </div>;
}