import FotoProducto from '../../assets/images/producto-ejemplo.webp'
import FotoUsuario from '../../assets/images/usuario-ejemplo.jpg'
import Card from './Card/Card';
import GenreCard from './GenreCard/GenreCard';

function ContentRow() {

  const genres = [
    "Accion",
    "Aventura",
    "Comedia",
    "Drama",
    "Terror",
    "Documental",
    "Infantiles"
  ]


  return (
    <div className="row">
      <Card title={"Último producto registrado"}>

        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mb-6 w-50 mx-auto" style={{ width: '40rem' }} src={FotoProducto} alt=" Star Wars - Mandalorian " />
        </div>
        <div className='flex flex-column'>
          <h3 className='text-center font-bold text-gray-900'>Nombre del Producto</h3>
          <h4 className='text-center'>$999,99</h4>
          <a className="mx-5 my-2 p-2 
                        rounded rounded-xl
                        bg-gray-900 shadow shadow-md
                        text-center text-white hover:no-underline
                        transition-all ease-in"
            target="_blank" rel="nofollow" href="/"
          >Ver detalles de este producto</a>
        </div>

      </Card>

      <Card title={"Último usuario registrado"}>

        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mb-6 w-50 mx-auto rounded-circle" style={{ width: '40rem' }} src={FotoUsuario} alt=" Star Wars - Mandalorian " />
        </div>
        
        <div className='flex flex-column'>
          <h3 className='text-center font-bold text-gray-900'>Nombre del usuario</h3>
          <h4 className='text-center'>usuario@gmail.com</h4>
          <a className="mx-5 my-2 p-2 
                        rounded rounded-xl
                        bg-gray-900 shadow shadow-md
                        text-center text-white hover:no-underline
                        transition-all ease-in"
            target="_blank" rel="nofollow" href="/"
          >Ver detalles de este usuario</a>
        </div>
      </Card>

      <Card title={"Genres in Data Base"}>
        <div className="row">
          {
            genres.map((genre, i) => <GenreCard key={i + genre} genre={genre} />)
          }
        </div>
      </Card>


    </div>
  )
}

export default ContentRow;