import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayOuts/LeftAside';
import RightAside from '../Components/HomeLayOuts/RightAside';
import Category from '../Components/Category';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto m-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-4 gap-5'>
                <aside className='sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-2'>
                    {state == "loading"? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='sticky top-0 h-fit'>
                    <RightAside ></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;