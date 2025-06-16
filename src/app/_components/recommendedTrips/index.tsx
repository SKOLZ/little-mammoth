"use client";

import { useTripRecommendationsContext } from "@/app/context/tripRecommendationsContext";
import { RecommendedTrip } from "./_components/recommendedTrip";
import styles from "./styles.module.scss";
import cn from "classnames";

export const RecommendedTrips: React.FC = () => {
  const { trips } = useTripRecommendationsContext();

  if (trips.length === 0) {
    return null;
  }

  return (
    <section className={cn(styles.recommendedTrips)}>
      {trips.map((trip, index) => (
        <RecommendedTrip trip={trip} key={index} position={index + 1} />
      ))}
    </section>
  );
};
