import './CollectionPreview.scss'

import React from 'react'
import CollectionItem from '../collection_item/CollectionItem'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const CollectionPreview = ({ match, title, items }) => {
  return (
    <div className='collection-preview'>
      <Link to={`${match.path}/${title.toLowerCase()}`} className='title'>
        {title.toUpperCase()}
      </Link>
      <div className='preview'>
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
