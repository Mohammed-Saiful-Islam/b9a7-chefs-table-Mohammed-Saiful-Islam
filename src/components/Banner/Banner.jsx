import BannerImg from "../../assets/banner.jpg";
const Banner = () => {
    const imageURL = BannerImg;
    return (
        <>
            <div className="w-[90%] max-w-6xl my-0 mx-auto mt-2 md:mt-6">
                <div className="">
                    <div
                        className="bg-cover bg-center w-full h-[700px] flex justify-center items-center bg-opacity-50 rounded-2xl"
                        style={{
                            backgroundImage: `url(${imageURL})`
                        }}
                    >
                        <div className="space-y-6"><h1 className="lexend-font text-2xl md:text-5xl font-bold text-center text-black">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="text-base md:text-xl font-normal text-center opacity-100">These are some of our delicius dihses you may like them, we are always try our best to serve the best dishes</p>
                            <div className="flex items-center justify-center space-x-3">
                                <button className="bg-green-500 p-3 rounded-3xl">Explore Now</button>
                                <button className="p-3 rounded-3xl border-white text-white">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
/* <div className=""><h1 className="lexend-font text-5xl font-bold text-center">Discover an exceptional cooking class tailored for you!</h1>
                <p className=""></p>These are some of our delicius dihses you may like them, we are always try our best to serve the best dishes</div> */
export default Banner;