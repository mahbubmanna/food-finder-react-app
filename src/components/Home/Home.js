import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="p-10 w-3/4 m-auto">
            <h1 className="text-5xl">Welcome To <span className="text-yellow-500 font-extrabold">Food Finder</span></h1>
            <br />
            <br />
            <h2 className="text-3xl pb-2">To Discover Unlimited Recipes</h2>
            <button className="button-search text-3xl text-yellow-500 bg-black py-4 px-8 rounded-full"> <Link to="/search">Search </Link></button>
        </div>
    );
};

export default Home;