import { createRef, useState, useRef, useEffect } from 'react';
import { UploadVideo } from './../Utils';
import { Upload } from 'react-feather';

export default function Studio(){

    const formRef = createRef()

    const [loading, setLoading] = useState(false)
    const [thumb, setThumb] = useState(null)

    async function handleUpload(){
        setLoading(true)
        const movie = {
            "title" : formRef.current.title.value,
            "description" : formRef.current.description.value,
            "video" : formRef.current.video.files[0]
        }
        try{
            await UploadVideo(movie)
        }catch{
            (error) => console.log(error)
        }
        setLoading(false)
    }

    return(
        <div className="p-10 w-screen overflow-auto flex flex-col relative">
            <h1 className="text-zinc-200 text-3xl mb-10">Studio</h1>
            <form className='h-4/5 flex flex-col gap-4 items-center justify-center py-12' ref={formRef} onSubmit={(e)=> {e.preventDefault(), handleUpload()}}>
                <div className='flex gap-5'>
                    <input type="file" accept='.mp4' name="video" id="video" className='hidden' onInputCapture={(e)=>{setThumb(URL.createObjectURL(e.target.files[0]))}}/>
                    <div className='bg-emerald-500 h-72 flex overflow-hidden aspect-square rounded-3xl'>
                        <label htmlFor='video' className='h-full w-full flex flex-col gap-5 items-center justify-center'>
                            {
                                thumb ? (
                                        <video className='h-full w-full' controls src={thumb}/>
                                ) : 
                                (
                                    <>
                                        <Upload size={100} strokeWidth={1} color='#27272a'/>
                                        <h1 className='font-semibold text-2xl text-zinc-900'>Selecione um vídeo</h1>
                                    </>
                                )
                            }
                        </label>
                    </div>
                    <div className='h-full flex flex-col gap-4 '>
                        <input type="text" placeholder='Titulo' id='title' className='h-1/3 w-96 px-5 outline-none text-emerald-500 placeholder:text-emerald-500/70 font-bold bg-transparent rounded-2xl border-emerald-500 border-4' />
                        <textarea type="text" placeholder='Descrição' id='description' className='h-full w-96 p-5 resize-none flex outline-none text-emerald-500 placeholder:text-emerald-500/70 font-bold bg-transparent rounded-2xl border-emerald-500 border-4' />
                    </div>
                </div>
                <div className='h-60 w-2/3 flex items-center justify-end'>
                    <input type="submit" value='Enviar' className='h-14 w-60 px-5 outline-none text-center text-emerald-500 placeholder:text-emerald-500/70 font-bold bg-transparent rounded-2xl border-emerald-500 border-4' />
                </div>
            </form>
            {
                loading && (
                    <div className='h-full w-full absolute top-0 left-0 bg-zinc-900 flex flex-col items-center justify-center gap-10'>
                            <svg aria-hidden="true" class="w-16 h-816mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <h1 className='text-3xl text-zinc-200'>Fazendo Upload</h1>
                    </div>
                )
            }
        </div>
    )
}