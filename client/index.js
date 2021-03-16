import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
