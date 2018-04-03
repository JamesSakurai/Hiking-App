import React, {Component} from 'react'
import { ModalButton } from '../components/buttons'

import AllProducts from '../components/products/AllProducts'
import CreateProduct from '../components/forms/CreateProduct'
// import CreateTrail from '../components/forms/CreateTrail'
// import CreateUser from '../components/forms/CreateUser'
// import Login from '../components/forms/Login'

export default class extends Component {
  render () {
    return (
      <div>
        <ModalButton label="Add Product" display={<CreateProduct/>}/>
        {/*<ModalButton label="Add Trail" display={<CreateTrail/>}/>*/}
        {/*<ModalButton label="Create User" display={<CreateUser/>}/>*/}
        {/*<ModalButton label="Login" display={<Login/>}/>*/}
        <AllProducts/>
      </div>
    );
  }
}
