import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
const Discover = () => {
  console.log(genres);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full sm:flex-row flex-col mt-4 mb-10">
          <h3 className="font-bold text-3xl text-left text-white">Discover</h3>
          <select
            onChange={() => {}}
            value=""
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-8 sm:justify-start justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
            <SongCard key={song.key} song={song} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
