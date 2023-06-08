import { BrowserRouter as Router} from 'react-router-dom'
import RoutesDefinition from './routes';
import { ToastContainer } from 'react-toastify';

export default function App(){
  return(
      <Router>
        <div className='flex h-screen overflow-hidden bg-zinc-800 text-emerald-500'>
        <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="dark"/>
          <RoutesDefinition/>
        </div>
      </Router>
  )
}
