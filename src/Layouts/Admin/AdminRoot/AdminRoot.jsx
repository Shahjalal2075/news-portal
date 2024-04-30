import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader";

const AdminRoot = () => {
    return (
        <div className=" container mx-auto">
            <AdminHeader></AdminHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminRoot;