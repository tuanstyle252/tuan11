import React from "react";
import {Route, Switch} from 'react-router-dom'
import Home from "./core/Home";
// import Signup from "./users/Signup";
import signin from "./users/signin";
import signup from "./users/signup";
const Mainrouter = () =>(
    <div>
        <Switch>
            <Route path='/signin' component={signin} />
            <Route path='/signup' component={signup}/>
            <Route path='/' component={Home}/>
        </Switch>
    </div>
);

export default Mainrouter;