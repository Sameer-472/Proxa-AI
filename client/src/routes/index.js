import App from "../App";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <AppHome />,
            },
        ],
    }
])