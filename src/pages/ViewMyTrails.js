import React, {Component} from 'react'

import MyTrails from '../components/mytrails/MyTrails'
import MyTrailsButton from '../components/mytrails/MyTrailsButton'

import '../styles/buttons.css'

export default class extends Component {
  render(){
    return(
      <main>
        <br/>
        <MyTrails/>
        <br/>
        <MyTrailsButton label="Clear Trails"/>
        {/*<MyTrailsButton label="Checkout"/>*/}
      </main>
    )
  }
}
