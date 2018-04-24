import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import '../styles/Form.css'

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

export default class extends Component {
  state = {
    open: false,
  };
  
  handleOpen = () => {
    this.setState({open: true});
  };
  
  handleClose = () => {
    this.setState({open: false});
  };
  
  render() {
    const {trail} = this.props
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
      
    ];
    
    return (
      <div onClick={this.handleOpen} >
        <a className="trailName">{trail.name}</a>
        <img className="imgURL" src={trail.imgURL} alt="not available"/>
        <Dialog
          title={trail.name}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <div className="detailContainer">
            <div className="detailItem">
              <iframe className="mapFrame" src={trail.mapFrame} title={'Not Available'}/>
            </div>
            <div className="detailItem">
              <div>Distance: {trail.distance} Miles</div>
              <div>Difficulty: {trail.difficulty}</div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
