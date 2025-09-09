// Componente funcional Footer
function Footer() {
  // Retorna el JSX que representa el pie de página
  return (
    // Fragmento vacío para no agregar nodos extra al DOM
    <>
      {/* Contenedor principal del footer con clase para estilos */}
      <div className="footerPage">
        {/* Texto de derechos reservados */}
        <p>Todos los derechos reservados</p>
      </div>
    </>
  )
}

// Exporta el componente Footer para que pueda ser usado en otros archivos
export default Footer