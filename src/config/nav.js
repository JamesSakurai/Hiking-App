import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { black } from 'material-ui/styles/colors'
import { ModalButton } from '../components/buttons'
import Login from '../components/forms/Login'
import { logout, isAuthenticated } from '../config/auth'
import CreateUser from '../components/forms/CreateUser'
import '../styles/Form.css'




import CustomDrawer from './CustomDrawer'

const styles = {
  color: black,
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Arial'
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
          {isAuthenticated()?
            
            <button className="logoutButton" onClick={logout} >Logout</button>
            :
            [
              <ModalButton label="Register" secondary={true} display={<CreateUser/>}/>,
              <ModalButton label="Login" display={<Login/>}/>
            ]
            }
        </AppBar>
        <CustomDrawer open={this.state.open}
                      change={toggleOpen}/>
      </div>
    )
  }
}
