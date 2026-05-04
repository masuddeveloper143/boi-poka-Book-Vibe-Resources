import React from 'react';
import Bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16 w-full'>
            <div >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo ex ea, aut consectetur tempore repudiandae est dolorum fugit fuga, blanditiis ad officia nemo rem atque eligendi, ipsam necessitatibus placeat!</p>
                <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img className='w-10/12' src={Bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;