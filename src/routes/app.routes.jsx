import { Routes, Route } from 'react-router-dom';

import App from '../components/App';
import Lyrics from '../components/Lyrics';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App />}/>

            <Route path='/lyrics/:number' element={<Lyrics />}/>

        </Routes>
    );
}