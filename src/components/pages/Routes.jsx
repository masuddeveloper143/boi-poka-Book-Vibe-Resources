import React from 'react';


import {
    createBrowserRouter,

} from "react-router-dom";
import Root from './root/Root';
import ErrorPgae from './ErrorPgae/ErrorPgae';
import Home from './Home/Home';
import About from '../About/About';
import BookDetails from '../BookDetails/BookDetails';
import ReadList from '../ReadList/ReadList';



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPgae></ErrorPgae>,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                path: "/home",
                Component: Home
            },

            {
                path: "/about",
                Component: About
            },

            {
                path: '/readList',
                loader: () => fetch('booksData.json'),
                Component: ReadList
            },

            {
                path: '/bookDetails/:id',
                loader: () => fetch('/booksData.json'),
                Component: BookDetails
            }
        ]
    },
]);