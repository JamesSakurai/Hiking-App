import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import '../styles/buttons.css'

export default class extends Component {
  render(){
    return(
      <div className="nav">
        <div>NAV</div>
        <div className="navLink">
          <Link to="/">Home </Link>
          <Link to="/products">Products </Link>
          <Link to="/trails">Trails </Link>
          <Link to="/mytrails">MyTrails</Link>
        </div>
      </div>
    );
  }
}
