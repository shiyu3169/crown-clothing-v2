import React from 'react'
import { connect } from 'react-redux'
import { selectShopCollections } from 'redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/collection_preview/CollectionPreview'

const Shop = ({ collections }) => {
  return (
    <div className='shop'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
})

export default connect(mapStateToProps)(Shop)
