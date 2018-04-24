import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {user_id} from './auth'

class AddNotification extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  
  
  render() {
    const {addToMyTrails, trail} = this.props
    const AddToMyTrails = async () => {
      this.setState({
        open: true,
      });
      await addToMyTrails({variables:{trail_id:trail.id}}).then(r => console.log(r))
    };
    return (
      <div>
        <FlatButton
          onClick={() => AddToMyTrails()}
          label="+ MyTrails"
        />
        <Snackbar
          open={this.state.open}
          message={`${trail.name} Added to MyTrails`}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
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
export default(
  graphql(ADD_TO_MYTRAILS,{name:'addToMyTrails', options: () => ({variables:{user_id}})})
)(AddNotification)
