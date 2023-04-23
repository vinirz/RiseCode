import Cover from './components/Cover';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './components/Card';

export default function App(){

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getResponse(){
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dbc5b61e12a8e750d9ce0b405ae1584b&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      setMovies(response.data.results)
      console.log(response.data.results)
    }
    getResponse()
  }, []);

  return(
      <div className="h-screen w-screen bg-zinc-800 overflow-x-hidden">
          {
            movies.length > 0 ? (
              <>
                <Cover image={movies[0].backdrop_path} title={movies[0].title} overview={movies[0].overview}/>
                <div className='h-96 flex gap-5 overflow-auto p-10' id='carrosel'>
                  {
                    movies.map((movie, index)=>{
                      return <Card image={movie.poster_path}/>
                    })
                  }
                </div>
              </>
            ) : (<h1>Carregando</h1>)
          }
      </div>
  )
}
