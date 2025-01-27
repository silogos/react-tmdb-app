import { NavLink } from "react-router";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import {
  CalendarDaysIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

import {
  getRatingText,
  formatRunTime,
  formatReleaseDate,
  getReleaseYear,
} from "@/utils/Movie.utils";

import { MovieDetailHeroProps } from "./MovieDetail.type";
import Banner from "@/components/Banner";

export function Header() {
  return (
    <header className="overflow-hidden mb-2 bg-gray-300 bg-opacity-20">
      <div className="mx-auto max-w-screen-xl px-8 py-4 text-gray-400">
        <div className="flex flex-row gap-4 items-stretch">
          <div className="flex flex-row justify-evenly gap-2 items-center">
            <NavLink
              to={".."}
              className="cursor-pointer hover:underline flex flex-row items-center text-sm"
            >
              <ChevronLeftIcon className="size-6 inline" />
              Back to list
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Hero({ data }: MovieDetailHeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-8 py-2 sm:py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
          <Banner className="lg:h-96" src={data.backdrop_path} />

          <div className="py-4">
            <h1 className="text-left text-white text-xl sm:text-2xl lg:text-4xl mb-4">
              {data.title} ({getReleaseYear(data.release_date)})
            </h1>
            <div className="flex flex-row flex-wrap items-center gap-3 mb-4 text-gray-300 text-base">
              {data.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="border border-gray-300 text-xs lg:text-sm px-2 py-1 rounded-full "
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="flex flex-row flex-wrap items-center gap-3 mb-4 text-gray-300 text-xs sm:text-sm lg:text-base">
              <span className="text-left font-bold text-nowrap">
                <CalendarDaysIcon className="size-5 inline mr-1 mb-1" />
                {formatReleaseDate(data.release_date)}
              </span>
              <span>•</span>
              <span className="text-left font-bold text-nowrap">
                <StarIcon className="size-5 inline mr-1 mb-1" />
                {getRatingText(data.vote_average)}
              </span>
              <span>•</span>
              <span className="text-left font-bold text-nowrap">
                <ClockIcon className="size-5 inline mr-1" />
                {formatRunTime(data.runtime)}
              </span>
            </div>

            <p className="text-left text-gray-300 text-xs sm:text-sm lg:text-base my-4">
              <i>{data.tagline}</i>
            </p>

            <p className="text-left text-white text-sm sm:text-base lg:text-lg font-bold mb-1">
              Overview
            </p>
            <p className="text-left text-gray-300 text-xs sm:text-sm lg:text-base">
              {data.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroShimmering() {
  return (
    <div className="animate-pulse mx-auto max-w-screen-xl px-8 py-2 sm:py-4 lg:py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div
          className={`relative lg:h-96 aspect-video bg-gray-700 bg-opacity-90 rounded-lg overflow-hidden`}
        ></div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full h-8 lg:h-10 rounded-lg bg-gray-700 bg-opacity-90" />
          <div className="flex flex-row gap-4">
            <div className="w-20 h-6 lg:h-8 rounded-full bg-gray-700 bg-opacity-90" />
            <div className="w-20 h-6 lg:h-8 rounded-full bg-gray-700 bg-opacity-90" />
            <div className="w-20 h-6 lg:h-8 rounded-full bg-gray-700 bg-opacity-90" />
            <div className="w-20 h-6 lg:h-8 rounded-full bg-gray-700 bg-opacity-90" />
          </div>
          <div className="w-3/4 h-6 lg:h-8 rounded-lg bg-gray-700 bg-opacity-90" />
          <div className="w-2/4 h-6 lg:h-8 rounded-lg bg-gray-700 bg-opacity-90" />
          <div className="w-3/4 h-6 lg:h-8 rounded-lg bg-gray-700 bg-opacity-90" />
          <div className="w-2/4 h-6 lg:h-8 rounded-lg bg-gray-700 bg-opacity-90" />
          <div className="w-1/4 h-6 lg:h-8 rounded-lg bg-gray-700 bg-opacity-90" />
        </div>
      </div>
    </div>
  );
}
