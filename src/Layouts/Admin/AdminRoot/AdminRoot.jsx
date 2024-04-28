import { Outlet } from "react-router-dom";

const AdminRoot = () => {
    return (
        <div className=" container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default AdminRoot;