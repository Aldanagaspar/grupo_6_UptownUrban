import FotoMandalorian from '../../assets/images/mandalorian.jpg'
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
      <Card title={"Last movie in Data Base"}>

          <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={FotoMandalorian} alt=" Star Wars - Mandalorian " />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>

      </Card>

    <Card title={"Genres in Data Base"}>
      <div className="row">
        {
          genres.map((genre, i) => <GenreCard key={i+genre} genre={genre} />)  
        }     
      </div>
    </Card>
      
     
    </div>
  )
}

export default ContentRow;