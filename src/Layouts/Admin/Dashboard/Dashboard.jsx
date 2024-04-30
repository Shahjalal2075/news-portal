import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/admin-menu`)
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => a.sl - b.sl);
                setMenu(sortedData);
            });
    }, [])

    return (
        <div className="pt-14">
            <div className="grid grid-cols-3 gap-6">
                {
                    menu.map(item =>
                        <Link key={item.link} to={`/dashboard/${item.link}`} className="bg-[red] rounded-xl">
                            <h2 className=" text-center text-[#fff] py-6 text-3xl font-bold">{item.name}</h2>
                        </Link>)
                }

            </div>
        </div>
    );
};

export default Dashboard;