import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  const respons = await api.post("/auth/register", {
    username,
    email,
    password,
  });

  return respons.data;
}

export async function login({ username, email, password }) {
  const response = await api.post("/auth/login", {
    username,
    email,
    password,
  });
  console.log(response.data);

  return response.data;
}

export async function getMe() {
  const respons = await api.get("/auth/get-me");

  return respons.data;
}

export async function logout() {
  const respons = await api.get("/auth/logout");

  return respons.data;
}
