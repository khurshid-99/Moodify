import { Link, useNavigate } from "react-router";
import "../styles/login.scss";
import FormGroup from "../components/formGroup";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { loding, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const success = await handleLogin({ username, password });
    console.log(success);
    if (success) {
      navigate("/home");
    }
  }

  if (loding) {
    return (
      <main>
        <h1>Loding...</h1>
        {console.log("Login")}
      </main>
    );
  }

  return (
    <main className="login_page">
      <div className="left">
        <div>
          <h1>Moodify</h1>
        </div>

        <div>
          <h2>Welcome!</h2>
        </div>
      </div>
      <div className="right">
        <div className="form_container">
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <FormGroup
              placeholder={"Email or Username"}
              label={"email"}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <FormGroup
              placeholder={"Password"}
              label={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button login_btn">
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </button>
          </form>
          <p>
            Don't have account?{" "}
            <Link to={"/register"} className="toggle">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
