import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

export const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectPreviewCollections = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.values(collections) : [])
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections?.[collectionUrlParam]
  )
)
