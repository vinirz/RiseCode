import { createRef } from "react"
import { Logar } from "../Utils"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const Mail = createRef()
    const Password = createRef()

    const navigate = useNavigate()

    function handleLogin(){
        Logar(Mail.current.value, Password.current.value)
        .then((match) => {
            if(match){
                localStorage.setItem('user', JSON.stringify(match))
                window.location.href = '/explorer'
            }
        })
    }

    return(
        <div className="flex flex-col items-center justify-center gap-10 w-screen">
            <div className="h-32 rounded-full aspect-square bg-zinc-50 bg-[url('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png')] bg-cover bg-center"/>
            <form className="flex flex-col gap-5 items-center text-zinc-100" onSubmit={(e)=>{e.preventDefault(), handleLogin()}}>
                <input type="email" placeholder="Email"  className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200" ref={Mail}/>
                <input type="password" placeholder="Senha" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200" ref={Password}/>
            
                <button className="bg-zinc-500 mt-5 w-72 h-11 group rounded-full flex items-center justify-center overflow-hidden relative">
                    <span className='absolute bg-emerald-400 left-[-900px] group-hover:left-0 h-full w-full transition-all'></span>
                    <span className='z-10 flex gap-4 text-xl items-center justify-center text-zinc-200 group-hover:text-emerald-800'>
                        <h1>Entrar</h1>
                    </span>
                </button>

                <h1 onClick={() => navigate('/createAccount')} className="text-zinc-500 cursor-pointer">Criar uma conta</h1>
            </form>
        </div>
    )
}