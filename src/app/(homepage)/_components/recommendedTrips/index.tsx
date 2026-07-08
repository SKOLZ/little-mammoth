import { RecommendedTrip } from "./_components/recommendedTrip";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Trip } from "@/types/trip";
import { RecommendTripsFormParams } from "@/types/RecommendTripsFormParams";
import { getTripRecommendations } from "@/services/tripRecommendations";
import { recommendTripsFormSchema } from "@/schema/recommendTripsFormSchema";
import { Suspense } from "react";
import { RecommendedTripsSkeleton } from "./_components/recommendedTripsSkeleton";

interface Props {
  searchParams: Promise<RecommendTripsFormParams>;
}

export const RecommendedTrips: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;

  let result = recommendTripsFormSchema.safeParse(params);

  if (!result.success) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <section className={cn(styles.recommendedTrips)}>
          <RecommendedTripsSkeleton amount={3} />
        </section>
      }
    >
      <RecommendedTripsInner parsedParams={result.data} />
    </Suspense>
  );
};

interface RecommendedTripsInnerProps {
  parsedParams: Pick<
    Required<RecommendTripsFormParams>,
    "type" | "tier" | "rarity"
  > & {
    weight: number;
    budget: number;
  };
}

const RecommendedTripsInner: React.FC<RecommendedTripsInnerProps> = async ({
  parsedParams,
}) => {
  let trips: Array<Trip> = await getTripRecommendations<Trip[]>({
    constraints: {
      weight: parsedParams.weight,
      budget: parsedParams.budget,
    },
    resource: {
      type: parsedParams.type,
      tier: parsedParams.tier,
      rarity: parsedParams.rarity,
    },
  });

  return (
    <section className={cn(styles.recommendedTrips)}>
      {trips.map((trip, index) => (
        <RecommendedTrip trip={trip} key={index} position={index + 1} />
      ))}
      {trips.length === 0 && (
        <div className={styles.noTrips}>
          <p className="title-1 primary">No trips found</p>
          <p className="body-1 secondary">
            Try adjusting your constraints or resource selection.
          </p>
        </div>
      )}
    </section>
  );
};
