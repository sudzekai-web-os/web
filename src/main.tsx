import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
import { PluginProvider } from './plugins/PluginContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PluginProvider>
        <App />
      </PluginProvider>
    </BrowserRouter>
  </StrictMode>,
)