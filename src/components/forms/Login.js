import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import {login} from '../../config/auth'
import '../../styles/Form.css'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pw: ''
    }
  }
  
  render() {
    return (
      <form className="flexBox"
            onSubmit={async e => {
              e.preventDefault()
              await login(this.state.email, this.state.pw)
      }}>
        <h1>Login</h1>
        <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ email: e.target.value })} />
        <TextField required type='password' floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value})} />
        <RaisedButton label='Login' type='submit' />
      </form>
    )
  }
}
