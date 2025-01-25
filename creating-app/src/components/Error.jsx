import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  
  return <h1>Status {error.status}: You Made a Mistake; Kindly Check First</h1>;
};

export default Error;
