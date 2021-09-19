import CollectionPreview from 'components/collection_preview/CollectionPreview'
import React from 'react'
import { connect } from 'react-redux'
import { selectShopCollections } from 'redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import './CollectionOverview.scss'

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
})

export default connect(mapStateToProps)(CollectionOverview)
