import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Airtable from "airtable"
import { Heart, ArrowLeft } from 'react-feather';
import { User, addFavorite, removeFavorite } from "../Utils";

export default function(){
    const base = new Airtable({ apiKey: 'keymZeqCHaPAJcsxx' }).base('appWSfcNcPT8jjHkD');
    const {id} = useParams()
    const auth = User.getUser()
    const [movie, setMovie] = useState(null)
    const [fav, setFav] = useState(false)
    const navigate = useNavigate(false)


    useEffect(() => {
        base('Videos').select({
            filterByFormula: `ID='${id}'`
        }).firstPage((err, records) => {
            if (err) {
                console.error(err);
                return;
            }
            const record = records[0]
            setMovie(record.fields)
            record.updateFields({views: record.fields.views + 1});

        })

    }, [])

    useEffect(()=>{
        base('Users').select({
            filterByFormula: `email='${auth.email}'`
          }).firstPage((err, records) => {
            if(err){
              console.log(err)
            }
        
            const currentFavorites = records[0].fields.favorites
    
            if(currentFavorites != undefined){
                const array = JSON.parse(currentFavorites)
                array.forEach(element => {
                    if(element.ID === movie.ID){
                        setFav(true)
                    }
                });
    
            } else {
                setFav(false)
            }
          })
    }, [movie])

    
    return (
        <>
            {
                movie && (  
                    <div className="h-screen w-screen items-center justify-center p-5 overflow-auto">
                        <div className="bg-zinc-900 w-full h-full rounded-2xl">
                            <video controls autoPlay src={movie.url} className="rounded-2xl h-full w-full"></video>
                        </div>
                        <div className="h-12 aspect-square flex items-center justify-center text-zinc-200 bg-emerald-500 absolute top-5 rounded-full cursor-pointer" onClick={() => {navigate('/explorer')}}>
                            <ArrowLeft/>
                        </div>
                        <div className="w-full flex flex-col gap-5 text-zinc-200 mt-5">
                            <div className="flex items-center justify-between w-full bg-zinc-700 p-5 px-10 rounded-lg">
                                <h1 className="text-4xl font-semibold">{movie.title}</h1>

                                <span className="flex items-center justify-between gap-10">
                                    <Heart size={40} onClick={() =>{
                                        if(fav){
                                            removeFavorite(movie)
                                        } else (
                                            addFavorite(movie)
                                        )
                                        
                                        setFav(!fav)}
                                    } fill={fav ? '#e4e4e7' : 'transparent'}/>
                                    <h1 className="text-4xl font-semibold">{movie.views} views</h1>
                                </span>
                            </div>
                            <div className="flex items-end gap-5 px-5">
                                <img src={JSON.parse(movie.channel).picture} className="h-16 aspect-square rounded-full object-cover" />
                                <h1 className="text-3xl font-medium">{JSON.parse(movie.channel).name}</h1>
                            </div>
                            <div className="bg-zinc-700 p-5 px-10 rounded-lg">
                                <h1 className="text-3xl">Descrição:</h1>
                                <br />
                                <h1 className="text-2xl whitespace-break-spaces">{movie.description}</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}