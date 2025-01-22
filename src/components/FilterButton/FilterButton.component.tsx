import { NavLink } from "react-router";
import { FilterButtonProps } from "./FilterButton.type";

function FilterButton({ filterId, title }: FilterButtonProps) {
  return (
    <NavLink
      to={filterId}
      className={({ isActive }) =>
        `px-4 py-2  text-nowrap rounded-lg ${
          isActive ? "bg-gray-50" : "bg-gray-400"
        }`
      }
    >
      {title}
    </NavLink>
  );
}

export default FilterButton;
