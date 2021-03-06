import React, {Component} from 'react'
import { ModalButton } from '../components/buttons'

import AllTrails from '../components/trails/AllTrails'
// import CreateProduct from '../components/forms/CreateProduct'
import CreateTrail from '../components/forms/CreateTrail'
// import CreateUser from '../components/forms/CreateUser'

export default class extends Component {
  render () {
    return (
      <div>
        {/*<ModalButton label="Add Product" display={<CreateProduct/>}/>*/}<br/>
        <ModalButton label="Add Trail" display={<CreateTrail/>}/>
        {/*<ModalButton label="Create User" display={<CreateUser/>}/>*/}
        <AllTrails/>
      </div>
    );
  }
}
