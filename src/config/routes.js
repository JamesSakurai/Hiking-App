import React from 'react'
import { Route, Switch } from 'react-router-dom'

import TrailsList from '../pages/TrailsList'
import ViewMyTrails from '../pages/ViewMyTrails'
import HomePage from '../pages/HomePage'
import User from '../pages/User'

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/Trails" component={TrailsList}/>
    <Route path="/MyTrails" component={ViewMyTrails}/>
    <Route exact path="/users/:userID" component={User}/>
  </Switch>
)
