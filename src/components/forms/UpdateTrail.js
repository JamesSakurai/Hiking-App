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
      imgURL: props.trail.imgURL,
      distance: props.trail.distance,
      difficulty: props.trail.difficulty,
    }
  }
  render () {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          mapFrame: this.state.mapFrame,
          imgURL: this.state.imgURL,
          distance: this.state.distance,
          difficulty: this.state.difficulty
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
        <TextField floatingLabelText="Trail Image"
                   value={this.state.imgURL}
                   onChange={e => this.setState({ imgURL: e.target.value })}
        />
        <TextField floatingLabelText="Distance"
                   value={this.state.distance}
                   onChange={e => this.setState({ distance: e.target.value })}
                   required
                   type="number"
                   min="0.00" step="0.01" max="100"
        />
        <TextField floatingLabelText="Difficulty"
                   value={this.state.difficulty}
                   onChange={e => this.setState({ difficulty: e.target.value })}
        />
        <RaisedButton label="Update"
                      type="submit"
        />
      </form>
    );
  }
}

const UPDATE_TRAIL_MUTATION = gql`
  mutation($id: ID!, $name:String, $mapFrame:String, $imgURL:String, $distance:Float, $difficulty:String!){
    updateTrail(
      id: $id,
      name: $name,
      mapFrame: $mapFrame,
      imgURL: $imgURL,
      distance: $distance,
      difficulty: $difficulty
    ){
      id
    }
  }
`
export default graphql(UPDATE_TRAIL_MUTATION,
  { options:(props) => ( {variables: {id: props.trail.id}})}
)(UpdateTrail)
