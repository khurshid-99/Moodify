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


// import { useAuth } from "../hooks/useAuth";
// import { Navigate, useNavigate } from "react-router";


// const Protected = ({ children }) => {
//   const { user, loding } = useAuth();
//   const navigate = useNavigate();

//   if (loding) {
//     return <h1>loading</h1>;
//   }

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default Protected;
