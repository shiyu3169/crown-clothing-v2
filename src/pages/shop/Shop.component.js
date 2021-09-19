import React, { useEffect } from 'react'
import { Route } from 'react-router'

import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from 'redux/shop/shop.actions'
import CollectionsOverViewContainer from 'components/collection_overview/CollectionOverview.container'
import CollectionContainer from 'pages/collection/Collection.container'

const Shop = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections()
  }, [fetchCollections])

  return (
    <div className='shop'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverViewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionStartAsync()),
})

export default connect(null, mapDispatchToProps)(Shop)
