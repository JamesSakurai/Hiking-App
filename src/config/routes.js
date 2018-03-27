import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductsList from '../pages/ProductsList'
import TrailsList from '../pages/TrailsList'
import ViewMyTrails from '../pages/ViewMyTrails'
import HomePage from '../pages/HomePage'
import TrailPage from '../pages/TrailPage'
import User from '../pages/User'

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/Products" component={ProductsList}/>
    <Route path="/Trails" component={TrailsList}/>
    <Route path="/MyTrails" component={ViewMyTrails}/>
    <Route path="/TrailPage" component={TrailPage}/>
    <Route exact path="/users/:userID" component={User}/>
  </Switch>
)
