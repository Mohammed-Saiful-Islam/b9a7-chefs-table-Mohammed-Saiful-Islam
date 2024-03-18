import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
        console.log(recipes);
    }, [])
    return (
        <div className="w-[90%] max-w-6xl my-0 mx-auto mt-2 md:mt-6">
            <div className="space-y-6"><h1 className="lexend-font text-2xl md:text-5xl font-bold text-center text-black">Our Recipes</h1>
                <p className="text-base md:text-xl font-normal text-center opacity-100">These are some of our recipes you may like them, we hope that if you try it once you will try it again and again because these are delicius.</p>

            </div>
            <h1 className="text-4xl">Recipes: {recipes.length}</h1>
            <div className="md:flex">
                <div className="md:w-[60%] md:grid md:grid-cols-2">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                    }
                </div>
                <div className="md:w-[40%]">
                    <WantToCook></WantToCook>
                    <CurrentlyCooking></CurrentlyCooking>
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes = {

}

export default Recipes;