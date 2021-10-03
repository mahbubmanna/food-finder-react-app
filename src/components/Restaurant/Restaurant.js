import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

    return (
        <div>
            <input className="my-5 text-center w-1/2 m-auto border-2 rounded-lg border-gray-400 py-2" onChange={handleSearchField} placeholder="Search your meals here" type="text" />


            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
                {
                    meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div >
    );
};

export default SearchBox;