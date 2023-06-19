import { useNavigate } from "react-router-dom"

export default function SettingsView(){   

    const navigate = useNavigate()

    return(
        <div className="p-10 w-screen h-screen">
            <h1 className="text-zinc-200 text-3xl mb-5">Diggo</h1>
            <div className="flex flex-col items-center justify-center gap-10 w-[100%] h-[90%]">
                <form className="flex flex-col gap-5 items-center text-zinc-100" onSubmit={(e) => {e.preventDefault()}}>
                    <input type="file" className="hidden" id="pic"/>
                    <label htmlFor="pic">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoHNU9U2B7PIoOMkNDKQEhRIdZQbscODfhQ&usqp=CAU' className="overflow-hidden h-32 w-32 bg-zinc-50 rounded-full object-cover"/>
                    </label>
                    <input type="text" placeholder="Nome" id="name" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200"/>
                    <input type="email" placeholder="Email" id="mail" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200"/>
                    <input type="password" placeholder="Nova Senha" id="password" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200"/>

                    <div>
                        <button className="bg-zinc-500 mt-5 w-72 h-11 group rounded-full flex items-center justify-center overflow-hidden relative">
                            <span className='absolute bg-emerald-400 left-[-900px] group-hover:left-0 h-full w-full transition-all'></span>
                            <span className='z-10 flex gap-4 text-xl items-center justify-center text-zinc-200 group-hover:text-emerald-800'>
                                <h1>Salvar alterações</h1>
                            </span>
                        </button>
                        <button className="bg-zinc-500 mt-5 w-72 h-11 group rounded-full flex items-center justify-center overflow-hidden relative" onClick={() => {localStorage.clear(), window.location.reload()}}>
                            <span className='absolute bg-red-400 left-[-900px] group-hover:left-0 h-full w-full transition-all'></span>
                            <span className='z-10 flex gap-4 text-xl items-center justify-center text-zinc-200 group-hover:text-red-800'>
                                <h1>Sair</h1>
                            </span>
                        </button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}