import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [characterList, setCharacterList] = useState<any[]>([]);

  useEffect(() => {
    const getAllCharacterUrl = new URL("https://api.jikan.moe/v4/characters");
    getAllCharacterUrl.searchParams.set("limit", "24");
    getAllCharacterUrl.searchParams.set("order_by", "favorites");
    getAllCharacterUrl.searchParams.set("sort", "desc");

    axios
      .get(getAllCharacterUrl.toString())
      .then((response) => response.data)
      .then((response) => {
        setCharacterList(response.data);
      });
  }, []);

  return (
    <>
      <SearchBar setCharacterList={setCharacterList} />

      <div className="grid gap-2 m-5 lg:grid-cols-4">
        {characterList.map((character) => (
          <CharacterCard character={character} key={character.mal_id} />
        ))}
      </div>
    </>
  );
}

export default App;
