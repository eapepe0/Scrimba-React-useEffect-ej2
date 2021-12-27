import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  console.log("Componente renderizado");

  /*   React.useEffect(function () {
    // la funcion corre cuando se renderiza el componente
    // si tiene un solo parametro
    // corre cada vez que se renderiza el componente
    // si se hace click en el boton Add , se vuelve a renderizar y corre la funcion
    console.log("corre = Effect =");
  }); */

  /* React.useEffect(function () {
    // la funcion corre cuando se renderiza el componente
    // si tiene un solo parametro
    // corre cada vez que se renderiza el componente
    // si se hace click en el boton Add , se vuelve a renderizar y corre la funcion
    console.log("corre = Effect =");
  }, []); // si aca ponemos nada , corre la funcion solamente una vez cuando se renderiza por primera vez
   */

  React.useEffect(
    function () {
      // la funcion corre cuando se renderiza el componente
      // si tiene un solo parametro
      // corre cada vez que se renderiza el componente
      // si se hace click en el boton Add , se vuelve a renderizar y corre la funcion
      console.log("corre = Effect =");
    },
    [count] // corre la funcion cada vez que cambia el valor de count , se llama dependecy
  );

  return (
    <div>
      <h2>La cuenta es {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}
