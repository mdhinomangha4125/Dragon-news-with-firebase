import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Category from "../Components/Category";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path:"/",
                element: <Home>Home page</Home>
            },
            {
                path: "/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: "/about",
        element: <h2>About LayOut</h2>
    },
    {
        path: "/auth",
        element: <h2>Auth LayOut</h2>
    },
    {
        path: "/news",
        element: <h2>News LayOut</h2>
    },
    
    {
        path: "/*",
        element: <h2>Error Page</h2>
    },
])

export default router;