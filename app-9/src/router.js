import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom"

import {Home, SignUp, Details} from './comps.js'

export default(
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route  path="/signup" component={SignUp}></Route>
        <Route path="/details" component={Details}></Route>
    </Switch>
)