import { CreditListProps } from "./CreditList.type";
import { CreditItem, ListNoData } from "./CreditList.component";

function CreditList({ title, credits }: CreditListProps) {
  return (
    <section className="overflow-hidden mb-4">
      <div className="text-white mx-auto max-w-screen-xl px-8 py-2 sm:py-4 lg:py-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
          {title} <span className="text-gray-300">({credits.length})</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
          {credits.map((credit) => (
            <CreditItem key={credit.credit_id} credit={credit} />
          ))}
        </div>
        {credits.length < 1 && <ListNoData />}
      </div>
    </section>
  );
}

export default CreditList;
