import { useAuth } from "../hooks/useAuth";
import "../styles/home.scss";
import { Navigate, useNavigate } from "react-router";

const Home = () => {
  const { user, loding, handleLogout } = useAuth();

  console.log(user);
  const navigate = useNavigate();

  async function handleLogoutSubmit() {
    const data = await handleLogout();
    console.log(data);
    navigate("/login");
  }

  console.log("home")

  if (loding) {
    return (
      <main>
        <h1>Loding...</h1>
      </main>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />
  }
  return (
    <main className="home_page">
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>

      <button type="submit" className="button" onClick={handleLogoutSubmit}>
        Logout
      </button>
    </main>
  );
};

export default Home;
