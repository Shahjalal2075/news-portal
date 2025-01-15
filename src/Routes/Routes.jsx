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
import NewsAdd from "../Layouts/Admin/NewsAdd/NewsAdd";
import Test from "../Layouts/Test/Test";


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
                        path: "/dashboard/:link",
                        element: <CategoryNewsList></CategoryNewsList>,
                        loader: ({ params }) => fetch(`http://localhost:5000/admin-menu/${params.link}`)
                    },
                    {
                        path: "/dashboard/:link/add",
                        element: <NewsAdd></NewsAdd>,
                        loader: ({ params }) => fetch(`http://localhost:5000/admin-menu/${params.link}`)
                    }
                ]
            },
            {
                path: "/login",
                element: <AdminLogin></AdminLogin>
            },
            {
                path: "/test",
                element: <Test></Test>
            }
        ]
    },
]);

export default Routes;