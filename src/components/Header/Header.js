import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <div className="bg-black text-white pt-8 pb-2">
            <h1 className="text-5xl pb-3 text-yellow-500 font-extrabold">Food Finder</h1>
            <nav>
                <NavLink className="p-2" activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink className="p-2" activeStyle={activeStyle} to="/search">Search</NavLink>
                <NavLink className="p-2" activeStyle={activeStyle} to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;