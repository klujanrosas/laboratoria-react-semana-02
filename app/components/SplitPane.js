import React from 'react'
import PropTypes from 'prop-types'

const SplitPane = ({ left, right }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      {left}
      {right}
    </div>
  )
}

SplitPane.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element
}

export default SplitPane
