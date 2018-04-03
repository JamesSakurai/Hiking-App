import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors'

import { apollo } from './config/apollo'
import Routes from './config/routes'
import Nav from './config/nav'

const App = (
  <div>
    <Nav/>
    <Routes/>
  </div>
)

const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.green700,
    // primary2Color: Colors.indigo700,
    // accent1Color: Colors.redA200,
    // pickerHeaderColor: Colors.darkBlack,
  },
  appBar: {
    height: 80,
  },
});


const AppWrapper = (
  <ApolloProvider client={apollo}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        {App}
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(AppWrapper, document.getElementById('root'))
