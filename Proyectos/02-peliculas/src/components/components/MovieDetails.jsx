import useDataApi from "../../../hooks/useDataAPI";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";


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
                <div className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow overflow-hidden md:max-w-screen-2xl
                m-5 hover-shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
                    <div className="md:flex justify-between ">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                                <h1>{data.title}</h1>
                            </div>
                            <p className="block mt-2 text-xl leading-tight font-medium text-white">{data.tagline}</p>
                            <p className="block mt-5 text-xl leading-tight font-medium text-white">{genres}</p>
                            <p className="block mt-2 text-xl leading-tight font-medium text-white">{data.release_date}</p>
                            <p className="mt-10 text-gray-400">{data.overview}</p>
                        </div>
                        <div className="flex items-center mt-2 space-x-4">
                            <Link to="/" className="text-l text-red-500 hover:text-white m-5">Volver</Link>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default MovieDetails