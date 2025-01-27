import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="overflow-hidden bg-gray-300 bg-opacity-20">
      <div className="mx-auto max-w-screen-xl px-8 py-4">
        <div className="flex items-stretch">
          <NavLink
            to="/"
            className="cursor-pointer hover:underline flex flex-row items-center text-base rounded-lg text-nowrap text-gray-400"
          >
            <ChevronLeftIcon className="size-6 inline" />
            <span className="hidden lg:block">Back to list</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
