import "./features/shared/styles/global.scss";
import FaceExpression from "./features/Expression/components/FaceExpression";
import { RouterProvider } from "react-router";
import { router } from "./routes/App.router";
import { AuthProvider } from "./features/auth/Auth.context";
import { SongProvider } from "./features/home/song.context";

const App = () => {
  return (
    <AuthProvider>
      <SongProvider>
        <RouterProvider router={router} />
      </SongProvider>
    </AuthProvider>
  );
};

export default App;
