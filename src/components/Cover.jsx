export default function Cover({image, title, overview}){
    return(
        <div className="bg-zinc-300 h-screen w-screen relative" style={{
            background: `url('https://image.tmdb.org/t/p/original${image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

            <div className="absolute bg-gradient-to-tr from-zinc-900/95 to-zinc-900/0 h-full w-full flex flex-col pt-52 pl-10">
                <h1 className="text-5xl font-bold text-zinc-200">{title}</h1>
                <h1 className="text-2xl font-medium text-zinc-200 w-1/2 mt-7">{overview}</h1>
            </div>
        
        </div>
    )
}