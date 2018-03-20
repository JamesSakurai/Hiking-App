import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class CreateTrail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      mapFrame: '',
      distance: ''
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
      // this.context.history.push('/')
      window.location.replace('/trails')
      // console.log(this.state.name, this.state.imgURL, this.state.desc, this.state.price)
    }
    return (
      <form className="flexBox"
            onSubmit={handleSubmit}>
        <h3>Create Trail</h3>
        <TextField floatingLabelText="Name"
                   onChange={e => this.setState({ name: e.target.value })}
                   required
        />
        <TextField floatingLabelText="Map iFrame"
                   onChange={e => this.setState({ mapFrame: e.target.value })}
        />
        <TextField floatingLabelText="Distance"
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

const CREATE_TRAIL_MUTATION = gql`
  mutation($name:String!, $mapFrame:String!, $distance:Float!){
    createTrail(
      name: $name,
      mapFrame: $mapFrame,
      distance: $distance
    ){
      id
    }
  }
`
export default graphql(CREATE_TRAIL_MUTATION)(CreateTrail)
