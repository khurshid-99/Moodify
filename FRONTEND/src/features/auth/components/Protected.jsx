import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Protected = ({ children }) => {
  const { user, loding } = useAuth();

  if (loding) {
    return (
      <main>
        <h1>Loding...</h1>
        {console.log("pppp")}
      </main>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Protected;

