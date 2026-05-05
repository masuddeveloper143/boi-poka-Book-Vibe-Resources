import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ sigelBook }) => {

    const { bookName, author, image, rating,bookId, tags, yearOfPublishing, publisher } = sigelBook;



    // const data = use(bookPromise);
    // console.log(data);
    // console.log(sigelBook);
    return (
        <Link to={`/bookDetails/${bookId}`}>

            <div className="card bg-base-100 w-96 shadow-sm border shadow">
                <figure className='p-3 bg-gray-100 w-2/3 mx-auto'>
                    <img className='h-[166px] ' src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className='flex gap-4 justify-center'>
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by:{publisher}</p>

                    <div className='border-t-2 border-d'>

                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Book;