import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class CreateUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  render() {
    const submitUser = async (e) => {
      e.preventDefault()
      let userID = await this.props.mutate( {
          variables: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          }
      })
      // console.log(userID.data.createUser.id)
      window.location.replace(`/users/${userID.data.createUser.id}`)
    }
    return(
      <form className="flexBox"
            onSubmit={submitUser}>
        <h1>Create an Account</h1>
        <TextField placeholder="Name"
                   autoFocus
                   onChange={e => this.setState({ name: e.target.value})}/>
        <TextField placeholder="Email"
                   onChange={e => this.setState({ email: e.target.value})}/>
        <TextField placeholder="Password"
                   type="password"
                   onChange={e => this.setState({ password: e.target.value})}/>
        <RaisedButton type="submit" label="Register"/>
      </form>
    )
  }
}

const CREATE_USER_MUTATION = gql`
  mutation($name: String!, $email: String!, $password: String!){
    createUser(
      name: $name,
      email: $email,
      pw: $password
    ){
      id
    }
  }
`

export default graphql(CREATE_USER_MUTATION)(CreateUser)
