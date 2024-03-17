import BannerImg from "../../assets/banner.jpg";
const Banner = () => {
    return (
        <div className="w-[90%] max-w-6xl my-0 mx-auto">
            <div className="">
                <div>
                    <img src={BannerImg} alt="" />
                </div>
                <div className="-translate-y-[400%]"><h1 className="lexend-font text-5xl font-bold text-center">Discover an exceptional cooking class tailored for you!</h1>
                <p className=""></p>These are some of our delicius dihses you may like them, we are always try our best to serve the best dishes</div>
            </div>
        </div>
    );
};

export default Banner;