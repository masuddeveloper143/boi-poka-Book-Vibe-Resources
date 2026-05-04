import React, { Suspense, useEffect, useState } from 'react';
import { data } from 'react-router';
import Book from '../Book/Book';

const Bookss = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data=>{
    //             setAllBooks(data)
    //         })
    // }, [])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Books</h1>
            <Suspense fallback={<span>Loading......</span>}>
                {/* <Book bookPromise={bookPromise}></Book> */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map((sigelBook) => <Book key={sigelBook.bookId} sigelBook={sigelBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Bookss;