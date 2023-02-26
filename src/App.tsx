import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const searchCharacter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const charactersUrl = new URL("https://api.jikan.moe/v4/characters");
    charactersUrl.searchParams.set("letter", searchText);
    charactersUrl.searchParams.set("limit", "5");
    axios
      .get(charactersUrl.toString())
      .then((response) => response.data)
      .then((response) => {
        setCharacterList(response.data);
        setSearchText("");
      });
  };
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
    <>
      <form onSubmit={searchCharacter}>
        <label
          htmlFor="character-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="character-search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Character's Name"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex font-sans">
        {characterList.map((character) => (
          <figure
            key={character.mal_id}
            className="w-32 md:w-32 lg:w-72 md:rounded-xl rounded-full shadow-xl m-5"
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
    </>
  );
}

export default App;
