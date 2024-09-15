import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);


  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

return (
  <div className="container mx-auto p-6 relative">
    <div className="flex justify-start mb-6 cursor-pointer md:justify-center lg:justify-center lg:font-semibold">
      <h3 className='font-bold cursor-pointer text-sm py-2 px-2 bg-gray-900'>RECIPE APP</h3>
    </div>

    <button
      onclick={toggleAddForm}
      className="absolute top-4 right-4 bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition duration-300 flex items-center"
    >
     <FontAwesomeIcon icon={showAddForm ? faTimes : faPlus} className="mr-2" />
     {showAddForm ? 'close Form' : 'Add new Recipe'}
    </button>
    {showAddForm && <AddRecipeForm />}

    <p className='font-semibold text-gray-700'>
      Click on a recipe name to view its details and add comments. You can also create, and share your favorite recipe
    </p>

    <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Enjoy our Recipe</h1>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 ig:grid-cols-3">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="flex justify-center items-center w-full h-40">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-52 rounded-md h-52 object-cover"
            />
          </div>
          <div className="p-4 mg">
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <Link
            to={`/recipe/${recipe.id}`}
            className="mt-4 inline-block bg-grat-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">More Details   
            </Link>
          </div>
        </div>
      )
      )
      }
    </div>
  </div>
);  
};


export default HomePage;