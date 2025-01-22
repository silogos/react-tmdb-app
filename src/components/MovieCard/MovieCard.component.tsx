import { NavLink } from "react-router";
import { getReleaseYear } from "@/utils/Movie.utils";

import { MovieCardProps } from "./MovieCard.type";
import Poster from "../Poster";

function MovieCard({ id, title, releaseDate, poster }: MovieCardProps) {
  return (
    <NavLink
      to={`/movie/${id}`}
      className="flex flex-col gap-3 group relative overflow-hidden cursor-pointer rounded-lg"
    >
      <Poster poster={poster}>
        <div className="hidden lg:flex duration-150 group-hover:opacity-100 opacity-0 absolute inset-0 justify-center items-center z-20 bg-black bg-opacity-50" />
        <div className="hidden lg:flex absolute bottom-0 group-hover:opacity-100 opacity-0 duration-150 w-full flex-col p-4 text-white bg-black bg-opacity-50 z-30">
          <div className="text-base mb-1">{title}</div>
          <div className="text-sm text-gray-400">
            {getReleaseYear(releaseDate)}
          </div>
        </div>
      </Poster>
      <div className="flex lg:hidden flex-col text-gray-300">
        <div className="text-base mb-1">{title}</div>
        <div className="text-sm text-gray-400">
          {getReleaseYear(releaseDate)}
        </div>
      </div>
    </NavLink>
  );
}

export default MovieCard;
