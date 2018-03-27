import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import {graphql, compose} from 'react-apollo'
import IconButton from 'material-ui/IconButton'
import AddBox from 'material-ui-icons/AddBox';
import RemoveCircle from 'material-ui-icons/RemoveCircle'
// import RaisedButton from 'material-ui/RaisedButton'

import {ModalButton} from '../buttons'
import UpdateTrail from '../forms/UpdateTrail'

import {user_id} from '../../config/auth'

class Trail extends Component {
  render(){
    const {addToMyTrails, removeFromMyTrails, trail} = this.props
  
    //cart functions
    const AddToMyTrails = async () => {
      await addToMyTrails({variables:{trail_id:trail.id}}).then(r => console.log(r))
      // window.location.replace('/mytrails')
      alert(`${trail.name} has been added to your myTrails list.`)
    }
    const RemoveFromMyTrails = async () => {
      await removeFromMyTrails({variables:{trail_id: trail.id}}).then(r => console.log(r))
      window.location.replace('/mytrails')
    }
    return(
      <Paper className='trail' zDepth={5}>
        <h2>{trail.name}</h2>
        <iframe className="mapFrame" src={trail.mapFrame} title={'Not Available'}/>
        <div>{trail.distance} Miles</div>
      
        {this.props.cartView?
          <div>
            <IconButton onClick={() => RemoveFromMyTrails()}><RemoveCircle/></IconButton>
          </div>
          :
          <span className="buttons">
           <ModalButton label="Update" display={<UpdateTrail trail={trail}/>}/>
            {/*<ModalButton label="Delete" display={DeleteProduct()} color="secondary"/>*/}
          <span className="modal">
               <IconButton onClick={() => AddToMyTrails()}><AddBox/></IconButton>
            </span>
          </span>
        }
      </Paper>
      
    )
  }
}

const ADD_TO_MYTRAILS = gql`
  mutation($user_id:ID!, $trail_id:ID!){
    addTrailToMyTrails(
      user_id: $user_id
      trail_id: $trail_id
    ){
      myTrails{
        id
        trails{
          id
          name
        }
      }
    }
  }
`
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

export default compose(
  graphql(ADD_TO_MYTRAILS,{name:'addToMyTrails', options: () => ({variables:{user_id}})}),
  graphql(REMOVE_FROM_MYTRAILS,{name:'removeFromMyTrails', options: () => ({variables:{user_id}})})
)(Trail)
