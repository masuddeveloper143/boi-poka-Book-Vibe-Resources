import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ sigelBook }) => {

    const { bookName, author, image, rating, tags } = sigelBook;



    // const data = use(bookPromise);
    // console.log(data);
    // console.log(sigelBook);
    return (
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
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                </div>
            </div>
        </div>
    );
};

export default Book;