import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Layouts/ErrorPage/ErrorPage";
import Home from "../Layouts/View/Home/Home";
import ViewRoot from "../Layouts/View/ViewRoot/ViewRoot";
import AdminRoot from "../Layouts/Admin/AdminRoot/AdminRoot";
import Dashboard from "../Layouts/Admin/Dashboard/Dashboard";
import AdminLogin from "../Layouts/Admin/AdminLogin/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import CategoryNewsList from "../Layouts/Admin/CategoryNewsList/CategoryNewsList";


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
                path: "/dashboard",
                element: <PrivateRoute><AdminRoot></AdminRoot></PrivateRoute>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: "/dashboard/:category",
                        element: <CategoryNewsList></CategoryNewsList>,
                        loader: ({ params }) => fetch(`http://localhost:5000/admin-menu/${params.category}`)
                    }
                ]
            },
            {
                path: "/login",
                element: <AdminLogin></AdminLogin>
            }
        ]
    },
]);

export default Routes;