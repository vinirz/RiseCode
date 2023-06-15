import Airtable from "airtable"
import { useEffect, useState } from "react"
import { User } from "../Utils";
import Card from "../components/Card";

export default function Favorites(){
    const base = new Airtable({ apiKey: 'keymZeqCHaPAJcsxx' }).base('appWSfcNcPT8jjHkD');
    const auth = User.getUser()

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        base('Users').select({
            filterByFormula: `email='${auth.email}'`
        }).firstPage((err, records) => {
            if(err){
                console.log(err)
            }

            const favs = JSON.parse(records[0].fields.favorites)
                
            setFavorites(favs)
        })
    }, [])

    return(
        <div className="p-7 w-screen h-screen overflow-auto flex flex-col">
            <h1 className="text-zinc-200 text-3xl mb-7">Meus Favoritos</h1>
            {
                favorites.length > 0 ? (
                    <div className="h-5/6 w-full grid grid-cols-3 gap-x-7 items-start justify-center">
                        {
                            favorites.map((favorite, index) => {
                                return <Card key={index} backdrop={favorite.thumb} title={favorite.title} channel={favorite.channel} video={favorite.url} id={favorite.ID}/>
                            })
                        }
                    </div>
                ) : (
                    <div className="h-full w-full flex items-center justify-center">
                        <h1 className="text-zinc-200 text-3xl mb-7">Nada aqui, por enquanto...</h1>
                    </div>
                )
            }
            
        </div>
    )
}