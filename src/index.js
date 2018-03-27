import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import { ModalButton } from './components/buttons'

import Login from './components/forms/Login'


import { apollo } from './config/apollo'
import Routes from './config/routes'
import Nav from './config/nav'

const App = (
  <div>
    <AppBar title="Walk The Wasatch"
    iconClassNameRight="muidocs-icon-navigation-expand-more">
      <ModalButton label="Login" display={<Login/>}/>
      <Nav/>
    </AppBar>
    <Routes/>
  </div>
)

const AppWrapper = (
  <ApolloProvider client={apollo}>
    <MuiThemeProvider>
      <Router>
        {App}
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))
