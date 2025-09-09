// Importa las imágenes que se mostrarán en la galería
import foto1 from "../assets/invierno.jpg";
import foto2 from "../assets/otonio.jpg";
import foto4 from "../assets/verano.jpg";
import foto3 from "../assets/primavera.jpg";
// Importa el componente Rate para calificar las imágenes
import Rate from "./rate";

// Componente funcional MainSection
function MainSection() {
  // Arreglo con las imágenes a mostrar
  const images = [foto1, foto2, foto3, foto4];

  // Retorna el JSX que representa la sección principal de la galería
  return (
    // Fragmento vacío para no agregar nodos extra al DOM
    <>
      {/* Contenedor principal de la sección */}
      <div className="mainSection">
        {/* Recorre el arreglo de imágenes y genera una tarjeta para cada una */}
        {images.map((img, i) => (
          <div className="scoreCard" key={i}>
            {/* Muestra la imagen */}
            <img src={img} alt="imagen" />
            {/* Componente para calificar la imagen */}
            <Rate />
          </div>
        ))}
      </div>
    </>
  );
}

// Exporta el componente MainSection para que pueda ser usado en otros archivos
export default MainSection;
