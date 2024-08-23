import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const AdminHeader = () => {
    const currentDate = new Date();

    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const week = weekNames[currentDate.getDay()];
    const month = monthNames[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const { user, signOutUser } = useContext(AuthContext);

    const [isBtn, setIsBtn] = useState(true);

    const handleLogOutToggle = () => {
        setIsBtn(!isBtn);
    }

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    return (
        <div className="flex justify-between mt-4 py-4 bg-[red] rounded-xl px-4 font-medium items-center">
            <div className="flex flex-col text-[#fff]">
                <div className="flex gap-6">
                    <div className="flex gap-1 items-center">
                        <p><FaLocationDot /></p>
                        <p>Bangladesh</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p><TiWeatherPartlySunny /></p>
                        <p>31°</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <p><MdOutlineDateRange /></p>
                    <p>Today ({week}, {date} {month}, {year})</p>
                </div>
            </div>
            <div className="">
                <Link to={`/dashboard`}>
                    <img src="https://i.ibb.co/qyvRMH2/logolight.png" alt="Nishi Barta" />
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <button className="ml-4" onClick={handleLogOutToggle}>
                    {
                        <img className="mask mask-circle w-10" src="https://i.ibb.co/0rcvLrD/users.png" />
                    }
                </button>
                {
                    isBtn ? <p className="text-[#fff] font-medium">Shahjalal</p> : <button className="font-bold text-[#fff]" onClick={handleLogOut}>Logout</button>
                }
            </div>

        </div>
    );
};

export default AdminHeader;