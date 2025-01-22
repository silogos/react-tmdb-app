import { PropsWithChildren } from "react";
import { PosterProps } from "./Poster.type";
import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";

function Poster({
  poster,
  className,
  children,
}: PropsWithChildren<PosterProps>) {
  return (
    <div
      className={`relative aspect-[8/12] bg-gray-700 bg-opacity-90 rounded-lg overflow-hidden ${className}`}
    >
      {poster && (
        <img
          className="w-full group-hover:lg:scale-110 duration-150"
          src={`https://image.tmdb.org/t/p/w300/${poster}`}
          alt="Movie Poster"
        ></img>
      )}

      {!poster && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 text-gray-300 text-center">
          <ViewfinderCircleIcon className="w-1/2" />
          Image Not Found
        </div>
      )}

      {children}
    </div>
  );
}

export default Poster;
