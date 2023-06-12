import { useNavigate } from "react-router-dom"

export default function Cover({video, title, channel, id}){

  const channelInfo = JSON.parse(channel)

  const navigate = useNavigate()

    function handlePlay(){
        navigate(`/play/${id}`)
    }

  return(
    <div className={`w-full h-96 rounded-lg relative overflow-hidden cursor-pointer`} onClick={() => handlePlay()}>
          <div className="flex relative">
              <div className="bg-gradient-to-t from-black to-black/70 h-full w-full absolute"></div>
              <video preload="auto" muted autoPlay loop className="w-full">
                  <source src={video}/>
              </video>
          </div>
        <div className="absolute bg-gradient-to-r from-black/75 to-black/40 h-full w-full"></div>

        <div className="px-10 absolute bottom-10 text-zinc-200 flex justify-between items-end h-32 w-full">
            <div className='flex items-end gap-4'>
            <span className='flex bg-zinc-700 gap-2 px-2 items-center justify-center h-20 aspect-square rounded-full' style={{
                        background: `url(${channelInfo.picture})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}></span>
                <span>
                    <h1 className="text-4xl font-semibold whitespace-nowrap">{title}</h1>
                    <h1 className='text-xl'>{channelInfo.name}</h1>
                </span>
            </div>
        </div>
      
    </div>
  )
}