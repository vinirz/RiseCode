import Card from "../components/Card"
import Airtable from 'airtable';
import { useEffect, useState } from 'react';

export default function Trend(){

    const [movies, setMovies] = useState([])

    useEffect(() => {
      const base = new Airtable({ apiKey: 'keymZeqCHaPAJcsxx' }).base('appWSfcNcPT8jjHkD');
      
      base('Videos').select({
          view: 'Grid view',
          sort: [
            {field: "views", direction: "desc"}
        ]
      }).firstPage(function(err, records) {
          if (err) { console.error(err); return; }
          records.forEach(function(record) {
              setMovies(movies => [...movies, record.fields])
          });
      });
  
    }, []);

    return(
        <div className="flex flex-col p-10 w-screen h-full gap-8 overflow-auto text-zinc-200">
                <h1 className="text-zinc-200 text-3xl">Populares</h1>
                {
                    movies.length != 0 && (movies.map((movie, index) => {
                        return (
                            <div className="grid grid-cols-3 gap-5 w-full 2xl:flex" key={index}>
                                <div className="col-span-1 2xl:w-96">
                                    <Card video={movie.url} channel={movie.channel} id={movie.ID}/>
                                </div>
                                <span className="flex flex-col justify-evenly col-span-2">
                                    <h1 className="text-3xl font-semibold">{movie.title}</h1>
                                    <h1 className="text-xl opacity-50 h-20 overflow-hidden">{movie.description.length > 220 ? movie.description.slice(0,218) + '...' : movie.description}</h1>
                                    <h1 className="text-lg font-semibold">{movie.views + ' views • ' + movie.date}</h1>
                                </span>
                            </div>
                        )
                    }))
                }
            </div>
    )
}