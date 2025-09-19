import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(resp => resp.json());

const Category = () => {
    const categoriesList = use(categoryPromise);
    // console.log(categoriesList)
    return (
        <div>
            <h3 className='font-bold'>All Categories ({categoriesList.length})</h3>
            <div className='flex flex-col'>
                {
                    categoriesList.map((category) => (<NavLink 
                    to={`/category/${category.id}`}
                    className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent lg:col-span-1"}
                    key={category.id}
                    >
                        {category.name}
                    </NavLink>))
                }
            </div>
        </div>
    );
};

export default Category;