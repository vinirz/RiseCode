import { useNavigate } from "react-router-dom"

export default function Card({title = '', channel = '', video, id}){

    const channelInfo = JSON.parse(channel)

    const navigate = useNavigate()

    function handlePlay(){
        navigate(`/play/${id}`)
    }

    return(
        <div className="h-52 relative rounded-xl overflow-hidden cursor-pointer" onClick={() => handlePlay()}>
            <div className="flex h-full w-full justify-center items-center relative bg-black">
                <div className="bg-gradient-to-t from-black to-black/40 h-full w-full absolute"></div>
                <video preload="auto" muted autoPlay loop className="w-full">
                    <source src={video}/>
                </video>
            </div>

            <div className="px-5 absolute bottom-[-33px] text-zinc-200 flex flex-col justify-between h-32">
                <div className='flex gap-3 items-center justify-start mt-5'>
                    <img src={channelInfo.picture} className="h-14 aspect-square rounded-full object-cover" />
                    <span>
                        <h1 className="text-lg font-semibold w-full whitespace-nowrap overflow-hidden">{title}</h1>
                        <h1>{channelInfo.name}</h1>
                    </span>
                </div>
            </div>
        </div>
    )
}