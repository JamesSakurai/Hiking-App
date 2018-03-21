import React, {Component} from 'react'
import { ModalButton } from '../components/buttons'

// import CreateProduct from '../components/forms/CreateProduct'
// import CreateTrail from '../components/forms/CreateTrail'
import CreateUser from '../components/forms/CreateUser'
import Login from '../components/forms/Login'

export default class extends Component {
  render () {
    return (
      <div>
        <nav>
          {/*<ModalButton label="Add Product" display={<CreateProduct/>}/>*/}
          {/*<ModalButton label="Add Trail" display={<CreateTrail/>}/>*/}
          <ModalButton label="Create User" display={<CreateUser/>}/>
          <ModalButton label="Login" display={<Login/>}/>
        </nav>
        <main>
          <h1>Welcome to Walk The Wasatch</h1>
        </main>
      </div>
    );
  }
}

