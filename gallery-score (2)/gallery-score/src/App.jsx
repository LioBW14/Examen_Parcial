// Importa los estilos globales de la aplicación
import './index.css'
// Importa el componente Header (encabezado)
import Header  from './components/header';
// Importa el componente Footer (pie de página)
import Footer from './components/footer';
// Importa el componente MainSection (sección principal de la galería)
import MainSection from './components/mainSection';

// Componente funcional principal App
function App() {
  // Retorna el JSX que representa la estructura principal de la aplicación
  return (
    // Fragmento vacío para no agregar nodos extra al DOM
    <>
      {/* Encabezado de la página */}
      <Header/>
      {/* Sección principal con las imágenes y calificaciones */}
      <MainSection/>
      {/* Pie de página */}
      <Footer/>
    </>
  )
}

// Exporta el componente App para que pueda ser usado en otros archivos
export default App
