import { createRef } from 'react';
import { Search, X } from 'react-feather';

export default function SearchView({fillsearch}){
    const inptRef = createRef() 
    const {search, setSearch} = fillsearch

    return(
           <form className=" w-full 2xl:w-3/4 h-16 flex items-center overflow-hidden justify-between bg-zinc-900 rounded-full" onSubmit={(e) => {e.preventDefault(), setSearch(inptRef.current.value)}}>
                <input id='content' type="text" placeholder='Digite para pesquisar...' defaultValue={inptRef.current} className="w-5/6 h-full outline-none bg-zinc-900 rounded-full text-zinc-200 px-10" ref={inptRef} />
                {
                    search != '' && (
                        <span className='h-1/2 aspect-square bg-red-500 rounded-full mr-5 flex items-center justify-center text-zinc-50 p-2 cursor-pointer' onClick={() => {setSearch(''), inptRef.current.value = ''}}>
                            <X/>
                        </span>
                    )
                }
                <button className="bg-emerald-400 w-56 h-full group rounded-full flex items-center justify-center overflow-hidden relative">
                    <span className='absolute bg-emerald-500 left-[-900px] group-hover:left-0 h-full w-full transition-all'></span>
                    <span className='z-10 flex gap-4 text-xl items-center justify-center text-zinc-50'>
                        <h1>Pesquisar</h1>
                        <Search/>
                    </span>
                </button>
           </form>
    )
}