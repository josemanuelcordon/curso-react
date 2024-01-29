import { useParams } from 'react-router-dom'
import BackButton from '../components/components/BackButton';
import MovieDetails from '../components/components/MovieDetails';


const MovieDetailsPage = () => {
  const { idPelicula } = useParams();
  return (
    <div>
      <BackButton />
      <MovieDetails movieId={idPelicula}/>
    </div>
  )
}

export default MovieDetailsPage