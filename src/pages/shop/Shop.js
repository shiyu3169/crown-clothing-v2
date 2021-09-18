import React, { Component } from "react"
import CollectionPreview from "../../components/collection_preview/CollectionPreview"
import { SHOP_DATA } from "../../constants/shop"

export class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className="shop">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default Shop
