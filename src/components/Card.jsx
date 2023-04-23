export default function Card({image, title}){
    return(
        <div className="bg-zinc-700 h-full w-52 flex-shrink-0 flex-grow-0 rounded-lg" style={{
            background: `url('https://image.tmdb.org/t/p/original${image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>

        </div>
    )
}