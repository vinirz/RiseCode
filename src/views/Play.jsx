import { useParams, useNavigate } from "react-router-dom"

export default function(){
    const {id} = useParams()
    const navigate = useNavigate()
    
    return (
        <div className="p-10">
            <button onClick={()=>{navigate('/explorer')}}>Voltar</button>
            <h1>Exibir video: {id}</h1>
        </div>
    )
}