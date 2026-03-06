import { useContext, useEffect } from "react";
import { register, login, getMe, logout } from "../services/auth.api";
import { AuthContext } from "../Auth.context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loding, setLoding } = context;

  const handleRegister = async ({ username, email, password }) => {
    setLoding(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
      return true
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  const handleLogin = async ({ username, email, password }) => {
    setLoding(true);
    try {
      const data = await login({ username, email, password });
      setUser(data.user);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoding(false);
    }
  };

  const handleGetMe = async () => {
    setLoding(true);
    try {
      const data = await getMe();
      setUser(data.user);
      console.log(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  const handleLogout = async () => {
    setLoding(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout,
    loding,
    user,
  };
};
