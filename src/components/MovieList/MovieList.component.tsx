import { DisplayError, DisplayNoData } from "@/components/Displays";
import { MoviListErrorProps } from "./MovieList.type";

function MovieCardShimmenring() {
  return (
    <div className="animate-pulse aspect-[8/12] rounded-lg bg-gray-700 bg-opacity-90" />
  );
}

export function ListLoading() {
  return Array(20)
    .fill(true)
    .map((_, idx) => <MovieCardShimmenring key={idx.toString()} />);
}

export function ListError(props: MoviListErrorProps) {
  return <DisplayError {...props} />;
}

export function ListEmpty() {
  return <DisplayNoData />;
}
