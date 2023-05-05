import Trend from './views/Trend';
import Favorites from './views/Favorites';
import Explorer from './views/Explorer'
import SettingsView from './views/Settings';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import Categories from './views/Categories';

import { Routes, Route} from 'react-router-dom'

export default function RoutesDefinition(){
    return (
        <Routes>
            <Route path='/' element={<Login/>}></Route>

            <Route path='/createAccount' element={<CreateAccount/>}></Route>
            
            <Route path='/trend' element={<Trend/>}></Route>

            <Route path='/favorites' element={<Favorites/>}></Route>

            <Route path='/categories' element={<Categories/>}></Route>
            
            <Route path='/settings' element={<SettingsView/>}></Route>

            <Route path='/explorer' element={<Explorer/>}></Route>
        </Routes>   
    )
}