import SearchIcon from '../../assets/search.svg';
import PersonIcon from '../../assets/person.svg';
const Navbar = () => {
    return (
        <div className='w-[90%] max-w-6xl my-0 mx-auto mt-2 md:mt-6 '>
            <div className='flex justify-between items-center flex-col md:flex-row space-x-2'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-bold'>
                        Recipe Calories
                    </h1>
                </div>
                <div className='space-x-2 md:space-x-6'>
                    <a className='hover:underline' href="">Home</a>
                    <a className='hover:underline' href="">Recipes</a>
                    <a className='hover:underline' href="">About</a>
                    <a className='hover:underline' href="">Search</a>
                </div>
                <div className='flex items-center space-x-2 md:space-x-6'>
                    <div className='flex items-center border-2 border-black border-solid  rounded-xl pr-0.5'><a href=""><img className='min-w-8' src={SearchIcon} alt="" />
                    </a> <input className='border-none outline-none' type="text" /></div>
                    <div className='rounded-full '><a href=""><img className='min-w-8' src={PersonIcon} alt="" /></a></div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;