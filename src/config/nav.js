import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  render(){
    return(
      <div>
        <div>NAV</div>
        <Link to="/">Home </Link>
        <Link to="/products">Products </Link>
        <Link to="/trails">Trails </Link>
        <Link to="/mytrails">MyTrails</Link>
      </div>
    );
  }
}
