import React from 'react'
import PropTypes from 'prop-types'

const ConBorde = ({ color, children }) => {
  return (
    <div style={{
      border: `solid 3px ${color}`,
      padding: 10,
      margin: 20,
    }}
    >
      {children}
    </div>
  )
}

ConBorde.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node
  ])
}

export default ConBorde
