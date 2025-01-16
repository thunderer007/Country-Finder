import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <div>Page not found ...</div>;
  }
};

export default ErrorPage;
