import React, { useEffect, useState } from 'react';
import RightAside from '../Components/HomeLayOuts/RightAside';
import Header from '../Components/Header';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    console.log(data, id);
    const [news, setNews] = useState({});

    useEffect(() => {
        const NewsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(NewsDetails)
    }, [data, id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-4 gap-5'>
                <section className='col-span-3'>
                    <h2 className='text-2xl font-semibold'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;