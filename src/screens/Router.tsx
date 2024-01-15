import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import About from "./About";
import Root from "../Root";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./components/NotFound";
import User from "./components/users/User";
import Followers from "./components/users/Followers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
