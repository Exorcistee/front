import './index.css'
import { App } from './App.tsx'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <CssBaseline />
      <App />
    </StrictMode>
  </Provider>
)
