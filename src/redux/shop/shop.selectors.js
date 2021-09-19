import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

export const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
)
