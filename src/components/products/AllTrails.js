import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Trail from './Trail'
import '../../styles/AllProducts.css'

class AllTrails extends Component {
  render(){
    const {allTrails} = this.props.data
    
    return (!this.props.loading && allTrails ) ? (
      <section className='list'>
        {TrailGrid(allTrails)}
      </section>
    ) : <div>loading</div>
  }
}

const TrailGrid = (allTrails) => (
  <GridList cols={4} cellHeight="auto" >
    <Subheader>Trails</Subheader>
    {allTrails.map(trail =>(
        <GridTile className="tile" key={trail.id}>
          <Trail cartView={false} trail={trail} />
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
      distance
    }
  }
`

export default graphql(ALL_TRAILS_QUERY)(AllTrails)
