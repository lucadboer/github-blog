import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import './styles/global.css'
import 'animate.css'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
