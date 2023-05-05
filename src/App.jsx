import { BrowserRouter as Router} from 'react-router-dom'
import RoutesDefinition from './routes';

export default function App(){
  return(
      <Router>
        <div className='flex h-screen overflow-hidden bg-zinc-800 text-emerald-500'>
          <RoutesDefinition/>
        </div>
      </Router>
  )
}
