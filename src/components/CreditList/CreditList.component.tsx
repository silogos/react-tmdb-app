import { UserIcon } from "@heroicons/react/16/solid";
import { CreditListProps } from "./CreditList.type";
import { DisplayNoData } from "../Displays";
import { Credit } from "@/types/Movie.types";

export function CreditItem({ credit }: { credit: Credit }) {
  return (
    <div key={credit.id} className="flex flex-row items-center gap-2">
      {credit.profile_path ? (
        <img
          className="size-16 object-cover rounded-lg"
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${credit.profile_path}`}
        ></img>
      ) : (
        <div className="bg-slate-400 rounded-lg">
          <UserIcon data-testid="user-profile" className="size-16" />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <div className="text-base font-bold">{credit.original_name}</div>
        <div className="text-base font-thin">
          {credit.character || credit.known_for_department}
        </div>
      </div>
    </div>
  );
}

function CreditList({ title, credits }: CreditListProps) {
  return (
    <section className="overflow-hidden mb-4">
      <div className="text-white mx-auto max-w-screen-xl px-8 py-8">
        <h2 className="text-3xl font-bold mb-4">
          {title} <span className="text-gray-300">({credits.length})</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
          {credits.map((credit) => (
            <CreditItem key={credit.id} credit={credit} />
          ))}
        </div>
        {credits.length < 1 && <DisplayNoData />}
      </div>
    </section>
  );
}

export default CreditList;
