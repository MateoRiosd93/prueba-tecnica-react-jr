const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

// Nunca recibir un setState como parametro. Esto es mala practica
// Ya que limita de que el service pueda usarse en otros lados

// NOTA. importante que no tenga dependencias de react.
export const getRandomFact = async () => {
  try {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    if (!response.ok) throw new Error("Error fetching fact");
    const data = await response.json();
    const { fact } = data;
    return fact;
  } catch (error) {
    // En el catch solo entra si hay un problema con la peticion.
    console.log(error);
  }
};

// export const getRandomFact = () => {
//     return fetch(CAT_ENDPOINT_RANDOM_FACT)
//       .then((response) => {
//         if (!response.ok) throw new Error("Error fetching fact");
//         return response.json();
//       })
//       .then((data) => {
//         const { fact } = data;
//         return fact;
//       })
//       .catch((error) => {
//         // En el catch solo entra si hay un problema con la peticion.
//         console.log(error);
//       });
//   };

export const getImageToFact = async (threeFirstWords) => {
    const response = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`);
    const data = await response.json();
    const { url } = data;
    return url;
}

// NOTA: Recordar siempre hacer el return del fetch, VSC nos suguiere 
// colocando 3 puntos sobre el nombre de la funcion para volverla asycn await 
// con Ctrl + . nos da la opcion de convertirla en asycn await

// export const getImageToFact = (threeFirstWords) => {
//     return fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
//       .then((response) => response.json())
//       .then((data) => {
//         const { url } = data;
//         return url
//       });
// }
