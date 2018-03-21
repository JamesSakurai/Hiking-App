import React, {Component} from 'react'
// import Iframe from 'react-iframe'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'

import {ModalButton} from '../buttons'
import UpdateTrail from '../forms/UpdateTrail'

class Trail extends Component {
  render(){
    const {trail} = this.props
    const DeleteTrail = () => (
      <RaisedButton label="Confirm Delete"
                    onClick={handleClick}
      />
    )
    const handleClick = async (e) => {
      e.preventDefault()
      await this.props.mutate()
      window.location.replace('/trails')
    }
    return(
      <Paper className='trail' zDepth={5}>
        <h2>{trail.name}</h2>
        <iframe className="mapFrame" src={trail.mapFrame} title={'Not Available'}/>
        <div>{trail.distance} Miles</div>
        <ModalButton label="Update" display={<UpdateTrail trail={trail}/>}/>
        <ModalButton label="Delete" display={DeleteTrail()} color="secondary"/>
        <div className="addMyTrails">
        <ModalButton label="+ MyTrails" />
        </div>
      </Paper>
    )
  }
}

const DELETE_TRAIL_MUTATION = gql`
  mutation($id: ID!) {
    deleteTrail(
      id: $id
    ){
      id
    }
  }
`
export default graphql(DELETE_TRAIL_MUTATION,
  {options: (props) => ({variables: {id: props.trail.id}})}
)(Trail)
