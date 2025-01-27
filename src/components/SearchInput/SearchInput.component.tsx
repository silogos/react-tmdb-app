import { useCallback, useState } from "react";
import { SearchInputProps } from "./SearchInput.type";

function SearchInput({ onSubmit, className }: SearchInputProps) {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = useCallback(
    (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onSubmit(searchText);
    },
    [onSubmit, searchText]
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input
        data-testid="search-input"
        name="query"
        type="search"
        className="w-full border-2 rounded-lg  px-4 py-2 bg-white"
        placeholder="Search..."
        onChange={(evt) => setSearchText(evt.target.value)}
        required
      />
    </form>
  );
}

export default SearchInput;
