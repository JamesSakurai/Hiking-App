import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.data.loading){
      return this.setState({
        name: nextProps.data.user.name,
        email: nextProps.data.user.email
      })
    }
  }
  render() {
    return (
      <div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/Trails">Trails</Link></button>
        <h1>Welcome Back {this.state.name}</h1>
      </div>
    );
  }
}

const USER_QUERY = gql`
  query($id: ID!){
    user (
      id: $id
    ){
      id
      name
      email
    }
  }
`

export default graphql(USER_QUERY, {
  options: ({match}) => (
    {variables: { id: match.params.userID }}
  )
})(User)
