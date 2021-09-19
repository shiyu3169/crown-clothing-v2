import React from 'react'
import MenuItem from '../menu_item/MenuItem'
import { createStructuredSelector } from 'reselect'
import './Directory.scss'
import { selectDirectorySections } from 'redux/directory/directory.selectors'
import { connect } from 'react-redux'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
