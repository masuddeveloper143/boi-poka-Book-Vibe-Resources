import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);


    }, [])


    const handleSort = (type) => {
        setSort(type);
        if (type === "pages")
            const sortByPage = [...readList].sort((a, b) =>a.)
    }


    return (
        <div>
            <Tabs>
                <details className="dropdown">
                    <summary className="btn m-1">sort by: {sort ? sort : ""}</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort("pages")}><a>pages</a></li>
                        <li onClick={() => handleSort("rating")}><a>rating</a></li>
                    </ul>
                </details>
                <TabList>
                    <Tab>Read Book List </Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i Read {readList.length}</h2>

                    {
                        readList.map(b => (
                            <Book key={b.bookId} sigelBook={b}></Book>
                        ))
                    }

                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ReadList;