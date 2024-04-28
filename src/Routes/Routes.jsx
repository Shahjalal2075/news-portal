import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Layouts/ErrorPage/ErrorPage";
import Home from "../Layouts/View/Home/Home";
import ViewRoot from "../Layouts/View/ViewRoot/ViewRoot";
import AdminRoot from "../Layouts/Admin/AdminRoot/AdminRoot";
import Dashboard from "../Layouts/Admin/Dashboard/Dashboard";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <ViewRoot></ViewRoot>,
                children: [
                    {
                        path: "/",
                        element: <Home></Home>
                    }
                ]
            },
            {
                path: "/admin",
                element: <AdminRoot></AdminRoot>,
                children: [
                    {
                        path: "/admin",
                        element: <Dashboard></Dashboard>
                    }
                ]
            }
        ]
    },
]);

export default Routes;