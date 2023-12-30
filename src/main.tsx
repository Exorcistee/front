import './index.css'
import { App } from './App.tsx'
import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
)
