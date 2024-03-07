import { Outlet } from "react-router-dom";
import Header from "../SharedPage/Header/Header";

const ViewRoot = () => {
    return (
        <div className="">
            <div className="">
                <Header></Header>
            </div>
            <div className=" container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ViewRoot;