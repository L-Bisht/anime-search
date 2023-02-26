import React from "react";

type Tprops = {
  character: any;
};

function CharacterCard({ character }: Tprops) {
  return (
    <div
      key={character.mal_id}
      className="w-30 h-50 rounded-lg shadow-md hover:cursor-pointer lg:max-w-sm m-2 border-2 border-gray-400 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105"
    >
      <img
        src={character.images?.jpg?.image_url || ""}
        alt={character.name}
        className="ml-auto mr-auto h-48"
      />
      <div className="p-4">
        <div className="content-center">
          <h4 className="text-xl font-bold tracking-tight text-black-600">
            {character.name?.slice(0, 10) +
              (character.name.length > 10 ? "..." : "")}
          </h4>
        </div>
        <p className="mb-2 leading-normal">
          {character.about?.slice(0, 50) + "..."}
        </p>
        {/* <a
          href="#"
          className="text-black-600 hover:text-black-500 underline text-sm"
        >
          Read More
        </a> */}
      </div>
    </div>
  );
}

export default CharacterCard;
