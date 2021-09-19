import WithSpinner from '../../components/with-spinner/WithSpinner.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from 'redux/shop/shop.selectors'
import { compose } from 'redux'
import Collection from './Collection.component'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionContainer
