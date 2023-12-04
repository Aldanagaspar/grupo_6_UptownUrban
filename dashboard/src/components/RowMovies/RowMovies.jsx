import Card from "./Card/Card";

function RowMovies() {
  const listado = [
    {
      titulo: "Movies in Data Base",
      cifra: 21,
      color: "primary",
      
      config: {
        nombre: "tarjeta especial"
      }
    },
    {
      
      cifra: 79,
      color: "success",
      icono: "fas fa-award fa-2x",
      config: {
        nombre: "tarjeta especial"
      }
    },
    {
      titulo: "Actors quantity",
      cifra: 49,
      icono: "fas fa-user fa-2x",
      
    }
  ]
  return (
    <div className="row">

      {
        Array.isArray(listado) && listado.map((movie, i) => <Card key={i+movie.titulo} titulo={movie.titulo} cifra={movie.cifra} color={movie.color} icono={movie.icono} config={movie.config} />)
      }

    </div>
  )
}

export default RowMovies;