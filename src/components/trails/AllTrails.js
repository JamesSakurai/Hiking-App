import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import '../../styles/Form.css';

import Trail from './Trail'

class AllTrails extends Component {
  render(){
    const {allTrails} = this.props.data
    
    return (!this.props.loading && allTrails ) ? (
      <section className='list'>
        {TrailGrid(allTrails)}
      </section>
    ) : <div className='loading'>loading...</div>
  }
}

const TrailGrid = (allTrails) => (
  <GridList cols={4} cellHeight="auto" >
    <Subheader>Trails List</Subheader>
    {allTrails.map(trail =>(
        <GridTile key={trail.id}>
          <Trail className="flexItem" cartView={false} trail={trail} />
        </GridTile>
      )
    )}
  </GridList>
)

const ALL_TRAILS_QUERY = gql`
  query{
    allTrails {
      id
      name
      mapFrame
      imgURL
      distance
      difficulty
    }
  }
`

export default graphql(ALL_TRAILS_QUERY)(AllTrails)
