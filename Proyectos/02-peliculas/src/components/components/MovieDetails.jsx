import useDataApi from "../../../hooks/useDataAPI";
import Spinner from "./Spinner";


const apiToken = import.meta.env.VITE_API_TOKEN;

const MovieDetails = ({ movieId }) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiToken}&language=es-es`;
    const { data, loading, error } = useDataApi(apiUrl);

    const genres = data?.genres.map(genre => genre.name).join(", ");
  return (
    <div className="bg-gray-800 p-4">
        {loading && <Spinner/>}
        {error && <p className="text-2xl">Error loading...</p>}
        {data && (
            <>
                <div className="flex flex-col w-3/6 items-center mx-auto">
                    <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt={data.title}
                    className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black 
                    transition-all duration-500 ease-in-out"/>
                    <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.title}
                    className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black 
                    transition-all duration-500 ease-in-out"/>
                </div>
            </>
        )}
    </div>
  )
}

export default MovieDetails