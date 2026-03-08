import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function createSong({file, mood}) {
  const formData = new FormData();

  formData.append("song", file);
  formData.append("mood", mood);

  const respons = await api.post(formData);

  return respons.data;
}

export async function getSong({ mood }) {
    console.log(mood)
  const respons = await api.get(`/songs?mood=${mood}`);

  return respons.data;
}
