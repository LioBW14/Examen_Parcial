// Importa StrictMode para ayudar a detectar problemas en la aplicación
import { StrictMode } from 'react'
// Importa createRoot para renderizar la aplicación en el DOM
import { createRoot } from 'react-dom/client'
// Importa los estilos globales
import './index.css'
// Importa el componente principal de la aplicación
import App from './App.jsx'

// Renderiza la aplicación en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
  // StrictMode ayuda a identificar problemas potenciales en el desarrollo
  <StrictMode>
    {/* Renderiza el componente principal App */}
    <App />
  </StrictMode>,
)
