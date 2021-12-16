import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Home from '../pages/Home'
import Forecasts from '../pages/Forecasts'
import Settings from '../pages/Settings'
import NotFound from '../pages/NotFound'
import NavigationBar from "./NavigationBar";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/forecasts' element={<Forecasts />} />
                <Route path='/settings' element={<Settings/>} />
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
    )
}
