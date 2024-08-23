import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LatestNewsCard from "../../AllSection/LatestNewsCard/LatestNewsCard";

const RightSlider = () => {
    const [latestNews, setLatestNews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(data => {
                const top8Data = data.slice(0, 8);
                setLatestNews(top8Data);
            });
    }, [])
    return (
        <div className="ml-6">
            {/* Ads */}
            <div className="bg-[#F8F8F8] flex justify-center items-center">
                <div className="p-12">
                    <img src="https://i.ibb.co/YPNL48R/ad-300x250.jpg" alt="" />
                </div>
            </div>

            {/* Latest News */}
            <div className="bg-[#F8F8F8] my-10 p-4">
                <div className="bg-[#DA0000] text-[#fff] font-medium text-lg py-1 ">
                    <h2 className="text-center">সর্বশেষ</h2>
                </div>
                <div className="mt-3">

                    {
                        latestNews.map(news => <LatestNewsCard
                            key={news._id}
                            news={news}
                        ></LatestNewsCard>)
                    }

                </div>
            </div>

            {/* Ads */}
            <div className="bg-[#F8F8F8] flex justify-center items-center">
                <div className="p-12">
                    <img src="https://i.ibb.co/YPNL48R/ad-300x250.jpg" alt="" />
                </div>
            </div>

            {/* Facebook page */}
            {/* <div className="bg-[#F8F8F8] flex justify-center items-center my-10">
                <div className="p-8">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnishibarta%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="340"
                        height="500"
                        style={{ border: 'none', overflow: 'hidden' }}
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div> */}

            {/* AI Chatbot Test */}

            <div className="bg-[#F8F8F8] flex justify-center items-center my-10">
                <div className="p-8">
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/gk7ZJzAbBcPF_csPdlHDD"
                        title="Chatbot"
                        width="100%"
                        style={{ height: '100%', minHeight: '700px' }}
                        frameBorder="0"
                    ></iframe>

                </div>
            </div>{/*  */}

            {/* Ads */}
            <div className="bg-[#F8F8F8] flex justify-center items-center">
                <div className="p-12">
                    <img src="https://i.ibb.co/YPNL48R/ad-300x250.jpg" alt="" />
                </div>
            </div>

            {/* Chakrir News */}
            <div className="bg-[#F8F8F8] my-10 p-4">
                <div className="bg-[#DA0000] text-[#fff] font-medium text-lg py-1 ">
                    <h2 className="text-center">চাকরির সর্বশেষ খবর</h2>
                </div>
                <div className="mt-3">
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ads */}
            <div className="bg-[#F8F8F8] flex justify-center items-center">
                <div className="p-12">
                    <img src="https://i.ibb.co/YPNL48R/ad-300x250.jpg" alt="" />
                </div>
            </div>

            {/* Chakrir News */}
            <div className="bg-[#F8F8F8] my-10 p-4">
                <div className="bg-[#DA0000] text-[#fff] font-medium text-lg py-1 ">
                    <h2 className="text-center">অজানা কিছু কথা</h2>
                </div>
                <div className="mt-3">
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <hr className="border border-[#969595] w-full" />
                        <div className="py-3 flex justify-between gap-2">
                            <div className="">
                                <Link to={''}>
                                    <img className="w-40" src="https://i.ibb.co/23Nnt3y/shakib.png" alt="" />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex gap-4 text-xs text-[#111] font-bold px-2 items-center">
                                    <h2>Nishi Barta</h2>
                                    <p>১৫ ই জুন, ২০২২</p>
                                </div>
                                <div className="text-[#111] font-bold p-2 text-[13px]">
                                    <Link>এক মাস পর হিলি স্থলবন্দর দিয়ে আবারও আলু আমদানি শুরু</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSlider;