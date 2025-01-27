import FilterButton from "@/components/FilterButton";
import SearchInput from "@/components/SearchInput";

export function Hero() {
  return (
    <section id="hero" className="overflow-hidden py-4">
      <div className="mx-auto max-w-screen-xl px-4 py-14 lg:px-8 lg:py-20">
        <h1 className="text-center text-gray-300 text-4xl lg:text-7xl mb-4">
          🎬 Movie App
        </h1>
        <p className="text-center text-gray-300 text-base lg:text-2xl">
          (The Movie Database)
        </p>
      </div>
    </section>
  );
}

export function Filter({
  categoryList,
  handleSearch,
}: {
  categoryList: {
    filterId: string;
    title: string;
  }[];
  handleSearch: (val: string) => void;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
      <div className="flex flex-row flex-nowrap overflow-x-auto gap-4">
        {categoryList.map(({ filterId, title }) => (
          <FilterButton key={filterId} filterId={filterId} title={title} />
        ))}
      </div>

      <SearchInput onSubmit={handleSearch} />
    </div>
  );
}
