import { createRoot } from 'react-dom/client'

// Components 
import App from './App'

// Styles
import './global.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <App />
)