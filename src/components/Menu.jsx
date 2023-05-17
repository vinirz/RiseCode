import { Compass, Heart, Settings, ChevronsUp, List } from 'react-feather';
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
                                <Link id='categories' to='/categories' className='flex gap-5'><List/>Categorias</Link>
                            </li>
                            <li> 
                                <Link id='settings' to='/settings' className='flex gap-5'><Settings/>Configurações</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex flex-col items-start gap-8'>
                    <h1 className='text-lg'>Continuar assistindo</h1>
                    <ul className='flex flex-col gap-10 w-full'>
                        <li className="flex items-end gap-4 cursor-pointer">
                            <div className='h-12 aspect-square rounded-full items-center bg-zinc-700'>
                                <img src="" className='object-cover'/>
                            </div>
                            <span>
                                <h1 className='text-md leading-8 '>Movie Name</h1>
                                <div className='bg-zinc-700 h-1 w-full'>
                                    <div className='bg-emerald-400 h-1 w-1/2'></div>
                                </div>
                                <h1 className='text-xs'>48:35</h1>
                            </span>

                        </li>
                    </ul>
                    </div>

                </div>
            </div>
        </>
    )
}