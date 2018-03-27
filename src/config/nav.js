import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { black } from 'material-ui/styles/colors'
import { ModalButton } from '../components/buttons'
import Login from '../components/forms/Login'
import CreateUser from '../components/forms/CreateUser'

import CustomDrawer from './CustomDrawer'

const styles = {
  color: black
}

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }
  render () {
    const toggleOpen = () => {
      this.setState(() => ({open: (!this.state.open)}))
    }
    return (
      <div>
        <AppBar title="Walk The Wasatch"
                titleStyle={styles}
                onLeftIconButtonClick={toggleOpen}>
          <ModalButton label="Register" display={<CreateUser/>}/>
          <ModalButton label="Login" display={<Login/>}/>
        </AppBar>
        <CustomDrawer open={this.state.open}
                      change={toggleOpen}/>
      </div>
    )
  }
}
