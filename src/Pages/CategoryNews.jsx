import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    
    const [filteredcNews, setFilteredNews] = useState([]);
    useEffect(() => {
        if(id == "0") {
            setFilteredNews(data);
            return;
        }else if(id == "1"){
            const filterNews = data.filter(news => news.others.is_today_pick == true);
        setFilteredNews(filterNews)
        }else{
            const filterNews = data.filter(news => news.category_id == id);
        setFilteredNews(filterNews)
        }     
    }, [data, id])
    
    return (
        <div>
             <h2>total News found is <span className='text-secondary font-black'>{filteredcNews.length}</span></h2>
             <div className='space-y-8'>
                {filteredcNews.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)}
             </div>

        </div>
    );
};

export default CategoryNews;