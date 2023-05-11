import Cover from '../components/Cover';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import SearchView from '../components/Search';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getResponse(){
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=dbc5b61e12a8e750d9ce0b405ae1584b&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      setMovies(response.data.results)
      console.log(response.data.results)
    }
    getResponse()
  }, []);

  return (
    <div className="w-screen h-screen overflow-auto">

      <div className='w-full gap-10 flex items-center justify-between p-10'>
        <SearchView/>
        <div className='text-zinc-200 flex items-end gap-4'>
          <span className='flex bg-zinc-50 h-16 aspect-square rounded-full overflow-hidden cursor-pointer'>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" className='w-full h-full object-cover' onClick={() => navigate('/settings')}/>
          </span>
        </div>
      </div>

      {
        movies.length != 0 && (
        <div className="px-10 overflow-auto flex flex-col gap-10">
            <Cover backdrop={movies[0].backdrop_path} title={movies[0].title} overview={movies[0].overview}/>
              <div className='grid grid-cols-3 gap-10 w-full 2xl:grid-cols-6'>
                {
                  movies.map((movie, index) => {
                    return <Card key={index} poster={movie.poster_path} title={movie.title} note={movie.vote_average}/>
                  })
                }
              </div>
            </div>)
      }
    </div>

  )
}

export default App