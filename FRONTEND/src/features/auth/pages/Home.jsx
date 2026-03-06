import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth.context";
import { useAuth } from "../hooks/useAuth";
import "../styles/home.scss";
import { Link, useNavigate } from "react-router";

const Home = () => {
  const { handleGetMe, handleLogout } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, []);

  const context = useContext(AuthContext);
  const { user, loding } = context;
  console.log(user);
  const navigate = useNavigate();

  async function handleLogoutSubmit() {
    const data = await handleLogout();
    console.log(data);
    navigate("/");
  }

  if (loding) {
    return (
      <main>
        <h1>Loding...</h1>
      </main>
    );
  }

  if (!user) {
    return (
      <main>
        <h1>Token not provided</h1>
       <Link to={"/"} className="toggle button">Login</Link>
      </main>
    );
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
