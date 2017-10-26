import React from 'react'
import PropTypes from 'prop-types'

const DebugComponent = (ComponenteADebugear) => {
  return (props) => {
    console.log('Soy un HOC que loggea props :D', props)
    return <ComponenteADebugear {...props} />
  }
}

DebugComponent.propTypes = {
  ComponenteADebugear: PropTypes.element.isRequired
}

export default DebugComponent
