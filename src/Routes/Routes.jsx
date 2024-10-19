import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Components/Shared/ErrorPage";
import Wishlist from "../Pages/Wishlist";
import ExploreBooks from "../Pages/ExploreBooks";
import BookDetailsPage from "../Pages/BookDetailsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/explore",
                element: <ExploreBooks />,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },
            {
                path: "/book-details/:id",
                element: <BookDetailsPage />,
                loader: ({ params }) => fetch(`https://gutendex.com/books/${params.id}`)
            },
        ]
    },
]);

export default router;