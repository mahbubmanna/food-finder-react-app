import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb, strYoutube } = props.meal;
    const history = useHistory();

    const url = `meal/${idMeal}`
    const handleClick = () => {
        history.push(url)
    }

    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={strMealThumb} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{strMeal}</div>
                <p className="text-gray-700 text-base">
                    {strInstructions.slice(0, 100)}... <Link to={url}><span class="text-blue-700">See more</span></Link>
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={url}>
                    <button className="inline-block bg-yellow-700 bg-opacity-25 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Meal Details</button>
                </Link>
                <button onClick={handleClick} className="inline-block bg-yellow-700 bg-opacity-25 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Show Details</button>
            </div>
        </div>
    );
};

export default Meal;