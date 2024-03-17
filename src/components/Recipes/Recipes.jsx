import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const[recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
        console.log(recipes);
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Recipes: {recipes.length}</h1>
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;