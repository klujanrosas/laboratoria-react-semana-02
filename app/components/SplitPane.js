import React from 'react'
import PropTypes from 'prop-types'

import DebugComponent from './DebugComponent'

const SplitPane = ({ left, right }) => {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
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
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired
}

export default DebugComponent(SplitPane)
