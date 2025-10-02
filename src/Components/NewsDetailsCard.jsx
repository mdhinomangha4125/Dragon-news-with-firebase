import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div className='space-y-5'>
            <img className='w-full h-auto'  src={news.image_url} alt="" />
            <h2 className='text-2xl font-semibold'>{news.title}</h2>
            <p className='text-justify'>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}> back category</Link>
        </div>
    );
};

export default NewsDetailsCard;