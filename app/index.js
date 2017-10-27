import React from 'react'
import { render } from 'react-dom'

import './styles/base.css'

import SplitPane from './components/SplitPane'
import Content from './components/Content'


const App = () => (
  <div className="title">
    <SplitPane
      left={<Content color="red" text="Componente Izquierda" />}
      right={<Content color="green" text="Componente Derecha" />}
    />
  </div>
)

render(
  <App />,
  document.getElementById('root')
)
