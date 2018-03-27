import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'
import {user_id} from '../../config/auth'

class MyTrailsButton extends Component {
  render(){
    return(
      <RaisedButton
        label={this.props.label}
        onClick={() => {
          this.props.mutate()
          window.location.replace('/mytrails')
        }} />
    )
  }
}

const CLEAR_MYTRAILS_MUTATION = gql`
  mutation($user_id:ID!){
    clearMyTrails(
      user_id: $user_id
    ){
      myTrails {
        id
        trails{
          id
        }
      }
    }
  }
`

export default graphql(CLEAR_MYTRAILS_MUTATION,{options:(props)=>({variables:{user_id}})})(MyTrailsButton)
