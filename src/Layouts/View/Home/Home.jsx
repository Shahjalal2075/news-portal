import CategoryHome from "../AllSection/CategoryHome/CategoryHome";
import TopNews from "../AllSection/TopNews/TopNews";
import RightSlider from "../SharedPage/RightSlider/RightSlider";

const Home = () => {

    return (
        <div className="" >
            <div>
                <TopNews></TopNews>
            </div>
            <div className="grid grid-cols-3 mt-8">
                <div className="col-span-2">
                    <CategoryHome></CategoryHome>
                </div>
                <div className="">
                    <RightSlider></RightSlider>
                </div>
            </div>
        </div>
    );
};

export default Home;