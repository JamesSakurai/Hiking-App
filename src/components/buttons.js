import React, {Component} from 'react'

import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

import '../styles/buttons.css'

export class ModalButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      // primary: true,
      // secondary: false,
    }
  }
  
  // componentWillMount() {
  //   if (this.props.secondary) {
  //     this.setState({primary: false, secondary: true, default: false})
  //   }
  // }
  render() {
    const {label, display} = this.props
    return (
      <span className="modal">
        <FlatButton label={label}
                    // primary={this.state.primary}
                    // secondary={this.state.secondary}
                    onClick={e => this.setState({ open: !this.state.open })}
                    />
        <Dialog
          actions={<FlatButton label='Close' onClick={e => this.setState({open: !this.state.open})}/>}
          open={this.state.open}
          onRequestClose={e => this.setState({open: !this.state.open})}>
          <div>{display}</div>
        </Dialog>
      </span>
    )
  }
}
