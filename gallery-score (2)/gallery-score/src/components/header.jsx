// Componente funcional Header
function Header() {
  // Retorna el JSX que representa el encabezado de la página
  return (
    // Fragmento vacío para no agregar nodos extra al DOM
    <>
      {/* Contenedor principal del header con clase para estilos */}
      <div className="pageName">
        {/* Título principal de la galería */}
        <h1>Mi galería de imagenes preferida</h1>
      </div>
    </>
  )
}

// Exporta el componente Header para que pueda ser usado en otros archivos
export default Header