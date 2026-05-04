import React from 'react';


import {
    createBrowserRouter,

} from "react-router-dom";
import Root from './root/Root';
import ErrorPgae from './ErrorPgae/ErrorPgae';
import Home from './Home/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<ErrorPgae></ErrorPgae>,
        children:[
            {
                index: true,
                path:"/",
                Component:Home
            }
        ]
    },
]);