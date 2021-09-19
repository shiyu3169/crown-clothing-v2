import CollectionOverview from 'components/collection_overview/CollectionOverview'
import Collection from '../collection/Collection.component'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router'
import { firestore, convertCollectionsSnapshotToMap } from 'firebase/firebase'
import { connect } from 'react-redux'
import { updateCollections } from 'redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionWithSpinner = WithSpinner(Collection)

const Shop = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        updateCollections(convertCollectionsSnapshotToMap(snapshot))
        setLoading(false)
      }
    )
    return () => unsubscribeFromSnapshot()
  }, [updateCollections])

  return (
    <div className='shop'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(Shop)
