import React, {Component} from 'react'

import MyTrails from '../components/mytrails/MyTrails'
import MyTrailsButton from '../components/mytrails/MyTrailsButton'

export default class extends Component {
  render(){
    return(
      <main>
        <br/>
        <MyTrailsButton label="Clear Trails"/>
        <MyTrails/>
        {/*<MyTrailsButton label="Checkout"/>*/}
      </main>
    )
  }
}
