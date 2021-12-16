import React from 'react';
import { useState } from 'react';
import {NavLink, useLocation} from 'react-router-dom'
import {NavigationBar as NavigationBarStyle,tab, active,conteiner,home, pct} from './css/NavigationBar.module.css';

const NavigationBar = () => {
    const location = useLocation()
    const [activeItem, setActiveItem] = useState(()=>{
        switch (location.pathname.toLowerCase()){
            case '/home':
                return 1
            case '/forecast':
                return 2
            case '/settings':
                return 3
            default:
                return 1;
        }
    })
    return (
        <div className={NavigationBarStyle}>
            <div className={conteiner}>
                <div>
                    <NavLink to="/">
                         <img className={`${pct} ${activeItem === 1?active:''}`} src={"./assets/house.png"} onClick={() => setActiveItem(1)}  alt='home page'/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/forecasts">
                        <img className={`${pct} ${(activeItem !== 1
                            ? (activeItem !== 3?active:'')
                            : '')}
                            `}
                             src={"./assets/calendar.png"} onClick={() => setActiveItem(2)}  alt='calendar'/>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Settings">
                        <img className={`${pct} ${activeItem === 3?active:''}`} src={"./assets/gear.png"} onClick={() => setActiveItem(3)}  alt='settings'/>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default NavigationBar;