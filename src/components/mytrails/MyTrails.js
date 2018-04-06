import React, {Component} from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {GridList, GridTile} from 'material-ui/GridList';
import {user_id} from '../../config/auth'
import Trail from '../trails/Trail'
import Subheader from 'material-ui/Subheader';


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
      
      await this.setState({
        //totalMiles,
        trails: nextProps.data.user.myTrails.trails,
      })
    }
  }
  render(){
    const {user, loading} = this.props.data
    console.log(user)
    return(loading && !user ? <div>loading...</div> :
        <div>
          {user.myTrails.trails === 0 ? <div>No trails saved!</div>:
            <GridList cols={4} cellHeight="auto">
              <Subheader>My Trails</Subheader>
                {this.state.trails.map(t => (
                  <GridTile key={t.id}>
                    <Trail className="flexItem" cartView={true} trail={t} />
                  </GridTile>
                  )
                )}
            </GridList>
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
            imgURL
            distance
            difficulty
          }
        }}}`

export default graphql(USER_MYTRAILS_QUERY,{options:(props) => ({variables:{id: user_id}})})(MyTrails)
