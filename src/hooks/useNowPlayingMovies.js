/*import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";*/



const useNowPlayingMovies=()=>{
  /* Fetch Data From TMDB and Updata Store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=a2364aea5d94fe9727eb38218a90aae1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json,"ddddddd");
    dispatch(addPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);*/
}


export default useNowPlayingMovies;

