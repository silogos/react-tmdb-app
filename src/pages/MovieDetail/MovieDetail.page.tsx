import PageLayout from "@/layouts/Page";
import CreditList from "@/components/CreditList";
import { DisplayError } from "@/components/Displays";
import useMovieDetail from "@/hooks/useMovieDetail";
import useCredits from "@/hooks/useCredits";

import { Header, Hero, HeroShimmering } from "./MovieDetail.component";

function MovieDetailPage() {
  const { data, isLoading, isError, getData } = useMovieDetail();
  const { casts, crews } = useCredits();

  return (
    <PageLayout
      title={data?.original_title}
      titleAppendAppName={true}
      backgroundImagePath={data?.backdrop_path}
    >
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
    </PageLayout>
  );
}

export default MovieDetailPage;
