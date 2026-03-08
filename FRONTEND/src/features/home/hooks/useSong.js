import { useContext } from "react";
import { SongContext } from "../song.context";
import { getSong } from "../services/song.api";

export const useSong = () => {
  const context = useContext(SongContext);

  const { loding, setLoding, song, setSong } = context;

  async function handleGetSong({ mood }) {
    setLoding(true);
    try {

      const data = await getSong({ mood });

      console.log(mood, data)
      setSong(data.song);
    } catch (error) {
      console.log(error);
    } finally {
      setLoding(false);
    }
  }

  return { loding, song, handleGetSong };
};
