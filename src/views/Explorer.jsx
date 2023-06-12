import Cover from '../components/Cover';
import Card from '../components/Card';
import Airtable from 'airtable';
import { useEffect, useState } from 'react';
import {User} from '../Utils'
import { useNavigate } from 'react-router-dom';
import SearchView from '../components/Search'

function App() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  const auth = User.getUser()

  useEffect(() => {
    const base = new Airtable({ apiKey: 'keymZeqCHaPAJcsxx' }).base('appWSfcNcPT8jjHkD');
    
    base('Videos').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            setMovies(movies => [...movies, record.fields])
        });
    });
  }, []);

  return (
    <div className="w-screen h-screen overflow-auto">
     
     <div className='w-full gap-10 flex items-center justify-between p-10'>
        <SearchView/>
        <div className='text-zinc-200 flex items-end gap-4'>
          <span className='flex bg-zinc-50 h-16 aspect-square rounded-full overflow-hidden cursor-pointer'>
            <img src={auth.picture} className='w-full h-full object-cover' onClick={() => navigate('/settings')}/>
          </span>
        </div>
      </div>

      {
        movies.length != 0 && (
            <div className="px-10 overflow-auto flex flex-col gap-10">
            <Cover video={movies[0].url} title={movies[0].title} channel={movies[0].channel} id={movies[0].ID}/>
              <div className='grid grid-cols-3 gap-10 w-full 2xl:grid-cols-6'>
                {
                  movies.map((movie, index) => {
                    return <Card key={index} backdrop={movie.thumb} title={movie.title} channel={movie.channel} video={movie.url} id={movie.ID}/>
                  })
                }
              </div>
            </div> )
      }
    </div>

  )
}

export default App