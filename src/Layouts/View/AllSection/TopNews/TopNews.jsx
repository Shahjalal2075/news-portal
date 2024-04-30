import { useEffect, useState } from "react";
import TopNewsCard from "../TopNewsCard/TopNewsCard";

const TopNews = () => {

    const [topHeadNews, setTopHeadNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => {
                const topHeadData = data.filter(item => item.isTopHead === true);
                const topNewsData = data.filter(item => item.isTopNews === true);
                const top1Data = topHeadData.slice(0, 1);
                const top4Data = topNewsData.slice(0, 4);
                setTopHeadNews(top1Data);
                setTopNews(top4Data);
            });
    }, [])

    return (
        <div className="grid grid-cols-4 gap-3">

            {
                topHeadNews.map(news => <TopNewsCard
                    key={news._id}
                    news={news}
                ></TopNewsCard>)
            }

            {
                topNews.map(news => <TopNewsCard
                    key={news._id}
                    news={news}
                ></TopNewsCard>)
            }

            {/* <div className="col-span-2 row-span-2">
                <div className="card">
                    <Link to={''}>
                        <img src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                    </Link>
                    <Link className="bg-[#1D1D1D] text-[#fff] px-2 py-1 text-sm font-medium absolute transform top-[10px] left-[10px]">খেলাধুলা</Link>
                    <div className="absolute bottom-[0px] bg-[#111] bg-opacity-[70%] py-1 w-full w-full">
                        <div className="flex gap-4 text-sm text-[#fff] font-bold px-2 items-center">
                            <h2>Nishi Barta</h2>
                            <p>১৫ ই জুন, ২০২২</p>
                        </div>
                        <div className="text-[#fff] font-bold p-2 text-lg">
                            <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <Link to={''}>
                        <img src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                    </Link>
                    <Link className="bg-[#1D1D1D] text-[#fff] px-2 py-1 text-sm font-medium absolute transform top-[10px] left-[10px]">খেলাধুলা</Link>
                    <div className="absolute bottom-[0px] bg-[#111] bg-opacity-[70%] py-1 w-full">
                        <div className="flex gap-4 text-xs text-[#fff] font-bold px-2 items-center">
                            <h2>Nishi Barta</h2>
                            <p>১৫ ই জুন, ২০২২</p>
                        </div>
                        <div className="text-[#fff] font-bold p-2 text-[13px]">
                            <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <Link to={''}>
                        <img src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                    </Link>
                    <Link className="bg-[#1D1D1D] text-[#fff] px-2 py-1 text-sm font-medium absolute transform top-[10px] left-[10px]">খেলাধুলা</Link>
                    <div className="absolute bottom-[0px] bg-[#111] bg-opacity-[70%] py-1 w-full">
                        <div className="flex gap-4 text-xs text-[#fff] font-bold px-2 items-center">
                            <h2>Nishi Barta</h2>
                            <p>১৫ ই জুন, ২০২২</p>
                        </div>
                        <div className="text-[#fff] font-bold p-2 text-[13px]">
                            <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="card">
                    <Link to={''}>
                        <img src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                    </Link>
                    <Link className="bg-[#1D1D1D] text-[#fff] px-2 py-1 text-sm font-medium absolute transform top-[10px] left-[10px]">খেলাধুলা</Link>
                    <div className="absolute bottom-[0px] bg-[#111] bg-opacity-[70%] py-1 w-full">
                        <div className="flex gap-4 text-xs text-[#fff] font-bold px-2 items-center">
                            <h2>Nishi Barta</h2>
                            <p>১৫ ই জুন, ২০২২</p>
                        </div>
                        <div className="text-[#fff] font-bold p-2 text-[13px]">
                            <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TopNews;