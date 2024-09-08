import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <p>Error: 404 Page Not Found</p>
        </div>
    );
}

export default ErrorPage;
