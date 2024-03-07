import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
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
                    </div>
                    <div className="">
                        <button className="text-lg text-[#fff] font-medium"><FaSearch /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;