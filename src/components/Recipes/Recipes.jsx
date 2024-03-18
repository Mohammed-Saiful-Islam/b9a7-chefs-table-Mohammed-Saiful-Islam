import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    const handleRecipe = (p) => {
        setRecipe(p)
    }
    console.log(setRecipe.length);
    return (
        <div className="w-[90%] max-w-6xl my-0 mx-auto mt-2 md:mt-6">
            <div className="space-y-6"><h1 className="lexend-font text-2xl md:text-5xl font-bold text-center text-black">Our Recipes</h1>
                <p className="text-base md:text-xl font-normal text-center opacity-100">These are some of our recipes you may like them, we hope that if you try it once you will try it again and again because these are delicius.</p>

            </div>
            <h1 className="text-4xl">Recipes: {recipes.length}</h1>
            <div className="md:flex">
                <div className="md:w-[60%] md:grid md:grid-cols-2">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} handleRecipe={handleRecipe} recipe={recipe}></Recipe>)
                    }
                </div>
                <div className="md:w-[40%]">
                    <div>
                        <div className="">
                            <h1 className="text-center text-3xl font-bold">Want to cook: <span>0</span></h1>
                            <hr />
                            <div className="p-2">
                                <div>
                                    <div className="w-[80%]">
                                        <table className=" flex justify-evenly">
                                            <th>Name</th>
                                            <th>Time</th>
                                            <th>Calories</th>
                                        </table>
                                    </div>
                                    <div className="flex">
                                        <div className="w-[80%] ">
                                            <table className="flex justify-between text-xl font-medium">
                                                <p>0</p>
                                                <td className="">{recipe.title}</td>
                                                <td>{recipe.time}</td>
                                                <td>{recipe.calories}</td>
                                            </table>
                                        </div>
                                        <div>
                                            <button className="p-3 bg-green-600 text-white rounded-3xl hover:bg-orange-600 border-none">Preparing</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="">
                                <h1 className="text-center text-3xl font-bold">Currently Cooking: <span>0</span></h1>
                                <hr />
                                <div className="p-2">
                                    <div>
                                        <div className="">
                                            <table className=" flex justify-evenly">
                                                <th>Name</th>
                                                <th>Time</th>
                                                <th>Calories</th>
                                            </table>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <table className="flex justify-between">
                                                    <p>0</p>
                                                    <td className="">{recipe.title}</td>
                                                <td>{recipe.time}</td>
                                                <td>{recipe.calories}</td>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-end gap-6">
                                            <div>
                                                <div><p>Total Time =</p></div>
                                                <div><p>{recipe.time} </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div><p>Total Calories =</p></div>
                                                <div><p>{recipe.calories} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipes.propTypes = {

}

export default Recipes;