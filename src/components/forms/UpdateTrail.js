import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class UpdateTrail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.trail.name,
      mapFrame: props.trail.mapFrame,
      distance: props.trail.distance
    }
  }
  render () {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          mapFrame: this.state.mapFrame,
          distance: this.state.distance
        }
      })
      window.location.replace('/trails')
    }
    return (
      <form className="flexBox"
            onSubmit={handleSubmit}>
        <h3>Update Trail</h3>
        <TextField floatingLabelText="Name"
                   value={this.state.name}
                   onChange={e => this.setState({ name: e.target.value })}
                   required
        />
        <TextField floatingLabelText="Map iFrame"
                   value={this.state.mapFrame}
                   onChange={e => this.setState({ mapFrame: e.target.value })}
        />
        <TextField floatingLabelText="Distance"
                   value={this.state.distance}
                   onChange={e => this.setState({ distance: e.target.value })}
                   required
                   type="number"
                   min="0.00" step="0.01" max="100"
        />
        <RaisedButton label="Create"
                      type="submit"
        />
      </form>
    );
  }
}

const UPDATE_TRAIL_MUTATION = gql`
  mutation($id: ID!, $name:String, $mapFrame:String, $distance:Float){
    updateTrail(
      id: $id,
      name: $name,
      mapFrame: $mapFrame,
      distance: $distance
    ){
      id
    }
  }
`
export default graphql(UPDATE_TRAIL_MUTATION,
  { options:(props) => ( {variables: {id: props.trail.id}})}
)(UpdateTrail)
