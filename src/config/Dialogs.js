import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
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
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Add To MyTrails"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    
    return (
      <div>
        <RaisedButton label={trail.name} onClick={this.handleOpen} />
        <Dialog
          title={trail.name}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <iframe className="mapFrame" src={trail.mapFrame} title={'Not Available'}/>
          <div>Distance: {trail.distance} Miles</div>
        </Dialog>
      </div>
    );
  }
}
