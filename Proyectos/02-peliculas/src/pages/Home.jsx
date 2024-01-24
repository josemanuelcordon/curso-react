import { useState } from "react";
import useDataApi from "../../hooks/useDataAPI";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFilms, setFilteredFilms] = useState([]);
    
    const apiToken = import.meta.env.VITE_API_TOKEN;
    const apiEndPoint = `https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=${apiToken}`;
    const { data, loading, error } = useDataApi(apiEndPoint);

    function handleSearch(event) {
        event.preventDefault();
        setSearchQuery(event.target.value.toLowerCase().trim());

    }

  return (
    <div className="flex flex-col items-center justify-center my-4">
       <form className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center">
            <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
            placeholder="Buscar Películas..."
            />
        </form>
    </div>
  )
}

export default Home