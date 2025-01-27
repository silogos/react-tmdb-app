import { NavLink } from "react-router";
import { getReleaseYear } from "@/utils/Movie.utils";

import { MovieCardProps } from "./MovieCard.type";
import Poster from "@/components/Poster";
import { StarIcon } from "@heroicons/react/24/solid";

const _renderInfo = ({ title, releaseDate }: MovieCardProps) => {
  return (
    <>
      <div className="text-base mb-1">{title}</div>
      <div className="text-sm text-gray-400">{getReleaseYear(releaseDate)}</div>
    </>
  );
};

function MovieCard(props: MovieCardProps) {
  const { id, poster, voteAverage } = props;

  return (
    <NavLink
      to={`/movie/${id}`}
      className="flex flex-col gap-3 group relative overflow-hidden cursor-pointer rounded-lg"
    >
      <Poster poster={poster}>
        <div className="hidden lg:flex duration-150 group-hover:opacity-100 opacity-0 absolute inset-0 justify-center items-center z-20 bg-black bg-opacity-50" />
        <div className="hidden lg:flex absolute bottom-0 group-hover:opacity-100 opacity-0 duration-150 w-full flex-col p-4 text-white bg-black bg-opacity-50 z-30">
          {_renderInfo(props)}
        </div>
        <div className="lg:group-hover:hidden absolute top-3 right-3 px-2 py-1 bg-gray-50 rounded-lg flex flex-col self-start justify-center items-center text-center text-xs text-gray-900 font-medium mb-1">
          <StarIcon className="size-5" />
          {voteAverage.toFixed(1)}
        </div>
      </Poster>
      <div className="flex lg:hidden flex-col text-gray-300 w-auto">
        {_renderInfo(props)}
      </div>
    </NavLink>
  );
}

export default MovieCard;
