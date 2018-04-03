import React, {Component} from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import {user_id} from '../../config/auth'
import Trail from '../products/Trail'

class MyTrails extends Component {
  constructor(props){
    super(props)
    this.state = {
      myTrails: {},
      totalMiles: 0,
      trails: []
    }
  }
  async componentWillReceiveProps(nextProps){
  
    //check loading and data
    if(!nextProps.data.loading && nextProps.data.user.myTrails.trails){
      // console.log(nextProps.data.user)
      //calculate totals
      
      // let subtotal = 0
      // await trails.map(p => subtotal = subtotal + (p.price*p.quantity))
      // const tax = await subtotal*.08
      // const totalMiles = await tax + subtotal
        //const myTrails = user.myTrails
        //const miles = [myTrails.trails.distance.map]
      // const totalMiles = miles.reduce((total, amount) => total + amount);
        //const totalMiles = (accumulator, currentValue) => accumulator + currentValue;
        //console.log(miles.reduce(totalMiles));
        
      //set state once with totals and products
      await this.setState({
        //totalMiles,
        trails: nextProps.data.user.myTrails.trails,
      })
    }
  }
  render(){
    const {user, loading} = this.props.data
    console.log(user)
    // alert(loading)
    // alert(user)
    return(loading && !user ? <div>loading...</div> :
        <div>
          {user.myTrails.trails === 0 ? <div>No trails saved!</div>:
            <div>
              <subheader>My Trails</subheader>
              <section>
                {this.state.trails.map(t => {
                  console.log(t)
                  return <Trail cartView={true} trail={t} key={t.id} />
                })}
              </section>
              <section>
                {/*<div>subtotal:{subtotal}</div>*/}
                {/*<div>tax:{tax}</div>*/}
                {/*<div>total:{total}</div>*/}
              </section>
            </div>
          }
        </div>
    )
  }
}
const USER_MYTRAILS_QUERY = gql`
  query($id: ID!){
    user(id:$id){
      myTrails{
        trails{
            id
            name
            mapFrame
            distance
          }
        }}}`

export default graphql(USER_MYTRAILS_QUERY,{options:(props) => ({variables:{id: user_id}})})(MyTrails)
