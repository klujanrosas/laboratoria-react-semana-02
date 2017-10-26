import React from 'react'

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

export default SplitPane
