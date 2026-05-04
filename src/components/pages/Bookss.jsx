import React, { Suspense, useEffect, useState } from 'react';
import { data } from 'react-router';
import Book from '../Book/Book';

const Bookss = () => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data=>{
    //             setAllBooks(data)
    //         })
    // }, [])

    const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Books</h1>
            <Suspense fallbackP={<span>Loading......</span>}>
                <Book bookPromise={bookPromise}></Book>
            </Suspense>
        </div>
    );
};

export default Bookss;