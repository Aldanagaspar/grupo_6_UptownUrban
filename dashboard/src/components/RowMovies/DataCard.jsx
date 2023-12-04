import Card from "./Card/Card";

function RowMovies() {
  const listado = [
    {
      titulo: "Productos totales",
      cifra: '???',
      icono: "fas fa-tshirt fa-2x"
    },
    {
      titulo: "Usuarios registrados",
      cifra: '???',
      icono: "fas fa-user fa-2x",
    }
  ]
  return (
    <div className="row flex justify-content-center">

      {
        Array.isArray(listado) && listado.map((movie, i) => <Card key={i+movie.titulo} titulo={movie.titulo} cifra={movie.cifra} color={movie.color} icono={movie.icono} config={movie.config} />)
      }

    </div>
  )
}

export default RowMovies;