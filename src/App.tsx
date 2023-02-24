import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState<any[]>([]);
  useEffect(() => {
    const getAllCharacterUrl = new URL("https://api.jikan.moe/v4/characters");
    getAllCharacterUrl.searchParams.set("limit", "5");
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
    <div className="flex font-sans">
      {characterList.map((character) => (
        <figure
          key={character.mal_id}
          className="w-32 md:w-32 lg:w-72 md:rounded-xxl shadow-xl m-5"
        >
          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-xxl rounded-full mx-auto"
            src={character.images?.jpg?.image_url || ""}
            alt={character.name}
            style={{ width: "384", height: "512" }}
          />
          <div className="pt-6 md:p-8 text-center space-y-4">
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {character.name}
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}

export default App;
