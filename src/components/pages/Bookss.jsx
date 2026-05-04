import React, { useEffect, useState } from 'react';
import { data } from 'react-router';

const Bookss = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data=>{
                setAllBooks(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Books</h1>
        </div>
    );
};

export default Bookss;