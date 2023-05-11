export default function Card({poster = '', title = '', note = ''}){

    return(
        <div className="h-full flex flex-shrink-0 flex-grow-0 relative rounded-xl overflow-hidden cursor-pointer">
            <div className="flex h-full w-full justify-center items-center relative bg-black">
                <div className="bg-gradient-to-t from-black to-black/40 h-full w-full absolute"></div>
                <img src={`https://image.tmdb.org/t/p/original${poster}`} className="object-cover" />
            </div>

            <div className="px-5 absolute bottom-[-10px] text-zinc-200 flex flex-col h-32">
                <h1 className="text-2xl font-medium">{title}</h1>
                <h1>{note && `nota: ${note}`}</h1>
            </div>
        </div>
    )
}