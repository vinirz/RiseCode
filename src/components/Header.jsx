import Logo from '../assets/logo.png'
import { Search, Bell, Triangle } from 'react-feather';
export default function Header(){
    return(
        <div className="w-full h-10 flex items-center justify-between p-10 text-zinc-200 absolute z-30 bg-zinc-900/50">
            <span className='flex items-center gap-7'>
                <img src={Logo} className='h-10'/>
                <ul className='flex gap-5 text-lg font-medium'>
                    <li>Inicio</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Populares</li>
                    <li>Minha lista</li>
                </ul>
            </span>
            <span className='flex items-center gap-7'>
                <Search/>
                <Bell/>
                <div className='bg-red-600 p-2 rounded'>
                    <Triangle/>
                </div>
            </span>
        </div>
    )
}