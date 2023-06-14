import Trend from './views/Trend';
import Favorites from './views/Favorites';
import Explorer from './views/Explorer'
import Settings from './views/Settings';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import Categories from './views/Categories';
import Play from './views/Play'
import Menu from './components/Menu';

import { Routes, Route} from 'react-router-dom'

export default function RoutesDefinition(){
    return (
        <Routes>
            <Route path='/' element={<Login/>}></Route>

            <Route path='/createAccount' element={<CreateAccount/>}></Route>
            
            <Route path='/explorer' element={
                <div className='flex h-screen overflow-hidden bg-zinc-800'>
                    <Menu/>
                    <Explorer/>
                </div>
            }></Route>
            
            <Route path='/trend' element={
                <div className='flex h-screen overflow-hidden bg-zinc-800'>
                    <Menu/>
                    <Trend/>
                </div>
            }></Route>
            
            <Route path='/favorites' element={
                <div className='flex h-screen overflow-hidden bg-zinc-800'>
                    <Menu/>
                    <Favorites/>
                </div>
            }></Route>
              
            <Route path='/categories' element={
                <div className='flex h-screen overflow-hidden bg-zinc-800'>
                    <Menu/>
                    <Categories/>
                </div>
            }></Route>
              
            <Route path='/settings' element={
                <div className='flex h-screen overflow-hidden bg-zinc-800'>
                    <Menu/>
                    <Settings/>
                </div>
            }></Route>

            <Route path='/play/:id' element={
                <div className='flex h-screen overflow-hidden bg-zinc-800'>
                    <Play/>
                </div>
            }></Route>

        </Routes>   
    )
}