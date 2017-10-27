import React from 'react'
import PropTypes from 'prop-types'

const ConBorde = ({ children, borderColor = 'white' }) => {
  return (
    <div style={{
      border: `3px solid ${borderColor}`,
      padding: 10
    }}
    >
      {children}
    </div>
  )
}

ConBorde.propTypes = {
  children: PropTypes.any,
  borderColor: PropTypes.string
}

export default ConBorde
