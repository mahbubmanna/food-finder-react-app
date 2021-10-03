import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState({})

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealId])

    console.log(meal);

    const { strMeal, strCategory, strInstructions, strMealThumb, strTags, strYoutube } = meal;

    return (
        <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                <img className="w-full" src={strMealThumb} alt="Mountain" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{strMeal}</div>
                    <p className="text-gray-700 text-base mb-2">Category: {strCategory}, Tags = {strTags}</p>
                    <p className="text-gray-700 text-justify text">{strInstructions}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={strYoutube}>Watch on Youtube</a></button>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;