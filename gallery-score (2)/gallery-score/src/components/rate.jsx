// Importa el hook useState de React para manejar el estado local
import { useState } from "react"
import Estrella from "./estrella";
// Componente funcional Rate
function Rate() {
  // Estado para guardar la calificación seleccionada (de 0 a 5)
  const [raiting, setRaitin] = useState(0)
  // Crea un arreglo de 5 elementos para representar las estrellas
  const starts = Array.from({length: 5}, (_,i)=>(i+1))

  // Retorna el JSX que representa el sistema de calificación
  return (
    // Fragmento vacío para no agregar nodos extra al DOM
    <>
      <div>
        {/* Contenedor de las estrellas */}
        <div className="stars">
          {/* Usa el componente Estrella para cada estrella */}
          {starts.map((star, i) => (
            <Estrella
              key={i}
              active={star <= raiting}
              onClick={() => setRaitin(star)}
              star={star}
            />
          ))}
        </div>
      </div>
    </>
  )
}

// Exporta el componente Rate para que pueda ser usado en otros archivos
export default Rate




