import CreditList from "@/components/CreditList";
import useMovieDetail from "@/hooks/useMovieDetail";
import useCredits from "@/hooks/useCredits";

import { Header, Hero, HeroShimmering } from "./MovieDetail.component";
import useBackgroundImage from "@/hooks/useBackgroundImage";
import { DisplayError } from "@/components/Displays";

function MovieDetailPage() {
  const { data, isLoading, isError, getData } = useMovieDetail();
  const { casts, crews } = useCredits();
  useBackgroundImage(data?.backdrop_path);

  return (
    <>
      <div className="relative w-full min-h-screen">
        <Header />

        {isError && (
          <div className="mx-auto max-w-screen-xl p-8">
            <DisplayError onReload={getData} />
          </div>
        )}

        {isLoading && <HeroShimmering />}

        {!isLoading && data && (
          <>
            <Hero data={data} />
            <CreditList title="Cast" credits={casts} />
            <CreditList title="Crew" credits={crews} />
          </>
        )}
      </div>
    </>
  );
}

export default MovieDetailPage;
