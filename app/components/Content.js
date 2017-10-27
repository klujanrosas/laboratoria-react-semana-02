import React from 'react'
import PropTypes from 'prop-types'

import ConBorde from './ConBorde'

const Content = ({ color, text }) => {
  return (
    <ConBorde color={color}>
      {text}
    </ConBorde>
  )
}

Content.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Content

