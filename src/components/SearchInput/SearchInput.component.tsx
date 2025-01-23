import { useCallback } from "react";
import { SearchInputProps } from "./SearchInput.type";

function SearchInput({ onSubmit, className }: SearchInputProps) {
  const handleSubmit = useCallback((evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const searctInput = evt.currentTarget.query.value;

    onSubmit(searctInput);
  }, []);

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
      data-testid="search-form"
      noValidate
    >
      <input
        data-testid="search-input"
        name="query"
        type="search"
        className="w-full border-2 rounded-lg  px-4 py-2 bg-white"
        placeholder="Search..."
        required
      />
    </form>
  );
}

export default SearchInput;
