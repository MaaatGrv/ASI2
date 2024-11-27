import React, { useState } from 'react';
import { Grid, Segment, Menu } from 'semantic-ui-react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import { Home } from './pages/Home';
import { Display } from './pages/Display';
import { FormDisplay } from './pages/FormDisplay';


//Create function component
export const App =(props) =>{
    const [currentUser,setCurrentUser]= useState({
        id:12,
        surname:"John",
        lastname:"Doe",
        login:"jDoe",
        pwd:"jdoepwd",
        img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
        money:1000,
    });



    return (
        <>
            <BrowserRouter>
                <Menu>
                    <Menu.Item
                        name='heropres'

                    >
                        <NavLink to="/" >Home</NavLink>
                    </Menu.Item>
                    <Menu.Item
                        name='heropres'
                    >
                        <NavLink to="/display">Display</NavLink>
                    </Menu.Item>
                    <Menu.Item
                        name='heropres'
                    >
                        <NavLink to="/form"> Form</NavLink>
                    </Menu.Item>
                </Menu>
                <div>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path='/display' element={<Display/>} />
                        <Route path='/form' element={<FormDisplay/>} />
                        <Route path='/' element={<Home/>} />
                    </Routes>
                </div>
            </BrowserRouter>

        </>
    );
}