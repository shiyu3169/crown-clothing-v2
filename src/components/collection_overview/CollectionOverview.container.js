import WithSpinner from '../../components/with-spinner/WithSpinner.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from 'redux/shop/shop.selectors'
import { compose } from 'redux'
import CollectionOverview from './CollectionOverview.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionsOverViewContainer
