import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import {graphql, compose} from 'react-apollo'
import IconButton from 'material-ui/IconButton'
import RemoveCircle from 'material-ui-icons/RemoveCircle'
import RaisedButton from 'material-ui/RaisedButton'
import Dialogs from '../../config/Dialogs'
import AddNotification from '../../config/AddNotification'

import {ModalButton} from '../buttons'
import UpdateTrail from '../forms/UpdateTrail'

import {user_id} from '../../config/auth'

class Trail extends Component {
  render(){
    const {removeFromMyTrails, trail} = this.props
    const DeleteTrail = () => (
      <RaisedButton label="Confirm Delete"
                    onClick={handleClick}
      />
    )
    const handleClick = async (e) => {
      e.preventDefault()
      await this.props.deleteTrail().catch(err => console.log(err))
      window.location.replace('/Trails')
    }
  
    //MyTrails functions
    
    const RemoveFromMyTrails = async () => {
      await removeFromMyTrails({variables:{trail_id: trail.id}}).then(r => console.log(r))
      window.location.replace('/MyTrails')
    }
    console.log(this.props.trail.id)
    return(
      <Paper className='trail' zDepth={3}>
        <Dialogs trail={trail}/>
        <div>Distance: {trail.distance} Miles</div>
          {this.props.cartView?
            <div>
              <IconButton onClick={() => RemoveFromMyTrails()}><RemoveCircle/></IconButton>
            </div>
            :
            <span className="buttons">
             <ModalButton label="Update" display={<UpdateTrail trail={trail}/>}/>
              <ModalButton label="Delete" display={DeleteTrail()} color="secondary"/>
            <span className="modal">
              <AddNotification trail={this.props.trail}/>
            </span>
            </span>
          }
      </Paper>
      
    )
  }
}


const REMOVE_FROM_MYTRAILS = gql`
  mutation($user_id:ID!, $trail_id:ID!){
    removeTrailFromMyTrails(
      user_id: $user_id
      trail_id: $trail_id
    ){
      myTrails {
        id
        trails{
          id
          name
        }
      }
    }
  }
`
const DELETE_TRAIL_MUTATION = gql`
  mutation($id:ID!) {
    deleteTrail(
      id: $id
    ){
      id
    }
  }
`


export default compose(
  graphql(REMOVE_FROM_MYTRAILS,{name:'removeFromMyTrails', options: () => ({variables:{user_id}})}),
  graphql(DELETE_TRAIL_MUTATION,{name:'deleteTrail', options: (props) => ({variables:{id: props.trail.id}})})
)(Trail)
