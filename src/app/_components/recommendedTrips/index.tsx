import { RecommendedTrip } from "./_components/recommendedTrip";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Trip } from "@/types/trip";
import { RecommendTripsFormParams } from "@/types/RecommendTripsFormParams";
import { preprocess, z } from "zod";
import { getTripRecommendations } from "@/services/tripRecommendations";
import { recommendTripsFormSchema } from "@/schema/recommendTripsFormSchema";



interface Props {
  searchParams: Promise<RecommendTripsFormParams>;
}

export const RecommendedTrips: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;

  if (!params || Object.keys(params).length === 0) {
    return null;
  }

  let result = recommendTripsFormSchema.safeParse(params);

  if (!result.success) {
    return <div>No trips match the specified attributes</div>
  }

  let trips: Array<Trip> = await getTripRecommendations<Trip[]>({
    constraints: {
      weight: parseInt(params.weight!),
      budget: parseInt(params.budget!),
    },
    resource: {
      type: params.type!,
      tier: params.tier!,
      rarity: params.rarity!,
    },
  });

  return (
    <section className={cn(styles.recommendedTrips)}>
      {trips.map((trip, index) => (
        <RecommendedTrip trip={trip} key={index} position={index + 1} />
      ))}
    </section>
  );
};
