import Trend from './views/Trend';
import Favorites from './views/Favorites';
import Explorer from './views/Explorer'
import Settings from './views/Settings';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import Studio from './views/Studio';
import Play from './views/Play'
import Menu from './components/Menu';

import { Routes, Route, Navigate} from 'react-router-dom'
import { User } from './Utils';

const PrivateRoute = ({children, redirectTo}) => {
    return User.isAuthenticated() ? children : <Navigate to={redirectTo}/>
}

export default function RoutesDefinition(){
    return (
        <Routes>
            <Route path='/' element={<Login/>}></Route>

            <Route path='/createAccount' element={<CreateAccount/>}></Route>

            <Route path='/explorer' element={
                <PrivateRoute redirectTo={'/'}>
                    <div className='flex h-screen overflow-hidden bg-zinc-800'>
                        <Menu/>
                        <Explorer/>
                    </div>
                </PrivateRoute>
            }></Route>
            
            <Route path='/trend' element={
                <PrivateRoute redirectTo={'/'}>
                    <div className='flex h-screen overflow-hidden bg-zinc-800'>
                        <Menu/>
                        <Trend/>
                    </div>
                </PrivateRoute>
            }></Route>
            
            <Route path='/favorites' element={
                <PrivateRoute redirectTo={'/'}>
                    <div className='flex h-screen overflow-hidden bg-zinc-800'>
                        <Menu/>
                        <Favorites/>
                    </div>
                </PrivateRoute>
            }></Route>
              
            <Route path='/studio' element={
                <PrivateRoute redirectTo={'/'}>
                    <div className='flex h-screen overflow-hidden bg-zinc-800'>
                        <Menu/>
                        <Studio/>
                    </div>
                </PrivateRoute>
            }></Route>
              
            <Route path='/settings' element={
                <PrivateRoute redirectTo={'/'}>
                    <div className='flex h-screen overflow-hidden bg-zinc-800'>
                        <Menu/>
                        <Settings/>
                    </div>
                </PrivateRoute>
            }></Route>

            <Route path='/play/:id' element={
                <PrivateRoute redirectTo={'/'}>
                    <div className='flex h-screen overflow-hidden bg-zinc-800'>
                        <Play/>
                    </div>
                </PrivateRoute>
            }></Route>
        </Routes>
    )
}