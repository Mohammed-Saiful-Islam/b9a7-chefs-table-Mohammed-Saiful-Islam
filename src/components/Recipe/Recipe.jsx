import TimeIcon from '../../assets/time.svg';
import FireIcon from '../../assets/fire.svg';
import PropTypes from 'prop-types';

const Recipe = ({ recipe,handleRecipe }) => {
    // console.log(recipe);
    const { img, title, details, ingredients, time, calories } = recipe;
    return (
        <div className=''>
            <div className='border-2 border-black border-solid p-2 min-h-[700px]'>
                <img src={img} alt="" />
                <h1 className='text-3xl font-bold'>{title}
                </h1>
                <p className='text-2xl font-semibold'>
                    {details}</p>
                <hr />
                <p className='text-xl font-medium'>{ingredients}</p>
                <hr />
                <div className='flex justify-between'>
                    <div className='flex space-x-3 text-xl font-medium'><img src={TimeIcon} alt="" /> <p>{time}</p></div>
                    <div className='flex space-x-3 text-xl font-medium'><img src={FireIcon} alt="" /><p>{calories}</p></div>
                </div>
                <br />
                <button onClick={()=>handleRecipe(recipe)} className='bg-green-600 p-3 rounded-3xl text-white border-none hover:bg-orange-800'>Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipe;