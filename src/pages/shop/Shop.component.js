import CollectionOverview from 'components/collection_overview/CollectionOverview'
import Collection from '../collection/Collection.component'
import React, { useEffect } from 'react'
import { Route } from 'react-router'

import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/WithSpinner.component'
import { createStructuredSelector } from 'reselect'
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from 'redux/shop/shop.selectors'
import { fetchCollectionStartAsync } from 'redux/shop/shop.actions'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionWithSpinner = WithSpinner(Collection)

const Shop = ({
  match,
  isCollectionFetching,
  fetchCollections,
  isCollectionLoaded,
}) => {
  useEffect(() => {
    fetchCollections()
  }, [fetchCollections])

  return (
    <div className='shop'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
        )}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
