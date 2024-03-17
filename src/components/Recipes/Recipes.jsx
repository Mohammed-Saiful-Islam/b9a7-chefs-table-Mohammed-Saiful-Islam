import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
        console.log(recipes);
    }, [])
    return (
        <div className="w-[90%] max-w-6xl my-0 mx-auto">
            <div className="md:w-[60%]">
                <h1 className="text-4xl">Recipes: {recipes.length}</h1>
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {

}

export default Recipes;