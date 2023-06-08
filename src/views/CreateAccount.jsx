import { createRef, useState } from "react"
import { Cadastrar } from "../Utils"
import { useNavigate } from 'react-router-dom'


export default function CreateAccount(){

    const formRef = createRef()

    const [pic, setPic] = useState('https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png')

    const navigate = useNavigate()

    async function handleSave(){
        const picture = formRef.current.picture.files[0]
        const name = formRef.current.name.value
        const mail = formRef.current.mail.value
        const password = formRef.current.password.value

        Cadastrar(mail, name, password, picture).then((response) => {
            if(response){
                navigate('/')
            }
        })
    }

    return(
        <div className="flex flex-col items-center justify-center gap-10 w-screen">

            <form className="flex flex-col gap-5 items-center text-zinc-100" onSubmit={(e)=>{e.preventDefault(), handleSave()}} ref={formRef}>
                <input type="file" className="hidden" id="picture" onInputCapture={(e)=>{setPic(URL.createObjectURL(e.target.files[0]))}}/>
                <label htmlFor="picture">
                    <img src={pic} className="overflow-hidden h-32 w-32 bg-zinc-50 rounded-full object-cover"/>
                </label>

                <input type="text" placeholder="Nome" id="name" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200" required/>
                <input type="email" placeholder="Email" id="mail" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200" required/>
                <input type="password" placeholder="Senha" id="password" className="h-11 p-5 w-80 rounded-full bg-zinc-500 placeholder:text-zinc-200" required/>
            
                <button className="bg-zinc-500 mt-5 w-72 h-11 group rounded-full flex items-center justify-center overflow-hidden relative">
                    <span className='absolute bg-emerald-400 left-[-900px] group-hover:left-0 h-full w-full transition-all'></span>
                    <span className='z-10 flex gap-4 text-xl items-center justify-center text-zinc-200 group-hover:text-emerald-800'>
                        <h1>Salvar</h1>
                    </span>
                </button>

                <h1 onClick={() => navigate('/')} className="text-zinc-500 cursor-pointer">Voltar</h1>
            </form>
        </div>
    )
}