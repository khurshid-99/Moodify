import "./features/shared/styles/global.scss";
import FaceExpression from "./features/Expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import { router } from "./routes/App.router";
import { AuthProvider } from "./features/auth/Auth.context";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
