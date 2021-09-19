import CollectionOverview from 'components/collection_overview/CollectionOverview'
import Collection from '../collection/Collection'
import React from 'react'
import { Route } from 'react-router'

const Shop = ({ match }) => {
  return (
    <div className='shop'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop
