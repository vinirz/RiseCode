import Card from './../components/Card';

export default function Categories(){
    return(
        <div className="p-10 w-screen overflow-auto flex flex-col relative">
            <h1 className='text-3xl text-zinc-100 mb-3'>Ação</h1>
            <div className="w-full h-1/2 flex gap-3 p-3 overflow-auto">
                <span className='w-52 flex-shrink-0 flex-grow-0 bg-emerald-500/70 rounded-md'></span>
                <span className='w-52 flex-shrink-0 flex-grow-0 bg-emerald-500/70 rounded-md'></span>
                <span className='w-52 flex-shrink-0 flex-grow-0 bg-emerald-500/70 rounded-md'></span>
                <span className='w-52 flex-shrink-0 flex-grow-0 bg-emerald-500/70 rounded-md'></span>
                <span className='w-52 flex-shrink-0 flex-grow-0 bg-emerald-500/70 rounded-md'></span>
                <span className='w-52 flex-shrink-0 flex-grow-0 bg-emerald-500/70 rounded-md'></span>
            </div>

        </div>
    )
}