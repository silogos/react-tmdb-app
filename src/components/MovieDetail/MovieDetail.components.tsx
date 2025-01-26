import { NavLink } from "react-router";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import {
  CalendarDaysIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

import { getReleaseYear } from "@/utils/Movie.utils";

import {
  getRatingText,
  formatRunTime,
  formatReleaseDate,
} from "@/utils/Movie.utils";
import Banner from "../Banner";
import Poster from "../Poster";
import {
  MovieDetailHeaderProps,
  MovieDetailHeroProps,
} from "./MovieDetail.type";

export function MovieDetailHeader({ data }: MovieDetailHeaderProps) {
  return (
    <header className="overflow-hidden mb-2 bg-gray-300 bg-opacity-20">
      <div className="mx-auto max-w-screen-xl px-8 py-4 text-gray-400">
        <div className="flex flex-row gap-4 items-stretch">
          <Poster poster={data.poster_path} className="w-20" />

          <div className="flex flex-col justify-evenly">
            <h1 className="text-left text-white text-xl lg:text-4xl">
              {data.title} ({getReleaseYear(data.release_date)})
            </h1>

            <NavLink
              to={".."}
              className="cursor-pointer hover:underline flex flex-row items-center text-base lg:text-lg"
            >
              <ChevronLeftIcon className="size-6 inline" />
              <span>Back to list</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export function MovieDetailHero({ data }: MovieDetailHeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <Banner className="lg:h-96" src={data.backdrop_path} />

          <div className="py-4">
            <h1 className="text-left text-white text-xl lg:text-4xl mb-4">
              {data.title} ({getReleaseYear(data.release_date)})
            </h1>
            <div className="flex flex-row flex-wrap items-center gap-3 mb-4 text-gray-300 text-base">
              {data.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="border border-gray-300 text-sm px-2 py-1 rounded-full "
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="flex flex-row flex-wrap items-center gap-3 mb-4 text-gray-300 text-base">
              <span className="text-left font-bold">
                <CalendarDaysIcon className="size-5 inline mr-1 mb-1" />
                {formatReleaseDate(data.release_date)}
              </span>
              <span>•</span>
              <span className="text-left font-bold">
                <StarIcon className="size-5 inline mr-1 mb-1" />
                {getRatingText(data.vote_average)}
              </span>
              <span>•</span>
              <span className="text-left font-bold">
                <ClockIcon className="size-5 inline mr-1" />
                {formatRunTime(data.runtime)}
              </span>
            </div>

            <p className="text-left text-gray-300 text-base my-4">
              <i>{data.tagline}</i>
            </p>

            <span className="text-left text-white text-lg font-bold mb-1">
              Overview
            </span>
            <p className="text-left text-gray-300 text-base">{data.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
