import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

export const App = () => {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  // NOTA: Con axios, utilizariamos un try y catch. con el fetch el catch solo atrapa en caso de un error con la peticion

  const handleClick = () => refreshFact();

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {/* Renderizado condicional */}
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
};
