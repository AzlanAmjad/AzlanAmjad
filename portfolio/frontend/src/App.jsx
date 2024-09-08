import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "work",
                element: <Work />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
