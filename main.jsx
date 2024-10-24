import { createRoot } from "react-dom/client";
import { App } from "./src/App";

// Utilizamos el createRoot para el cual le mandamos el elemento en donde se renderiza nuestra app react
const root = createRoot(document.getElementById("app"));

// Utilizamos el .render para renderizar ahi nuestro componente inicial <App/>
root.render(<App/>);

// NOTA: se debe cambiar la extension del archivo de js -> jsx ya que el render renderiza es jsx
