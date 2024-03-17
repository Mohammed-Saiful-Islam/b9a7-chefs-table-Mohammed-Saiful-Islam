import TimeIcon from '../../assets/time.svg';
import FireIcon from '../../assets/fire.svg';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { img, title, details, ingredients, time, calories } = recipe;
    return (
        <div>
            <div>
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
            </div>
        </div>
    );
};

export default Recipe;