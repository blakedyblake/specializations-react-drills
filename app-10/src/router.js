import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Product from './Product'
import Details from './Details'
export default(
    <Switch>
        <Route component= {Product} exact path={"/"}></Route>
        <Route component={Details} path={"/details/:id"}></Route>
    </Switch>
)