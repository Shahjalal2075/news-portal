import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch, FaFacebookF, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import LatestNewsHeading from "../LatestNewsHeading/LatestNewsHeading";

const Header = () => {

    const currentDate = new Date();

    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const week = weekNames[currentDate.getDay()];
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    return (
        <div className="">
            {/* TopBar */}
            <div className="bg-[#1D1D1D]">
                <div className="container mx-auto py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 text-sm text-[#fff] items-center">
                            <div className="flex gap-1 items-center">
                                <p><FaLocationDot /></p>
                                <p>Bangladesh</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <p><TiWeatherPartlySunny /></p>
                                <p>31°</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <p><MdOutlineDateRange /></p>
                                <p>Today ({week}, {date} {month}, {year})</p>
                            </div>

                        </div>
                        <div className="flex gap-4 items-center text-sm text-[#fff]">
                            <a href="https://facebook.com"><FaFacebookF /></a>
                            <a href="https://facebook.com"><FaTwitter /></a>
                            <a href="https://facebook.com"><FaYoutube /></a>
                            <a href="https://facebook.com"><FaGoogle /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logobar */}
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <div className="">
                        <img src="https://i.ibb.co/jzHTFgY/logodark.png" alt="Nishi Barta" />
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/LY8TWzz/ad-728x90.jpg" alt="Ads" />
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="bg-[#DA0000]">
                <div className="container mx-auto">
                    <div className="flex justify-between py-6 items-center">
                        <div className="flex gap-8 items-center">
                            <NavLink to={'/'} className=" text-lg text-[#fff] font-medium"><IoHome /></NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">জাতীয়</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">যশোর</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">খুলনা</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">রাজনীতি</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">খেলাধুলা</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">আন্তর্জাতিক</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">বিনোদন</NavLink>
                            <NavLink to={'/'} className=" text-base text-[#fff] font-medium">চাকরি</NavLink>
                        </div>
                        <div className="">
                            <button className="text-lg text-[#fff] font-medium"><FaSearch /></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mx-auto py-6">
                <LatestNewsHeading></LatestNewsHeading>
            </div>
        </div>
    );
};

export default Header;