export default function Cover({backdrop, title, overview}){

    return(
      <div className={`w-full h-96 rounded-lg relative overflow-hidden cursor-pointer`}>
            <div className="flex relative">
              <span className="absolute top-10 left-10 z-10 flex flex-col gap-5 w-3/4">
                <h1 className="text-7xl font-medium text-zinc-200">{title}</h1>
                <h1 className="text-xl font-normal text-zinc-200">{overview.length > 300 ? overview.substring(0,300) + '...' : overview}</h1>
              </span>
  
              <div className="bg-gradient-to-t from-black to-black/70 h-full w-full absolute"></div>
              <img src={`https://image.tmdb.org/t/p/original${backdrop}`} className="" />
            </div>
      </div>
    )
  }