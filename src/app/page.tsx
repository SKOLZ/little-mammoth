import { Logo } from "./_components/logo";
import styles from "./styles.module.scss";
import { RecommendTripsForm } from "./_components/recommendTripsForm";
import { RecommendedTrips } from "./_components/recommendedTrips";
import { RecommendTripsFormParams } from "@/types/RecommendTripsFormParams";
import { Suspense } from "react";
import { RecommendTripsFormLayout } from "./_components/recommendTripsForm/_components/RecommendTripsFormLayout";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<RecommendTripsFormParams>;
}) {
  return (
    <section className={`section ${styles.mainSection}`}>
      <Logo typeLogo="full" />
      <Suspense fallback={<RecommendTripsFormLayout isDisabled={true} />}>
        <RecommendTripsForm searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<div>Loading recommendations...</div>}>
        <RecommendedTrips searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
