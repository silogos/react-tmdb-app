import CreditList from "@/components/CreditList";
import useMovieDetail from "@/hooks/useMovieDetail";
import useCredits from "@/hooks/useCredits";

import { MovieDetailHeader, MovieDetailHero } from "@/components/MovieDetail";
import useBackgroundImage from "@/hooks/useBackgroundImage";

function MovieDetailPage() {
  const { data } = useMovieDetail();
  const { casts, crews } = useCredits();
  useBackgroundImage(data?.backdrop_path);

  return (
    <>
      <div className="relative w-full min-h-screen">
        {data && (
          <>
            <MovieDetailHeader data={data} />
            <MovieDetailHero data={data} />
            <CreditList title="Cast" credits={casts} />
            <CreditList title="Crew" credits={crews} />
          </>
        )}
      </div>
    </>
  );
}

export default MovieDetailPage;
