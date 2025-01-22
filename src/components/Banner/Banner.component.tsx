import { BannerProps } from "./Banner.type";
import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";

function Banner({ src, className }: BannerProps) {
  if (!src)
    return (
      <div
        className={`relative aspect-video bg-gray-700 bg-opacity-90 rounded-lg overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 text-gray-300">
          <ViewfinderCircleIcon className="size-16" />
          Image Not Found
        </div>
      </div>
    );

  return (
    <img
      className={`aspect-video bg-gray-700 bg-opacity-90 rounded-lg ${className}`}
      src={`https://image.tmdb.org/t/p/w500/${src}`}
      alt="Movie Banner"
    ></img>
  );
}

export default Banner;
