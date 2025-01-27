import { UserIcon } from "@heroicons/react/16/solid";
import { DisplayNoData } from "../Displays";
import { Credit } from "@/types/Movie.types";

export function ListNoData() {
  return <DisplayNoData />;
}

export function CreditItem({ credit }: { credit: Credit }) {
  return (
    <div key={credit.id} className="flex flex-row items-center gap-2">
      {credit.profile_path ? (
        <img
          className="size-12 sm:size-14 lg:size-16 object-cover rounded-lg"
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${credit.profile_path}`}
        ></img>
      ) : (
        <div className="bg-slate-400 rounded-lg">
          <UserIcon
            data-testid="user-profile"
            className="size-12 sm:size-14 lg:size-16"
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <div className="text-xs sm:text-sm lg:text-base font-bold">
          {credit.original_name}
        </div>
        <div className="text-xs sm:text-sm lg:text-base font-thin">
          {credit.character || credit.known_for_department}
        </div>
      </div>
    </div>
  );
}
