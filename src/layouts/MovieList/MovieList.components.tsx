import { useNavigate } from "react-router";

export function MovieListHero() {
  return (
    <section id="hero" className="overflow-hidden py-4">
      <div className="mx-auto max-w-screen-xl px-4 py-14 lg:px-8 lg:py-20">
        <h1 className="text-center text-gray-300 text-4xl lg:text-7xl mb-4">
          TMDB
        </h1>
        <p className="text-center text-gray-300 text-base lg:text-2xl">
          (The Movie Database)
        </p>
      </div>
    </section>
  );
}

export function SearchInput() {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log("Submited");
      }}
    >
      <input
        type="search"
        className="w-64 border-2 rounded-lg  px-4 py-2 bg-gray-300"
        placeholder="Search..."
        onKeyDown={(evt) => {
          if (evt.currentTarget.checkValidity() && evt.key === "Enter") {
            console.log("do validate", !!evt.currentTarget.value);
            navigate(`/movies/search?query=${evt.currentTarget.value}`);
          }
        }}
        minLength={3}
        required
      />
    </form>
  );
}
