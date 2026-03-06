import "../styles/register.scss";
import { Link, useNavigate } from "react-router";
import FormGroup from "../components/formGroup";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loding, handleRegister } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const success = await handleRegister({ username, email, password });

      if (success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loding) {
    return (
      <main>
        <h1>Loding...</h1>
      </main>
    );
  }

  return (
    <main className="register_page">
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
          <h1>Register</h1>
          <form action="" onSubmit={handleSubmit}>
            <FormGroup
              placeholder={"Username"}
              label={"username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormGroup
              placeholder={"Email"}
              label={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormGroup
              placeholder={"Password"}
              label={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button register_btn">
              Register
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
            Alreday have account?{" "}
            <Link to={"/login"} className="toggle">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
