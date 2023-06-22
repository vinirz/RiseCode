import { Compass, Heart, Settings, ChevronsUp, Video } from 'react-feather';
import {Link, useLocation} from 'react-router-dom'

export default function Menu(){

    const location = useLocation().pathname.replace(/\//g,'')

    return(
        <>
            <style>{`
                #${location}{
                    color: rgb(52 211 153)
                }
            `}</style>

            <div className="h-screen bg-zinc-900 w-72 flex flex-col p-10 gap-14 text-zinc-500 overflow-auto">
                <div className='flex flex-col gap-14'> 
                    <h1 className='text-2xl top-5 left-5 text-zinc-200'>RiseStream</h1>
                   
                    <nav>
                        <ul className='flex flex-col gap-6 items-start text-md' >
                            <li>
                                <Link id='explorer' to='/explorer' className='flex gap-5'><Compass/>Explorar</Link>
                            </li>
                            <li> 
                                <Link id='trend' to='/trend' className='flex gap-5'><ChevronsUp/>Populares</Link>
                            </li>
                            <li> 
                                <Link id='favorites' to='/favorites' className='flex gap-5'><Heart/>Favoritos</Link>
                            </li>
                            <li> 
                                <Link id='studio' to='/studio' className='flex gap-5'><Video/>Studio</Link>
                            </li>
                            <li> 
                                <Link id='settings' to='/settings' className='flex gap-5'><Settings/>Configurações</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}